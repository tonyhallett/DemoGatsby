import * as React from "react"
import { Link } from "gatsby"
import LinkNewTab from "../../../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const apiCalls = () => {
    return <main>
        <title>API calls</title>
        <p>The gatsby node api calls can be tracked in source code by looking for <code>apiRunnerNode(</code></p>
        <p>When gatsby needs to run a node api function it is the <LinkNewTab to="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L446" title="apiRunnerNode"/> that provides the logic.</p>
        <p>Simplifying a little, for all plugins that implement the node function ( with a filter to avoid infinite loop ), gatsby-node.js is <LinkNewTab to="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L255" title="is required"/> ( and the plugin is cached ).</p>
        <p>The redux actions ( action creators ) that will be made available to the api function are bound which means their return value is automatically dispatched.  If they return a function then that function is passed the dispatch function ( e.g  createNode ).</p>
        <p>From redux ( omitting non essential code ) - <LinkNewTab to="https://github.com/reduxjs/redux/blob/d794c56f78eccb56ba3c67971c26df8ee34dacc1/src/bindActionCreators.ts#L58" title="bindActionCreators"/></p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
  export default function bindActionCreators(
    actionCreators: ActionCreator<any> | ActionCreatorsMapObject,
    dispatch: Dispatch
  ) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch)
    }
    const boundActionCreators: ActionCreatorsMapObject = {}
    for (const key in actionCreators) {
      const actionCreator = actionCreators[key]
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
      }
    }
    return boundActionCreators
  }

  // redux
  function bindActionCreator<A extends AnyAction = AnyAction>(
    actionCreator: ActionCreator<A>,
    dispatch: Dispatch
  ) {
    return function (this: any, ...args: any[]) {
      return dispatch(actionCreator.apply(this, args))
    }
  }
  `}
</SyntaxHighlighter>
<p>It is redux-thunk that provides action functions - <LinkNewTab to="https://github.com/reduxjs/redux-thunk/blob/290acf90fa5afac5b49f286bb3d8fc51aa864ed3/src/index.js#L4" title="see"/> </p>
<p>Then the bound action creators are then double bound.  The action creators can take 1-3 arguments.  The  third argument is not provided by the caller but is the same <b>api specific</b> "arguments" object that the api function will receive as its first argument.
  If an action creator takes two arguments then the second argument is a plugin argument.  If you do not specify then the plugin is the plugin being run.  From the code comments this functionality is limited and you would need to understand each action.</p>
  <SyntaxHighlighter language="javascript" style={docco}>
  {`
          doubleBoundActionCreators[key] = (...args) => {
            // Let action callers override who the plugin is. Shouldn't be
            // used that often.
            if (args.length === 1) {
              return boundActionCreator(args[0], plugin, actionOptions)
            } else if (args.length === 2) {
              return boundActionCreator(args[0], args[1], actionOptions)
            }
            return undefined
          }
  `}
</SyntaxHighlighter>
<p>Then the node api function is invoked with two arguments.  The first argument is an object with fields that are common for all api functions and ones that are particular to it <LinkNewTab to="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L375" title="fields that are common for all api functions and ones that are particular to it"/>.  The second argument is the plugin's options from the gatsby config.</p>
<SyntaxHighlighter language="javascript" style={docco}>
  {`
     module.exports = {
      plugins: [
        {
          resolve: "a-plugin",
          options: {
            anOption: \`some value\`,
          },
        },
      ],
    }
  `}
</SyntaxHighlighter>
<p>A node api function can have as a third argument a callback, of course returning a promise is better.</p>
<p>The first argument is known as in the docs as <LinkNewTab to="https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/" title="node api helpers"/>.  These actions are <LinkNewTab title="public or restricted" href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/utils/api-runner-node.js#L273"/>.  Note that the docs are incorrect - there is no exported <code>shadowCreatePagePath</code>.  Although there are helpers that are always available to each 
gatsby-node.js api function some of these helpers are restricted to being invoked within specific api functions.  The following node helpers should only be called within <code>createSchemaCustomization</code> - <code>createFieldExtension</code>, <code>createTypes</code>, <code>createResolverContext</code>, <code>addThirdPartySchema</code>, <code>printTypeDefinitions</code>.</p>
<p>These api functions will be invoked but with a <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/redux/actions/restricted.ts#L424" title="deprecation warning"/> if invoked in <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/redux/actions/restricted.ts#L530" title="other specific api functions"/>.  If called <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/redux/actions/restricted.ts#L515" title="within any other function"/> 
nothing occurs and an <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/redux/actions/restricted.ts#L444" title="error is reported"/>.</p>
<p>The cache node api helper should not be used within <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/utils/api-runner-node.js#L311" title="onPreInit"/>.  This will throw an error if its <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/c2d42ecc2dccc0862a4a0c796e2db9dec57fcb16/packages/gatsby/src/utils/api-runner-node.js#L241" title="methods are invoked"/>.</p>
<p>The actions and node api helpers can be grouped by function.  See the pages for further information</p>
<p>basePath ( undocumented ) and pathPrefix - <Link to="../../prefixes">prefixes</Link></p>
<p>schema - <Link to="../../graphql">graphql</Link></p>
{/* be sure to mention the node api with action */}
<p><Link to="pages">page actions</Link> - deletePage / createPage / createRedirect / createServerVisitedPage ( think that this is experimental and develop only...)</p>
<p><Link to="/build">build actions</Link> - setWebpackConfig / replaceWebpackConfig / setBabelOptions / setBabelPlugin / setBabelPreset</p>
<p><Link to="/node">Node actions and helpers</Link>. Actions deleteNode / touchNode / createNode / createNodeField / createParentChildLink and helpers getNode / getNodeAndSavePathDependency / loadNodeContent / createNodeId</p>
{/* todo mention no need for parent span and link to tracing */}
<p>Tracing api helpers tracing and undocumented parentSpan ( which I think is available on the tracing field ).  I am not covering these but for further information see <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/#tracing" title="docs"/>, <LinkNewTab href="https://www.npmjs.com/package/opentracing" title="npm - open tracing"/> and <LinkNewTab href="https://github.com/opentracing/specification/blob/master/specification.md" title="specification"/>.</p>
<p><LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/actions/#createJobV2" title="createJobV2"/> will not be covered.  Note that there are other job actions that have been deprecated in favour of createJobV2.</p>
<p>
Some of these are described as internal such as the emitter and the redux store.  To see the slices available from the store see <LinkNewTab to="https://github.com/gatsbyjs/gatsby/tree/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/reducers" title="redux reducers folder"/>.</p>

<p>The emitter emits named events with the emit method.  What this means is that all handlers that have subscribed to the event name will be notified.  It is also possible to subscribe to all events using <LinkNewTab to="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/mett.ts#L47" title="*"/>.</p>
<p>The emitter emits whenever the <LinkNewTab to="https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/index.ts#L153" title="redux store has been updated"/></p>
</main>
}

export default apiCalls