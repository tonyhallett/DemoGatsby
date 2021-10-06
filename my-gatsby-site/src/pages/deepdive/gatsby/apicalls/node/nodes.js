import * as React from "react"
import LinkNewTab from "../../../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const nodes = () => {
    return <main>
        <title>Nodes</title>
        <h2>Node api fns</h2>
        <p><LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes" title="sourceNodes ( docs)"/></p>
        <p><LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode" title="onCreateNode (docs)"/></p>
        <h2>actions</h2>
        <p>Mention/link how they are created.</p>
        <h2>Node api helpers</h2>
        <p><code>getNode(id:string)</code>.  This gets the node ( created by createNode action or internally by 'CREATE_NODE') from the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/datastore/datastore.ts#L7" title="data store"/>.
        This will be the redux store unless you have set the LMDB flag in your gatsby-config.js.  Note that feature flags are <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs" title="mentioned in the docs"/> but the listed features are not up to date. Flags go in your gatsby-config.js.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
module.exports = {
  flags: {
    LMDB_STORE: true,
  },
}
  `}
</SyntaxHighlighter>
        <p>The LMDB data store is mentioned here <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/release-notes/v3.7/#experimental-node-persistence-in-lmdb" title="here"/>.  <LinkNewTab href="" title="Available flags"/> become <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/bootstrap/load-config-and-plugins.ts#L64" title="environment variables"/>. 
        </p>
        <p>The LMDB data store <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/64c4b701de9a6dc5e41c4b6a71bbcc8a38bbb55f/packages/gatsby/src/datastore/lmdb/lmdb-datastore.ts#L235" to="uses the emitter"/> that is listening to redux store changes to make the necessary changes. It is important to use the <code>getNode</code> node api helper over using the <code>store</code> because of this abstraction.</p>
        <p>Also note that setting the LMDB flag will also mean that the lmdb is also used for the plugin cache</p>{/* todo link to section*/}
        
        <p><code>loadNodeContent(node)</code> - Will the first time it is called ( is cached thereafter) ask the plugin that created the node to <code>loadNodeContent</code></p>
        <p><code>createNodeId</code></p>
        
    </main>
}

export default nodes