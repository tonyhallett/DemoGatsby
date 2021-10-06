"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[462],{8801:function(e,t,a){var n=a(7294);t.Z=function(e){return n.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title)}},5521:function(e,t,a){a.r(t);var n=a(7294),s=a(8801),l=a(9731),i=a(1270);t.default=function(){return n.createElement("main",null,n.createElement("title",null,"Debugging"),n.createElement("p",null,"Gatsby has documentation on ",n.createElement(s.Z,{href:"https://www.gatsbyjs.com/docs/debugging-the-build-process",title:"debugging the build process"}),"."),n.createElement("p",null,n.createElement("code",null,"gatsby develop --help")," mentions the passing inspect or inspect-brk as ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-cli/src/create-cli.ts#L193",title:"args"}),"."),n.createElement("p",null,"Inspect ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-cli/src/create-cli.ts#L212",title:""}),"defaults to 9229.  Develop ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/commands/develop.ts#L75",title:"gets debug info"})," and it is used ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/commands/develop.ts#L108",title:"here"})),n.createElement("p",null,"With vscode Settings/Debug/Javascript : Auto Attach Filter set to always then running gatsby develop or gatsby build from npm scripts will enable debugging."),n.createElement(l.Z,{language:"javascript",style:i.Z},'\n{\n  "scripts": {\n    "develop": "gatsby develop",\n    "build": "gatsby build",\n  }\n}\n'),n.createElement("p",null,"Alternatively there is ",n.createElement(s.Z,{href:"https://www.gatsbyjs.com/docs/debugging-the-build-process/#vs-code-debugger-manual-config",title:"vscode launch configuration"}),"."),n.createElement("h2",null,".vscode/settings.json ( for windows )"),n.createElement(l.Z,{language:"javascript",style:i.Z},'\n{\n    "launch": {\n        "version": "0.2.0",\n        "configurations": [\n          {\n            "name": "Gatsby develop",\n            "type": "pwa-node",\n            "request": "launch",\n            "program": "${workspaceRoot}/node_modules/gatsby/dist/bin/gatsby",\n            "args": ["develop"],\n            "runtimeArgs": ["--nolazy"],\n            "console": "integratedTerminal"\n          },\n          {\n            "name": "Gatsby build",\n            "type": "pwa-node",\n            "request": "launch",\n            "program": "${workspaceRoot}/node_modules/gatsby/dist/bin/gatsby",\n            "args": ["build"],\n            "runtimeArgs": ["--nolazy"],\n            "console": "integratedTerminal"\n          },\n          {\n            "name": "Gatsby build global",\n            "type": "pwa-node",\n            "request": "launch",\n            "program": "${env:NVM_SYMLINK}/node_modules/gatsby-cli/cli.js",\n            "args": ["build","--verbose"],\n            "runtimeArgs": ["--nolazy"],\n            "console": "integratedTerminal"\n          }\n        ]\n      }\n}\n'),n.createElement("p",null,"Note there are two ways of specifying the entry point.  To debug the code path taken when you type gatsby build/develop the global cli should be specified ( as this is the bin in package.json ) which ",n.createElement("code",null,"require(`./lib/index.js`)"),'. "node_modules/gatsby/dist/bin/gatsby" is ',n.createElement("code",null,"require(`gatsby-cli`);")," which in turn is ",n.createElement("code",null,"require(`./lib/index.js`)"),", the same code as the global cli. Both the global and local cli call into node_modules/gatsby/dist/commands - build.js or develop.js due to ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby-cli/src/create-cli.ts#L82",title:"resolve-cwd"}),"."),n.createElement("p",null,"When there is a global cli the local cli redux store is given log state from global and the global cli is configured to use the local store.  This occurs ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/services/initialize.ts#L100",title:"here"})),n.createElement("p",null,'For verbose logging add "--verbose" to the args array.'),n.createElement("p",null,"The entry point is ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby-cli/src/index.ts#L12",title:"the gatsby cli"}),".  Although you will probably just want to add a breakpoint in build or develop within ",n.createElement("code",null,"node_modules/gatsby/dist/commands/",n.createElement("b",null,"develop|build"),".js")),n.createElement("p",null,"To understand gatsby debugging the ",n.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/commands/build.ts#L55",title:"build"})," is simpler."))}}}]);
//# sourceMappingURL=component---src-pages-deepdive-gatsby-debugging-js-d5ef0d64a47152f2106d.js.map