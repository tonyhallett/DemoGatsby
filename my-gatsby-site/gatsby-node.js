var path = require("path");
var apiFns = require("gatsby/dist/utils/api-node-docs");

const apiFnCalls = [];
exports.unstable_shouldOnCreateNode = () => {
    apiFnCalls.push("unstable_shouldOnCreateNode")
    return true
}
exports.createPagesStatefully = ({actions}) => {
    apiFnCalls.push("createPagesStatefully");
    const templatesDirectory = path.resolve(process.cwd(), "src/templates");
    const template = path.posix.join(templatesDirectory,"dynamicPageTemplate.js");

    const { createPage } = actions;
    var numPages = 3;
    var pathPrefix = "dynamicPage";
    for(var i =0;i<numPages;i++){
        const page = {
            path: pathPrefix + i,
            component:template,
            context:{numPages,pageNumber:i,pathPrefix}
        };
        createPage(page);
    }
}



exports.onPreInit = ({actions, store,getNodes, reporter}) => {
    apiFnCalls.push("onPreInit")
    reporter.info("reporting onPreInit");
    var nodes= getNodes();
    var logsState = store.getState().logs;
    
    var state = store.getState();
    var pluginsStatusState = state.status.plugins;
    if(pluginsStatusState["default-site-plugin"] == undefined){
        actions.setPluginStatus({some:"status"});
    }
}

var apiFnNames = Object.keys(apiFns);
apiFnNames.forEach(fnName => {
    if(!fnName.startsWith("_") && exports[fnName] == undefined){
        var apiFunction = function(){
            apiFnCalls.push(apiFunction.nameX);
            let allCalls = "";
            apiFnCalls.forEach(fnCall => {
                allCalls += fnCall + "\n"
            });
        }
        apiFunction.nameX = fnName;
        exports[fnName] = apiFunction;
    }
})
