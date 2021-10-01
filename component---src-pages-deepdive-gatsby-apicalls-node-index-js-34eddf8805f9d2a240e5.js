"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[623],{9354:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("a",{href:e.href,rel:"noreferrer",target:"_blank"},e.title))}},4929:function(e,t,n){n.r(t);var a=n(7294),r=n(9354),i=n(9731),o=n(1270);t.default=function(){return a.createElement("main",null,a.createElement("title",null,"API calls"),a.createElement("p",null,"The gatsby node api calls can be tracked in source code by looking for ",a.createElement("code",null,"apiRunnerNode(")),a.createElement("p",null,"When gatsby needs to run a node api function it is the ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L446",title:"apiRunnerNode"})," that provides the logic."),a.createElement("p",null,"Simplifying a little, for all plugins that implement the node function, gatsby-node.js is ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L255",title:"is required"})," ( and the plugin is cached )."),a.createElement("p",null,"The redux actions ( action creators ) that will be made available to the api function are bound which means their return value is automatically dispatched.  If they return a function then that function is passed the dispatch function.  Of the public actions the createNode action is of this type and will use the dispatch function.  More on this in a moment."),a.createElement("p",null,"From redux ( omitting non essential code ) - ",a.createElement(r.Z,{to:"https://github.com/reduxjs/redux/blob/d794c56f78eccb56ba3c67971c26df8ee34dacc1/src/bindActionCreators.ts#L58",title:"bindActionCreators"})),a.createElement(i.Z,{language:"javascript",style:o.Z},"\n  export default function bindActionCreators(\n    actionCreators: ActionCreator<any> | ActionCreatorsMapObject,\n    dispatch: Dispatch\n  ) {\n    if (typeof actionCreators === 'function') {\n      return bindActionCreator(actionCreators, dispatch)\n    }\n    const boundActionCreators: ActionCreatorsMapObject = {}\n    for (const key in actionCreators) {\n      const actionCreator = actionCreators[key]\n      if (typeof actionCreator === 'function') {\n        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)\n      }\n    }\n    return boundActionCreators\n  }\n\n  function bindActionCreator<A extends AnyAction = AnyAction>(\n    actionCreator: ActionCreator<A>,\n    dispatch: Dispatch\n  ) {\n    return function (this: any, ...args: any[]) {\n      return dispatch(actionCreator.apply(this, args))\n    }\n  }\n  "),a.createElement("p",null,"It is redux-thunk that provides action functions - ",a.createElement(r.Z,{to:"https://github.com/reduxjs/redux-thunk/blob/290acf90fa5afac5b49f286bb3d8fc51aa864ed3/src/index.js#L4",title:"see"})," "),a.createElement("p",null,"Then the bound action creators are then double bound.  The action creators can take 1-3 arguments.  The  third argument is not provided by the caller but is the same ",a.createElement("b",null,"api specific"),' "arguments" object that the api function will receive as its first argument. If an action creator takes two arguments then the second argument is a plugin argument.  If you do not specify then the plugin is the plugin being run.  From the code comments this functionality is limited and you would need to understand the action.'),a.createElement(i.Z,{language:"javascript",style:o.Z},"\n          doubleBoundActionCreators[key] = (...args) => {\n            // Let action callers override who the plugin is. Shouldn't be\n            // used that often.\n            if (args.length === 1) {\n              return boundActionCreator(args[0], plugin, actionOptions)\n            } else if (args.length === 2) {\n              return boundActionCreator(args[0], args[1], actionOptions)\n            }\n            return undefined\n          }\n  "),a.createElement("p",null,"Then the node api function is invoked with two arguments.  The first argument is an object with fields that are common for all api functions and ones that are particular to it ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/api-runner-node.js#L375",title:"fields that are common for all api functions and ones that are particular to it"}),".  The second argument is the plugin's options.  A node api function can have as a third argument a callback, of course returning a promise is better."),a.createElement("p",null,"The firt argument is known as in the docs as ",a.createElement(r.Z,{to:"https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/",title:"node api helpers"}),".  Some of these are described as internal such as the emitter and the redux store.  To see the slices available from the store see ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/tree/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/reducers",title:"redux reducers folder"}),"."),a.createElement("p",null,"The emitter emits named events with the emiyt method.  What this means is that all handlers that have subscribed to the event name will be notified.  It is also possible to subscribe to all events using ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/utils/mett.ts#L47",title:"*"}),"."),a.createElement("p",null,"The emitter emits whenever the ",a.createElement(r.Z,{to:"https://github.com/gatsbyjs/gatsby/blob/492068b0d1a08e544c3c51fb2fc1360087437b99/packages/gatsby/src/redux/index.ts#L153",title:"redux store has been updated"})))}}}]);
//# sourceMappingURL=component---src-pages-deepdive-gatsby-apicalls-node-index-js-34eddf8805f9d2a240e5.js.map