import * as React from "react"
import LinkNewTab from "../../../components/linkNewTab"
import Calls from "../../../components/calls"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const cacheAndRedux = () => {
    return <main>
        <title>Cache and Redux</title>
        {/* should go inside node api ? no mention of cache in the two other apis although perhaps as state is saved during build*/}
        <p>Redux is used for state management in gatsby.  There are really two redux stores, one for reporter logging and the general store.</p>
        <p>The reporter store is created <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L10" title="here"/>.  Note that the reporter actions are bound to the <linkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L32" title="dispatch"/> function.</p>
        <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby/src/redux/index.ts#L80" title="main redux store"/> has multiple reducers <b>that include the reporter </b> <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby/src/redux/reducers/index.ts#L2" title="logs reducer"/>.  The typescript state can be found <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby/src/redux/types.ts#L223" title="here"/>
        When we gatsby build/develop, very early on we get the following <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby/src/services/initialize.ts#L100" title="code"/>.</p>
        <SyntaxHighlighter language="typescript" style={docco}>
  {`
  export async function initialize({
    program: args,
    parentSpan,
  }: IBuildContext): Promise<{
    store: Store<IGatsbyState, AnyAction>
    workerPool: WorkerPool.GatsbyWorkerPool
  }> {
    //....
  
    /* Time for a little story...
     * When running \`gatsby develop\`, the globally installed gatsby-cli starts
     * and sets up a Redux store (which is where logs are now stored). When gatsby
     * finds your project's locally installed gatsby-cli package in node_modules,
     * it switches over. This instance will have a separate redux store. We need to
     * ensure that the correct store is used which is why we call setStore
     * (/packages/gatsby-cli/src/reporter/redux/index.js)
     *
     * This function
     * - copies over the logs from the global gatsby-cli to the local one
     * - sets the store to the local one (so that further actions dispatched by
     * the global gatsby-cli are handled by the local one)
     */
    if (args.setStore) {
      args.setStore(store)
    }
    //...
  }
  `}
         </SyntaxHighlighter>
        
        <p> The cli passes <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L80" title="setStore"/> <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/create-cli.ts#L128" title="in args"/>.</p>
        <SyntaxHighlighter language="typescript" style={docco}>
  {`
  // internally there are no storeSwapListeners added with onStoreSwap.
  export const setStore = (s: GatsbyCLIStore): void => {
    s.dispatch({
      type: Actions.SetLogs,
      payload: store.getState().logs,
    } as ISetLogs)
    store = s
    storeSwapListeners.forEach(fn => fn(store))
  }
  }
  `}
         </SyntaxHighlighter>
         <p>The setStore function is in the same module as the reporter store.  There are two reasons for setStore.</p>
         <p>The first is to provide the global cli reporter log state to the local reporter log state that is used when using the reporter in build/develop.  Given that the main store has the local reporter reducer, when the <code>Actions.SetLogs</code> 
         action is dispatched on the main store the logs slice will be <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/reducers/logs.ts#L98" to="set"/> to the log state containing any logging performed by the global cli reporter.</p>
         <SyntaxHighlighter language="typescript" style={docco}>
  {`
export const reducer = (
  state: IGatsbyCLIState = {
    messages: [],
    activities: {},
    status: \`\`,
  },
  action: ActionsUnion | ISetLogs
): IGatsbyCLIState => {
  switch (action.type) {
    // and other case statements
    case Actions.SetLogs: {
      return action.payload
    }
  }

  return state
}
  `}
         </SyntaxHighlighter>
        <p>Secondly, when the global cli reporter invokes actions and dispatch is called the local store is dispatched to.</p>
        <p>The local reporter store is what provides state for logging to the cli during build even though the main store will also contain this state and the state from global cli reporting.</p>
        {/* todo need to add where the code is that save and that it does occur for develop and build*/}
        <p>The main store gets persisted between "builds" in the .cache/redux folder but it is not the full state that is saved.</p>
        <table>
          <thead>
            <th>Reducer</th>
            <th>Persisted</th>
          </thead>
          <tbody>
            <tr>
              <td>definitionsReducer as definitions</td>
              <td></td>
            </tr>
            <tr>
              <td>programReducer as program</td>
              <td></td>
            </tr>
            <tr>
              <td>nodesReducer as nodes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>nodesByTypeReducer as nodesByType</td>
              <td></td>
            </tr>
            <tr>
              <td>resolvedNodesCacheReducer as resolvedNodesCache</td>
              <td></td>
            </tr>
            <tr>
              <td>nodesTouchedReducer as nodesTouched</td>
              <td></td>
            </tr>
            <tr>
              <td>lastActionReducer as lastAction</td>
              <td></td>
            </tr>
            <tr>
              <td>flattenedPluginsReducer as flattenedPlugins</td>
              <td></td>
            </tr>
            <tr>
              <td>configReducer as config</td>
              <td></td>
            </tr>
            <tr>
              <td>schemaReducer as schema</td>
              <td></td>
            </tr>
            <tr>
              <td>pagesReducer as pages</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>visitedPagesReducer as visitedPages</td>
              <td></td>
            </tr>
            <tr>
              <td>statusReducer as status</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>componentsReducer as components</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>staticQueryComponentsReducer as staticQueryComponents</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>jobsReducer as jobs</td>
              <td></td>
            </tr>
            <tr>
              <td>jobsV2Reducer as jobsV2</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>webpackReducer as webpack</td>
              <td></td>
            </tr>
            <tr>
              <td>webpackCompilationHashReducer as webpackCompilationHash</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>redirectsReducer as redirects</td>
              <td></td>
            </tr>
            <tr>
              <td>babelrcReducer as babelrc</td>
              <td></td>
            </tr>
            <tr>
              <td>schemaCustomizationReducer as schemaCustomization</td>
              <td></td>
            </tr>
            <tr>
              <td>logReducer as logs</td>
              <td></td>
            </tr>
            <tr>
              <td>inferenceMetadataReducer as inferenceMetadata</td>
              <td></td>
            </tr>
            <tr>
              <td>pageDataStatsReducer as pageDataStats</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>pendingPageDataWritesReducer as pendingPageDataWrites</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>staticQueriesByTemplateReducer as staticQueriesByTemplate</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>queriesReducer as queries</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>htmlReducer as html</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>functionsReducer as functions</td>
              <td></td>
            </tr>
            <tr>
              <td>nodeManifestReducer as nodeManifests</td>
              <td></td>
            </tr>

          </tbody>
        </table>
        <p>In develop saveDbState is used in state machines.  In build db.saveState is invoked 3 times</p>
        {/* todo as mentioned .... */}
        <p>The store is available to gatsby node apis but with the disclaimer <cite>Internal redux state used for application state. Do not use, unless you absolutely must. Store is considered a private API and can change with any version.</cite>.  This is odd given that there is 
        no corresponding getPluginStatus and the only way to access is to use the store ! <code>store.getstate().status.plugins.[pluginname]</code></p>
        <p>As mentioned ..... getNode should be used instead of using the store due to the experimental LMDB data store.</p>

        <h2>How plugins can use the store and cache</h2>

        <p>The node api has access to the store, cache and getCache fields.  The cache is the result of calling getCache for the current plugin but 
          <cite>this should only be used by plugins that accept subplugins.</cite>.  The cache should not be used in onPreInit as there may be no cache at this point. 
          As such a dummy cache is provided that throws.  The store is immediately available as 
        it is set up as soon as redux is required ( build.js requires build-html which requires redux).  The store will be <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/redux/index.ts#L85" title="re-created from the cache"/>.  If the cache files do not exist the try catch will return <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/redux/index.ts#L55" title="an empty state"/>.</p>
        <p>The redux cache is store in 3 parts. Nodes and pages are chunked in .cache/redux/redux.node.state_<i>chunkNumber</i> and .cache/redux/redux.page.state_<i>pageNumber</i> respectively and the rest are within .cache/redux/redux.rest.state.  This is not entirely true when using experimental Lmdb as this stores the nodes in .caches/data/datastore/data.mdb and the redux file will still be persisted.</p>

        <p>The cache directory is initialized via build.js ( command ) <Calls/> bootstrap <Calls/> services.initialize.  Here we can see that <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/services/initialize.ts#L209" title="onPreInit"/> is called before the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/services/initialize.ts#L423" title="cache directory is ensured"/> which is prior to 
        <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/services/initialize.ts#L430" title="onPluginInit (v4)"/> and <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/services/initialize.ts#L434" title="unstable_onPluginInit"/>.  Hence safe to use there.</p>

        <p>There are <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/get-cache.ts#L6" title="two possible caches"/>.  Lmdb if you set the experimental flag.  The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby/index.d.ts#L1312" title="interface"/> is the same for both.  
        ( The regular cache does permit expiration with a third argument to the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/utils/cache.ts#L77" title="set method"/> if you were so inclined. ).  Both (<b>plugin</b>) caches 
        </p>
        <p>The regular cache is a multi cache of memory and file system ( in json format ).  When <code>set</code> it goes in both and when <code>get</code> it comes from the first.  The memory cache will hold 250 items and will evict the first added to accomodate additional.  The store creates a folder in .cache/caches for each plugin ( <code>getCache(<i>name</i></code>).  For every call to set a json file is created named diskstore-<i>keyhash</i>.json</p>
        <p>The lmdb cache is stored in .cache/caches-lmdb/data.mdb.  For the lmdb cache and lmdb datastore maxDbs is 200 which I suppose could be a problem if you had that many plugins.  Despite not saving anything to .cache/caches when using lmdb a <i>named folder</i> is created for every getCache(<i>name</i>) so you can see what plugins have cached data.</p>
        
        <p>The action setPluginStatus which, given that it uses the redux store, can be used in onPreInit.  This is the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/fc84b66b7329e8377d39c3910ef8e406738060d6/packages/gatsby/src/redux/reducers/status.ts#L39" title="status slice"/>.  The object arg will be merged into any previously set status.</p>
        <p>To remove the .cache directory ( and the public directory ) you can use the command <code>gatsby clean</code>.</p>
    </main>
}
export default cacheAndRedux