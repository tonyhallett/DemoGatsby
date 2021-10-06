import * as React from "react"
import LinkNewTab from '../../../components/LinkNewTab'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const debugging = () => {
    return <main>
        <title>Debugging</title>
        <p>Gatsby has documentation on <LinkNewTab href="https://www.gatsbyjs.com/docs/debugging-the-build-process" title="debugging the build process"/>.</p>
        <p><code>gatsby develop --help</code> mentions the passing inspect or inspect-brk as <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-cli/src/create-cli.ts#L193" title="args"/>.</p>
        <p>Inspect <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-cli/src/create-cli.ts#L212" title=""/>defaults to 9229.  Develop <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/commands/develop.ts#L75" title="gets debug info"/> and it is used <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/commands/develop.ts#L108" title="here"/></p>
        <p>With vscode Settings/Debug/Javascript : Auto Attach Filter set to always then running gatsby develop or gatsby build from npm scripts will enable debugging.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
{`
{
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
  }
}
`}
        </SyntaxHighlighter>
        <p>Alternatively there is <LinkNewTab href="https://www.gatsbyjs.com/docs/debugging-the-build-process/#vs-code-debugger-manual-config" title="vscode launch configuration"/>.</p>
        <h2>.vscode/settings.json ( for windows )</h2>
        <SyntaxHighlighter language="javascript" style={docco}>
{`
{
    "launch": {
        "version": "0.2.0",
        "configurations": [
          {
            "name": "Gatsby develop",
            "type": "pwa-node",
            "request": "launch",
            "program": "\${workspaceRoot}/node_modules/gatsby/dist/bin/gatsby",
            "args": ["develop"],
            "runtimeArgs": ["--nolazy"],
            "console": "integratedTerminal"
          },
          {
            "name": "Gatsby build",
            "type": "pwa-node",
            "request": "launch",
            "program": "\${workspaceRoot}/node_modules/gatsby/dist/bin/gatsby",
            "args": ["build"],
            "runtimeArgs": ["--nolazy"],
            "console": "integratedTerminal"
          },
          {
            "name": "Gatsby build global",
            "type": "pwa-node",
            "request": "launch",
            "program": "\${env:NVM_SYMLINK}/node_modules/gatsby-cli/cli.js",
            "args": ["build","--verbose"],
            "runtimeArgs": ["--nolazy"],
            "console": "integratedTerminal"
          }
        ]
      }
}
`}
        </SyntaxHighlighter>
        <p>Note there are two ways of specifying the entry point.  To debug the code path taken when you type gatsby build/develop the global cli should be specified ( as this is the bin in package.json ) which <code>require(`./lib/index.js`)</code>.  
          "node_modules/gatsby/dist/bin/gatsby" is <code>require(`gatsby-cli`);</code> which in turn is <code>require(`./lib/index.js`)</code>, the same code as the global cli.  
          Both the global and local cli call into node_modules/gatsby/dist/commands - build.js or develop.js due to <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby-cli/src/create-cli.ts#L82" title="resolve-cwd"/>.
        </p>
        <p>When there is a global cli the local cli redux store is given log state from global and the global cli is configured to use the local store.  This occurs <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/services/initialize.ts#L100" title="here"/></p>
        <p>For verbose logging add "--verbose" to the args array.</p>
        <p>The entry point is <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby-cli/src/index.ts#L12" title="the gatsby cli"/>.  Although you will probably just want to add a breakpoint in build or develop within <code>node_modules/gatsby/dist/commands/<b>develop|build</b>.js</code></p>
        <p>To understand gatsby debugging the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/commands/build.ts#L55" title="build"/> is simpler.</p>
    </main>
}

export default debugging