import * as React from "react"
import LinkNewTab from "../../../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const createPages = () => {
    return <main>
        <title>Creating pages</title>
        <p>See here for where <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/index.ts#L68" title="createPages"/> lies in the bootstrapping process</p>
        <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/services/create-pages.ts#L47" title="createPages"/> node api is run first then the <linkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/services/create-pages.ts#L65" title="createPageStatefully"/> api</p>
        <p>Both functions are passed the same additional argument graphQl.  The difference between the two functions as explained from the <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPagesStatefully" title="docs"/></p>
        <cite>Like createPages but for plugins who want to manage creating and removing pages themselves in response to changes in data not managed by Gatsby. Plugins implementing createPages will get called regularly to recompute page information as Gatsby’s data changes but those implementing createPagesStatefully will not.</cite>
        <cite>An example of a plugin that uses this extension point is the plugin gatsby-plugin-page-creator which monitors the src/pages directory for the adding and removal of JS pages. As its source of truth, files in the pages directory, is not known by Gatsby, it needs to keep its own state about its world to know when to add and remove pages.</cite>
        {/* todo find how the code works that recreates the pages */}
        <h2>gatsby-plugin-page-creator</h2>
        <p>This plugin is adding if you do not provide it. The docs can be found here <LinkNewTab href="https://www.gatsbyjs.com/plugins/gatsby-plugin-page-creator/" title="here"/></p>
        <p>If you do not provide the plugin its <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/17a3f9f69ae2710f4aeef27603226281f2713281/packages/gatsby/src/bootstrap/load-plugins/load.ts#L353" title="default options"/> are : </p>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`
        // default options for gatsby-plugin-page-creator
        let pageCreatorOptions: IPluginRefOptions | undefined = {
            path: slash(path.join(program.directory, \`src/pages\`)),
            pathCheck: false,
        }
        `}
        </SyntaxHighlighter>
        <h3>How it works</h3>
        <p>For all files with program extensions in the folder specified by the path option consider these files for page creation.</p>
        <p>Program extensions are determined at the begiining of the bootstrap <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/services/initialize.ts#L567" title="services initialize"/></p>
        <SyntaxHighlighter  language="javascript" style={docco}>
            {
                `
                // Collect resolvable extensions and attach to program.
                const extensions = [\`.mjs\`, \`.js\`, \`.jsx\`, \`.wasm\`, \`.json\`]
                const apiResults = await apiRunnerNode(\`resolvableExtensions\`, {
                  traceId: \`initial-resolvableExtensions\`,
                  parentSpan,
                })
              
                store.dispatch({
                  type: \`SET_PROGRAM_EXTENSIONS\`,
                  payload: _.flattenDeep([extensions, apiResults]),
                })
                `
            }
        </SyntaxHighlighter>
        <p>These extensions are stored in the redux store <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/reducers/program.ts#L30" title="redux store"/> and the gatsby-plugin-page-creator retrieves them.</p>
        <p><b>The resolvableExtensions node api is important for compile-to-js plugins</b> such as <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby-plugin-mdx/gatsby-node.js#L41" title="gatsby-plugin-mdx"/></p>
        <p>There are 3 ways in which pages can be created:</p>
        <ul>
            <li>Collection pages - path contains {} </li>
            <li>Client only - path contains []</li>
            <li>Normal page</li>
        </ul>
        <p>For both client and normal page...........</p>
        <p>Note that a page component <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/utils/validate-page-component.ts#L78" title="must have a default export"/> </p>

        <p>When the <code>createPage</code> action ( creator ) is invoked a <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/redux/actions/public.js#L461" title="SitePage node"/> is also created with details of the page. </p>
        <SyntaxHighlighter language="typescript" style={docco}>
            {
                `
                actions.createPage = (
                  page: PageInput,
                  plugin?: Plugin,
                  actionOptions?: ActionOptions
                ) => {
                  const internalPage: Page = {
                    internalComponentName,
                    path: page.path,
                    matchPath: page.matchPath,
                    component: page.component,
                    componentChunkName: generateComponentChunkName(page.component),
                    isCreatedByStatefulCreatePages:
                          actionOptions?.traceId === \`initial-createPagesStatefully\`,
                    // Ensure the page has a context object
                    context: page.context || {},
                    updatedAt: Date.now(),
                    // Link page to its plugin.
                    pluginCreator___NODE: plugin.id ?? \`\`,
                    pluginCreatorId: plugin.id ?? \`\`,
                  }

                  const { updatedAt, ...node } = internalPage
                  node.internal = {
                    type: \`SitePage\`,
                    contentDigest: createContentDigest(node),
                  }

                  // new node path
                  node.internal.counter = getNextNodeCounter()
                
                  // ************************
                  // this path taken first time page is encountered
                  updateNodeAction = {
                    ...actionOptions,
                    type: \`CREATE_NODE\`,
                    plugin,
                    oldNode,
                    payload: node,
                  }
                  // *************************
                  const actions = [
                    {
                      ...actionOptions,
                      type: \`CREATE_PAGE\`,
                      contextModified,
                      plugin,
                      payload: internalPage,
                    },
                  ]
                  
                  actions.push(updateNodeAction)
                
                  return actions
                }
                `
            }
        </SyntaxHighlighter>
        <p>Note that as soon as the redux store has been updated with the new page ( the store has been setup to emit ) <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/7adef559190aa9f785666b1c0ce7f9937230f171/packages/gatsby/src/redux/plugin-runner.ts#L57" title="onCreatePage"/> is run.</p>
        <p>The same occurs for the SitePage node.  ( it is only for SitePage nodes as all other nodes are created with the createNode action ( creator ) which deals with this.</p>
    </main>
}

export default createPages