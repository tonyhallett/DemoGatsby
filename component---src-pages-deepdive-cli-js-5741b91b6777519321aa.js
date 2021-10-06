"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[302],{9547:function(e,t,a){var r=a(7294);t.Z=function(e){return r.createElement(r.Fragment,null,r.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title),r.createElement("br",null))}},8801:function(e,t,a){var r=a(7294);t.Z=function(e){return r.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title)}},4513:function(e,t,a){var r=a(7294);t.Z=function(){return r.createElement("code",null,"gatsby new [rootPath] [starter]")}},262:function(e,t,a){var r=a(7294),n=a(9354);t.Z=function(){return r.createElement(r.Fragment,null,"The format for ",r.createElement("code",null,"[starter]")," is described in ",r.createElement(n.Z,{href:"https://www.gatsbyjs.com/docs/starters/",title:"gatsby docs starters"}),".")}},9354:function(e,t,a){var r=a(7294);t.Z=function(e){return r.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title)}},1910:function(e,t,a){a.r(t);var r=a(7294),n=a(8801),s=a(9547),c=a(4513),l=a(262),b=a(9731),i=a(1270);t.default=function(){return r.createElement("main",null,r.createElement("title",null,"Cli"),r.createElement("p",null,"The code for the cli can be found ",r.createElement(n.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts",title:"here"})),r.createElement("p",null,r.createElement(n.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts#L549",title:"Here"})," we can see the code for the gatsby new command."),r.createElement(b.Z,{language:"javascript",style:i.Z},'\nimport { run as runCreateGatsby } from "create-gatsby"\n\n//......\nreturn cli\n    .command({\n      command: `new [rootPath] [starter]`,\n      describe: `Create new Gatsby project.`,\n      handler: handlerP(async ({ rootPath, starter }) => {\n        const starterStr = starter ? String(starter) : undefined\n        const rootPathStr = rootPath ? String(rootPath) : undefined\n\n        // We only run the interactive CLI when there are no arguments passed in\n        if (!starterStr && !rootPathStr) {\n          await runCreateGatsby()\n        } else {\n          await initStarter(starterStr, rootPathStr)\n        }\n      }),\n    })\n'),r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts#L549",title:"create-gatsby run"}),r.createElement("p",null,"Here you can see the prompting and the answers map to files providing the necessary plugins for package install and configuration in gatsby-config.js"),r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/cmses.json",title:"cms"}),r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/features.json",title:"features"}),r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/styles.json",title:"styles"}),r.createElement("p",null,"The starter is initialized first. The path taken depends upon the starter argument ",r.createElement(c.Z,null),". ",r.createElement(l.Z,null)),r.createElement("p",null,"For a github repo - ",r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/init-starter.ts#L341",title:"clone"})," "),r.createElement("p",null,"Then the plugins are installed. Performed by the cli ",r.createElement(s.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/handlers/plugin-add.ts#L62",title:"addPlugins"})),r.createElement("p",null,"Site metadata title is then set"),r.createElement("p",null,"Some final git work is ",r.createElement(n.Z,{href:"https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/init-starter.ts#L190",title:"performed."})))}}}]);
//# sourceMappingURL=component---src-pages-deepdive-cli-js-5741b91b6777519321aa.js.map