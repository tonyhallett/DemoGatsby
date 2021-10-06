import * as React from "react"
import LinkNewTab from "../../../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const creatingNodes = () => {
    return <main>
        <title>Creating nodes</title>
        <p>Nodes are created with gatsby-node.js <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes" title="sourceNodes ( docs )"/></p>
        <p>When using the <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNode" title="createNode action ( docs)"/> you may want to use the node helper <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/#createNodeId" title="createNodeApi ( docs )"/>.  
        The node api helper <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/#createContentDigest" title="createContentDigest ( docs )"/> should be used.</p>
        <p>After the api runner has <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/9a2f660d3695042eee1b7057e8a0874e395fff5a/packages/gatsby/src/utils/source-nodes.ts#L99" title="sourced nodes"/> the store is <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/9a2f660d3695042eee1b7057e8a0874e395fff5a/packages/gatsby/src/utils/source-nodes.ts#L84" title="dispatched delete node actions"/>  for each stale node.  
        Stale nodes are nodes from the store that have not been touched.  Nodes are touched when the touchNode action is called and internally for when createNode and the node already exists in the store ( by id ) <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/redux/actions/public.js#L831" title="and has not changed"/>.  The node has changed if the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/utils/nodes.ts#L9" title="content digest has changed"/>.  
        The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/redux/actions/public.js#L472" title="same logic applies"/> to the site page nodes that are created when the createPage action is invoked.</p>
        <p>Note that there are nodes created internally by gatsby.  When a page is created a SitePage node is created.</p>
        <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/internal-plugins/internal-data-bridge/gatsby-node.js#L44" title="internal-data-bridge"/> 
        creates nodes with information about the following :</p>
        <ul>
            <li>plugins - type SitePlugin</li>
            <li>config - type Site.  This is the config without the plugins.</li>
            <li>build time - type SiteBuildMetadata.  This is up to the moment that sourceNodes is invoked.</li>
            <li>functions - type SiteFunction</li>
        </ul>
    </main>
}
export default creatingNodes