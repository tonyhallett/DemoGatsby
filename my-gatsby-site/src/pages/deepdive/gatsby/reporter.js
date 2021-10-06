import * as React from "react"
import LinkNewTab from "../../../components/linkNewTab"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const reporter = () => {
    return <main>
        <title>Reporter</title>
        {/* todo link to setStore */}
        <p>The reporter is used by the cli and the build.  The logging to the console occurs when a reporter action is <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L64" title="invoked"/>.</p>
        <p>The reporter does more than just log messages but concentrating on messages for a moment.  For success, info, warn, log ( and verbose if set in config ) the reporter  <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/reporter.ts#L217" title="invokes the createLog redux action"/>.  
        How this results in message in the console begins by understanding <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/index.ts" title="this"/> in particular <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/start-logger.ts#L11" title="startLogger"/>
        </p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
  import { startLogger } from "./start-logger"
  import { patchConsole } from "./patch-console"
  import { catchExitSignals } from "./catch-exit-signals"
  import { reporter } from "./reporter"
  
  catchExitSignals()
  startLogger()
  patchConsole(reporter)
  
  export default reporter
  module.exports = reporter
  `}
        </SyntaxHighlighter>
        <p>patchConsole is simple in that console.log, warn, info and error are replaced to call through to the similarly named methods of the reporter.</p>
        <p>startLogger determines the logger to use. You can specify with the environment variable GATSBY_LOGGER to change from the default ink to the json logger or yurnalist.</p>
        <p><LinkNewTab href="https://github.com/vadimdemedes/ink#readme" title="ink"/></p>
        <cite>
        Ink provides the same component-based UI building experience that React offers in the browser, but for command-line apps. It uses Yoga to build Flexbox layouts in the terminal, so most CSS-like props are available in Ink as well. 
        </cite>
        <p>Initializing ink uses the render method of ink </p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
  import React, { useContext } from "react"
  import { render } from "ink"
  import StoreStateContext, { StoreStateProvider } from "./context"
  import CLI from "./cli"
  
  const ConnectedCLI: React.FC = (): React.ReactElement => {
    const state = useContext(StoreStateContext)
    const showStatusBar =
      // @ts-ignore - program exists on state but we should refactor this
      state.program?._?.[0] === \`develop\` &&
      // @ts-ignore - program exists on state but we should refactor this
      state.program?.status === \`BOOTSTRAP_FINISHED\`
    const showPageTree = !!state.pageTree
  
    return (
      <CLI
        showStatusBar={Boolean(showStatusBar)}
        showPageTree={Boolean(showPageTree)}
        logs={state.logs}
      />
    )
  }
  
  export function initializeINKLogger(): void {
    render(
      <StoreStateProvider>
        <ConnectedCLI />
      </StoreStateProvider>
    )
  }
  `}
        </SyntaxHighlighter>
        <p>Key to above is the StoreStateProvider that <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L72" title="listens"/> for <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L64" title="public actions"/>and provides the reporter <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/index.ts#L30" title="store"/> state through context that the ConnectedCLI receives and passes the logs state to CLI.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
  import React, { useState, useLayoutEffect, createContext } from "react"
  import { getStore, onLogAction } from "../../redux"
  import { IGatsbyCLIState } from "../../redux/types"
  import { IRenderPageArgs } from "../../types"
  
  const StoreStateContext = createContext<{
    logs: IGatsbyCLIState
    pageTree: IRenderPageArgs | null
  }>(getStore().getState())
  
  export const StoreStateProvider: React.FC = ({
    children,
  }): React.ReactElement => {
    const [state, setState] = useState(getStore().getState())
  
    useLayoutEffect(
      () =>
        onLogAction(() => {
          setState(getStore().getState())
        }),
      []
    )
  
    return (
      <StoreStateContext.Provider value={state}>
        {children}
      </StoreStateContext.Provider>
    )
  }
  
  export default StoreStateContext
  `}
        </SyntaxHighlighter>

        <p>Concentrating on just the <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/redux/reducers/logs.ts#L28" title="messages"/> from the createLog action</p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
            <Static items={messages}>
            {(message): React.ReactElement =>
              message.level === \`ERROR\` ? (
                <ErrorComponent
                  details={message as IStructuredError}
                  key={messages.indexOf(message)}
                />
              ) : (
                <Message
                  key={messages.indexOf(message)}
                  {...(message as IMessageProps)}
                />
              )
            }
          </Static>
  `}
        </SyntaxHighlighter>
        <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby/blob/a1f35ca37aed1b076f057f1522b56b75a3bdf223/packages/gatsby-cli/src/reporter/loggers/ink/components/messages.tsx#L37" title="Message component"/>.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
  {`
        import React from "react"
        import { Box, Text } from "ink"
        import { createLabel } from "./utils"
        
        import { ActivityLogLevels, LogLevels } from "../../../constants"
        
        const getLabel = (
          level: ActivityLogLevels | LogLevels
        ): ReturnType<typeof createLabel> => {
          switch (level) {
            case ActivityLogLevels.Success:
            case LogLevels.Success:
              return createLabel(\`success\`, \`green\`)
            case LogLevels.Warning:
              return createLabel(\`warn\`, \`yellow\`)
            case LogLevels.Debug:
              return createLabel(\`verbose\`, \`gray\`)
            case LogLevels.Info:
              return createLabel(\`info\`, \`blue\`)
            case ActivityLogLevels.Failed:
              return createLabel(\`failed\`, \`red\`)
            case ActivityLogLevels.Interrupted:
              return createLabel(\`not finished\`, \`gray\`)
        
            default:
              return createLabel(level, \`blue\`)
          }
        }

        /*
            export const createLabel =
            (text: string, color: string): FunctionComponent<TextProps> =>
            (...props): JSX.Element =>
            (
                <Text color={color} {...props}>
                    {text}
                </Text>
            )
        */
        
        export interface IMessageProps {
          level: ActivityLogLevels | LogLevels
          text: string
          duration?: number
          statusText?: string
        }
        
        export const Message = React.memo<IMessageProps>(
          ({ level, text, duration, statusText }) => {
            let message = text
            if (duration) {
              message += \` - $\{duration.toFixed(3)}s\`
            }
            if (statusText) {
              message += \` - \${statusText}\`
            }
            if (!level || level === \`LOG\`) {
              return <Text>{message}</Text>
            }
        
            const TextLabel = getLabel(level)
        
            return (
              <Box flexDirection="row">
                <Text wrap="wrap">
                  <TextLabel />
                  {` `}
                  {message}
                </Text>
              </Box>
            )
          }
        )
  `}
        </SyntaxHighlighter>
        <p>We can see that prefix only ( success etc ) is coloured and hard coded and dependent upon the message level associated with reporter.success, warn, info and log.</p>

    </main>

}
export default reporter