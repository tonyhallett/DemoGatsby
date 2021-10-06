import * as React from "react"
import LinkNewTab from '../../components/LinkNewTab'
import LinkNewLineNewTab from '../../components/LinkNewLineNewTab'
import GatsbyNew from '../../components/gatsby-docs/gatsbynew'
import GatsbyNewStarterFormat from '../../components/gatsby-docs/gatsbynewstarterformat'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const cli = () => {
    return <main>
        <title>Cli</title>
        <p>The code for the cli can be found <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts" title="here"/></p>
        <p><LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts#L549" title="Here"/> we can see the code for the gatsby new command.</p>
        <SyntaxHighlighter language="javascript" style={docco}>      
{`
import { run as runCreateGatsby } from "create-gatsby"

//......
return cli
    .command({
      command: \`new [rootPath] [starter]\`,
      describe: \`Create new Gatsby project.\`,
      handler: handlerP(async ({ rootPath, starter }) => {
        const starterStr = starter ? String(starter) : undefined
        const rootPathStr = rootPath ? String(rootPath) : undefined

        // We only run the interactive CLI when there are no arguments passed in
        if (!starterStr && !rootPathStr) {
          await runCreateGatsby()
        } else {
          await initStarter(starterStr, rootPathStr)
        }
      }),
    })
`}
        </SyntaxHighlighter>
        <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/create-cli.ts#L549" title="create-gatsby run"/>
        <p>Here you can see the prompting and the answers map to files providing the necessary plugins for package install and configuration in gatsby-config.js</p>
        <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/cmses.json" title="cms"/>
        <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/features.json" title="features"/>
        <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/styles.json" title="styles"/>
        <p>The starter is initialized first. The path taken depends upon the starter argument <GatsbyNew/>. <GatsbyNewStarterFormat/></p>
        <p>For a github repo - <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/init-starter.ts#L341" title="clone"/> </p>
        <p>Then the plugins are installed. Performed by the cli <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/gatsby-cli/src/handlers/plugin-add.ts#L62" title="addPlugins"/></p>
        <p>Site metadata title is then set</p>
        <p>Some final git work is <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/bb1c470a636a09b669f30d5b3674831cd2b55362/packages/create-gatsby/src/init-starter.ts#L190" title="performed."/></p>
        
    </main>
}
export default cli;