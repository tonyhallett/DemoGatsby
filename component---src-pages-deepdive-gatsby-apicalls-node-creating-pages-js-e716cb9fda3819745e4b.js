"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[571],{9354:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title))}},2047:function(e,t,n){function a(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.r(t),n.d(t,{default:function(){return p}});var s,o,i=n(7294),l=n(9354),r=n(9731),c=n(1270),p=function(){return i.createElement("main",null,i.createElement("title",null,"Creating pages"),i.createElement("p",null,"See here for where ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/index.ts#L68",title:"createPages"})," lies in the bootstrapping process"),i.createElement("p",null,"The ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/services/create-pages.ts#L47",title:"createPages"})," node api is run first then the ",i.createElement("linkNewTab",{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/services/create-pages.ts#L65",title:"createPageStatefully"})," api"),i.createElement("p",null,"Both functions are passed the same additional argument graphQl.  The difference between the two functions as explained from the ",i.createElement(l.Z,{href:"https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPagesStatefully",title:"docs"})),i.createElement("cite",null,"Like createPages but for plugins who want to manage creating and removing pages themselves in response to changes in data not managed by Gatsby. Plugins implementing createPages will get called regularly to recompute page information as Gatsby’s data changes but those implementing createPagesStatefully will not."),i.createElement("cite",null,"An example of a plugin that uses this extension point is the plugin gatsby-plugin-page-creator which monitors the src/pages directory for the adding and removal of JS pages. As its source of truth, files in the pages directory, is not known by Gatsby, it needs to keep its own state about its world to know when to add and remove pages."),i.createElement("h2",null,"gatsby-plugin-page-creator"),i.createElement("p",null,"This plugin is adding if you do not provide it. The docs can be found here ",i.createElement(l.Z,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-page-creator/",title:"here"})),i.createElement("p",null,"If you do not provide the plugin its ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/load-plugins/load.ts#L353",title:"default options"})," are : "),i.createElement(r.Z,{language:"javascript",style:c.Z},"\n        // default options for gatsby-plugin-page-creator\n        let pageCreatorOptions: IPluginRefOptions | undefined = {\n            path: slash(path.join(program.directory, `src/pages`)),\n            pathCheck: false,\n        }\n        "),i.createElement("h3",null,"How it works"),i.createElement("p",null,"For all files with program extensions in the folder specified by the path option consider these files for page creation."),i.createElement("p",null,"Program extensions are determined at the begiining of the bootstrap ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/services/initialize.ts#L567",title:"services initialize"})),i.createElement(r.Z,{language:"javascript",style:c.Z},"\n                // Collect resolvable extensions and attach to program.\n                const extensions = [`.mjs`, `.js`, `.jsx`, `.wasm`, `.json`]\n                const apiResults = await apiRunnerNode(`resolvableExtensions`, {\n                  traceId: `initial-resolvableExtensions`,\n                  parentSpan,\n                })\n              \n                store.dispatch({\n                  type: `SET_PROGRAM_EXTENSIONS`,\n                  payload: _.flattenDeep([extensions, apiResults]),\n                })\n                "),i.createElement("p",null,"These extensions are stored in the redux store ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/reducers/program.ts#L30",title:"redux store"})," and the gatsby-plugin-page-creator retrieves them."),i.createElement("p",null,i.createElement("b",null,"The resolvableExtensions node api is important for compile-to-js plugins")," such as ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-plugin-mdx/gatsby-node.js#L41",title:"gatsby-plugin-mdx"})),i.createElement("p",null,"There are 3 ways in which pages can be created:"),i.createElement("ul",null,i.createElement("li",null,"Collection pages - path contains "," "),i.createElement("li",null,"Client only - path contains []"),i.createElement("li",null,"Normal page")),i.createElement("p",null,"For both client and normal page..........."),i.createElement("p",null,"When the ",i.createElement("code",null,"createPage")," action ( creator ) is invoked a ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/redux/actions/public.js#L461",title:"SitePage node"})," is also created with details of the page. "),i.createElement(r.Z,{language:"javascript",style:c.Z},"\n                actions.createPage = (\n                    page: PageInput,\n                    plugin?: Plugin,\n                    actionOptions?: ActionOptions\n                  ) => {\n                    // ....  \n                    const internalPage: Page = {\n                        internalComponentName,\n                        path: page.path,\n                        matchPath: page.matchPath,\n                        component: page.component,\n                        componentChunkName: generateComponentChunkName(page.component),\n                        isCreatedByStatefulCreatePages:\n                            actionOptions?.traceId === `initial-createPagesStatefully`,\n                        // Ensure the page has a context object\n                        context: page.context || {},\n                        updatedAt: Date.now(),\n                    \n                        // Link page to its plugin.\n                        pluginCreator___NODE: plugin.id ?? "(o||(o=a([",\n                        pluginCreatorId: plugin.id ?? "])))(s||(s=a([",\n                      }\n                      const { updatedAt, ...node } = internalPage\n                      node.internal = {\n                        type: `SitePage`,\n                        contentDigest: createContentDigest(node),\n                    }\n\n                    // new node path\n                    if(false /* satisfy syntaxhighlighter */){\n                    else {\n                        node.internal.counter = getNextNodeCounter()\n                    \n                        updateNodeAction = {\n                          ...actionOptions,\n                          type: `CREATE_NODE`,\n                          plugin,\n                          oldNode,\n                          payload: node,\n                        }\n                    }\n                    \n                      const actions = [\n                        {\n                          ...actionOptions,\n                          type: `CREATE_PAGE`,\n                          contextModified,\n                          plugin,\n                          payload: internalPage,\n                        },\n                      ]\n                    \n                      if (deleteActions && deleteActions.length) {\n                        actions.push(...deleteActions)\n                      }\n                    \n                      actions.push(updateNodeAction)\n                    \n                      return actions\n\n                  }\n                "],[",\n                      }\n                      const { updatedAt, ...node } = internalPage\n                      node.internal = {\n                        type: \\`SitePage\\`,\n                        contentDigest: createContentDigest(node),\n                    }\n\n                    // new node path\n                    if(false /* satisfy syntaxhighlighter */){\n                    else {\n                        node.internal.counter = getNextNodeCounter()\n                    \n                        updateNodeAction = {\n                          ...actionOptions,\n                          type: \\`CREATE_NODE\\`,\n                          plugin,\n                          oldNode,\n                          payload: node,\n                        }\n                    }\n                    \n                      const actions = [\n                        {\n                          ...actionOptions,\n                          type: \\`CREATE_PAGE\\`,\n                          contextModified,\n                          plugin,\n                          payload: internalPage,\n                        },\n                      ]\n                    \n                      if (deleteActions && deleteActions.length) {\n                        actions.push(...deleteActions)\n                      }\n                    \n                      actions.push(updateNodeAction)\n                    \n                      return actions\n\n                  }\n                "])))),i.createElement("p",null,"Note that as soon as the redux store has been updated with the new page ( the store has been setup to emit ) ",i.createElement(l.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/redux/plugin-runner.ts#L57",title:"onCreatePage"})," is run."),i.createElement("p",null,"The same occurs for the SitePage node.  ( it is only for SitePage nodes as all other nodes are created with the createNode action ( creator ) which deals with this."))}}}]);
//# sourceMappingURL=component---src-pages-deepdive-gatsby-apicalls-node-creating-pages-js-e716cb9fda3819745e4b.js.map