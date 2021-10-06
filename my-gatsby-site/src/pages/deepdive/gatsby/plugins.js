import * as React from "react"

import LinkNewTab from '../../../components/linkNewTab'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const plugins = () => {
    return <main>
        <title>Plugin loading</title>
        <p>The bootstrap loads plugins</p>
        <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/index.ts#L55" title="loadConfigAndPlugins"/>
        <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/utils/worker/child/load-config-and-plugins.ts" title="loadConfigAndPlugins"/>
        <p>Note the <code>apiRunnerNode(`onPluginInit`)</code> that will will run the plugin init gatsby node api method for all plugins.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
{`
import { loadConfigAndPlugins as internalLoadConfigAndPlugins } from "../../../bootstrap/load-config-and-plugins"
import { store } from "../../../redux"
import apiRunnerNode from "../../api-runner-node"

export async function loadConfigAndPlugins(
  ...args: Parameters<typeof internalLoadConfigAndPlugins>
): Promise<void> {
  const [{ siteDirectory, program }] = args

  store.dispatch({
    type: \`SET_PROGRAM\`,
    payload: {
      ...program,
      directory: siteDirectory,
    },
  })
  await internalLoadConfigAndPlugins(...args)

  // Cache is already initialized
  if (_CFLAGS_.GATSBY_MAJOR === \`4\`) {
    await apiRunnerNode(\`onPluginInit\`)
  } else {
    await apiRunnerNode(\`unstable_onPluginInit\`)
  }
}
`}
        </SyntaxHighlighter>
        <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/load-config-and-plugins.ts#L97" title="loadConfigAndPlugins"/>
        <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/load-plugins/index.ts#L100" title="loadPlugins"/>
        <p><b>The actual logic !</b><LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/load-plugins/load.ts#L179" title="loadPlugins"/></p>
        <p>Following the code we can see that plugins are <LinkNewTab href="https://github.com/gatsbyjs/gatsby/tree/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/internal-plugins" title="internal plugins"/>, <LinkNewTab href="https://github.com/gatsbyjs/gatsby/tree/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby-plugin-typescript" title="gatsby-plugin-typescript"/>, plugins in config ( both npm and local), the 
        default page creator <LinkNewTab href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-page-creator" title="gatsby-plugin-page-creator"/> with options to source from src/pages ( unless explicitly provided ) and a default-site-plugin representing the loose files.  
        One scenario where you would need the plugin name, default-site-plugin, is if you were using node api action setPluginStatus.  To retrieve you need to use the store api helper - <code>store.getstate().status.plugins.[pluginname]</code>
        </p>
        <p>A list of the functions implemented by each plugin for the 3 apis is determined.  For gatsby-node.js the module is required.  For the other two they are parsed.</p>
    </main>
}
export default plugins;