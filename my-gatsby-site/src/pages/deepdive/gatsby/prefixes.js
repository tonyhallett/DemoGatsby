import * as React from "react"
import LinkNewTab from "../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const prefixes = () => {
    return <main>
        <title>Prefixes</title>
        <p>There are two prefixes that can be added to your gatsby-config.js.  From the docs - <LinkNewTab href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix" title="path prefix"/> and <LinkNewTab href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/asset-prefix/" title="asset prefix"/>.  
        These two prefixes will be used if your site is built with <code>--prefix-paths</code></p>
        <p>There are two prefix values available to plugin node api functions - basePath ( undocumented) and pathPrefix.  When built with <code>--prefix-paths</code> path prefix will be assetPrefix/pathPrefix. The logic can be found <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/9505caca831047aff3a4d6c544b985a6e0b267b1/packages/gatsby/src/utils/get-public-path.ts#L6" title="here"/>  
        The basePath on the other hand is just the pathPrefix from the config.
        </p>
        <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/9505caca831047aff3a4d6c544b985a6e0b267b1/packages/gatsby/src/utils/webpack.config.js#L227" title="webpack config"/> adds global variables for the base path, path prefix and the asset prefix.</p>
        <p>Todo - find the code where they are used for Link and also asset prefixes.</p>
    </main>
}
export default prefixes