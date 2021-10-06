import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from "gatsby"
import LinkNewLineNewTab from '../components/LinkNewLineNewTab'
import LinkNewTab from '../components/LinkNewTab'
import GatsbyNew from '../components/gatsby-docs/gatsbynew'
import GatsbyDevelop from '../components/gatsby-docs/gatsbydevelop'
import GatsbyClean from '../components/gatsby-docs/gatsbyclean'
import GatsbyNewStarterFormat from '../components/gatsby-docs/gatsbynewstarterformat'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const mainHeaderStyles = {
  ...headingStyles,
  display : "inline",
}

const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Gatsby</title>
      
      <h1 style={mainHeaderStyles}>
        Gatsby
      </h1>
      <img style={{display:"inline"}}
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />

      <h2>What is it ?</h2>
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Links
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <LinkNewLineNewTab href="https://github.com/gatsbyjs" title="gatsby ecosystem github"/>
          <LinkNewLineNewTab href="https://github.com/gatsbyjs/gatsby" title="gatsby github"/>
          <LinkNewLineNewTab href="https://www.gatsbyjs.com/docs/" title="gatsby docs"/>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              In their own words
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <p>
            <cite>Gatsby’s serverless rendering generates static HTML at build time.</cite>
          </p>
          <p>
            <cite>Gatsby automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources, and more to ensure your site is fully optimized.</cite>
          </p>
          <p>
            <cite>Gatsby loads only critical parts of the page, exactly when the visitor needs it, and not a second sooner. Once loaded, Gatsby prefetches resources for other pages so that clicking on the site feels buttery smooth and responsive. Everything is statically generated at runtime - so your site loads as fast as possible.</cite>
          </p>
          <cite>
            <ul>
              <li>Initial page load</li>
              <li>Served from cdn</li>
              <li>Instant load</li>
              <li>Search engine indexable</li>
              <li>Image placeholders</li>
            </ul>

            <ul>
              <li>Gatsby Client Mounts</li>
              <li>Minimal bootstrap</li>
              <li>Full React app with router</li>
              <li>Code & data splitting</li>
              <li>Intelligent prefetching</li>
              <li>Images loaded as required</li>
            </ul>
          </cite>
          
          <p>
            <cite>More than just a static site generator, Gatsby has all the tools for building the modern web: Plugins for seamlessly integrating services, Themes for effortless configuration, and Recipes for automating common site building chores.</cite>
          </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              In my words
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>
              <li>It is a static site generator - it generates actual html pages by rendering react components.</li>
              <li>
                <p>When a page is visited react is rehydrated and the site functions like a spa.  It uses react reach router <a href="https://www.gatsbyjs.com/docs/reach-router-and-gatsby/">from the docs</a> ( a fork of it)
                </p>
                </li>
              <li>
                <p>It is much more than that.</p>
                <ul>
                  <li>A core build system that performs the code splitting with webpack and arranges scripts for best performance.</li>
                  <li>Is extensible via plugins ( for instance the creation of pages ) - it has internal plugins that provide necessary functionality ( e.g page creation !).</li>
                  <li>Local development with hot reloading for fast iterative development.</li>
                  <li>Has a cli for creating sites from starters.  These are templates that you can start with and tailor to your own needs.</li>
                  {/* Might want to add a hover on node*/}
                  <li>Allows for graphql queries working against the gatsby concept of a node. The query result provides data to your react components.</li>
                  <li>In addition to starters there are recipes and themes.</li>
                </ul>
                <Accordion allowZeroExpanded="true">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Environment setup
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Most developers will have the pre-requisites node, npm and git.  To install the cli : </p>
                      <code>npm install -g gatsby-cli</code>
                      <p><code>gatsby --help </code> shows the commands available</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Creating a site
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>cmd cd to a directory that gatsby will create a git repo directory within.</li>
                        <li>For an existing repo, cd repos/<i>myrepo</i>.  When generated remove the .git folder in the generated directory.</li>
                        <li>Use the <code>gatsby new</code> command to create a site from a starter.</li>
                      </ul>
                    </AccordionItemPanel>

                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      gatsby new and starters
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>The gatsby new command is <GatsbyNew/>.</p>
                      <p>Gatsby starters are git repos that contain the necessary files to create a site from.  <GatsbyNewStarterFormat/></p>
                      <p>The docs lists gatsby provided starters but the full list can be found <LinkNewLineNewTab href="https://github.com/gatsbyjs?q=starter&type=&language=&sort=" title="here."/>  There are also <LinkNewLineNewTab href="https://www.gatsbyjs.com/starters-next/" title="community starters."/></p>
                      <h3>No starter - prompting</h3>
                      <p>If no starter is provided then <LinkNewTab href="https://github.com/gatsbyjs/gatsby-starter-minimal" title="gatsby-starter-minimal"/> will be used.  You will then be asked a series of questions and your answers will be used to install dependencies and plugins to gatsby-config.js
                      It will also set siteMetadata.title in gatsby-config.js.
                      </p>
                      <p><Link to="deepdive/cli">Look here</Link> to see code for the cli.</p>
                    </AccordionItemPanel>
                    
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      gatsby-config.js
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>The parts that a starter scaffolds for you is described in the <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/" title="gatsby docs"/>.  This will be explained as I progress.</p>
                      <p><LinkNewTab href="https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/" title="gatsby config"/> is explained in the docs.  The most important parts, initially, are <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#plugins" title="configuring plugins"/>.  With <code>gatsby new</code> this is done for us.</p>
                      <p>The <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#pathprefix" title="pathPrefix"/> is important when hosting the site on github pages.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Hosting on github pages
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <h3>Configure github</h3>
                      <ol>
                        <li>Create gh-pages branch</li>
                        <li>Add .nojeykll file</li>
                        <li>Confirm site being built from gh-pages and get the docs page url.  Replace with yourname/reponame - https://github.com/<i>yourname</i>/<i>reponame</i>/settings/pages</li>
                      </ol>
                      <h3>Configure gatsby</h3>
                      <ol>
                        <li><code>npm install gh-pages --save-dev</code></li>
                        <li>
                          <p>Create a deploy script in package.json</p>
                          <SyntaxHighlighter language="javascript" style={docco}>
  {`"scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
  `}
                          </SyntaxHighlighter>
                        </li>
                        <li>
                          <p>Add the pathPrefix to gatsby-config.js</p>
                          <SyntaxHighlighter language="javascript" style={docco}>
  {`module.exports = {
      pathPrefix: "/repoName",
  }`}
                          </SyntaxHighlighter>
                        </li>
                      </ol>

                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      gatsby-minimal-starter
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>This starter is minimal.  It contains the minimal dependencies - gatsby, react and react-dom.  Of course with the prompts some plugins will have been added.</p>
                      <p>The <LinkNewTab href="https://github.com/gatsbyjs/gatsby-starter-minimal/blob/master/gatsby-config.js" title="gatsby-config.js"/> is essentially empty.  This will be correctly populated with plugins from your answers to the prompts.</p>
                      <p><LinkNewTab href="https://github.com/gatsbyjs/gatsby-starter-minimal/tree/master/src/pages" title="src/pages"/> contains the minimal pages for a site.  <b>Note that this works because of an internal plugin.</b>  The 404.js is a simple component with a message and a link to the other page index.js.  The index.js page you would change according to your needs.</p>
                      <p>After you have been using gatsby for a while you would probably have your own starter or be using one from the community.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Pages ! ( and plugins )
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Pages are created using the Gatsby Node API.</p>
                      <h3>The gatsby api</h3>
                      <p>There are 3 apis.  The other two will be described as I progress.</p>
                      <LinkNewLineNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/" title="Gastsby Node API ( docs )"/>
                      <p>The <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages" title="createPages( docs )"/> function creates pages and the <LinkNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreatePage" title="onCreatePage( docs )"/> function is called when a page is created.
                      </p>
                      <h3>How to provide the Gatsby Node API</h3>
                      <p>There are three ways in which gatsby can be provided with this api.</p>
                      <ul>
                        <li>
                          <p>From <LinkNewTab href="https://www.gatsbyjs.com/docs/plugins/" title="plugins ( docs )" />.  The plugins array in gatsby-config.js</p>
                          <p>Npm plugins - <LinkNewTab href="https://www.gatsbyjs.com/plugins/" title="See here" /> for a list of plugins.</p>
                          <p>Local plugins in the plugins folder or from some other location on your machine. <LinkNewTab href="https://www.gatsbyjs.com/docs/loading-plugins-from-your-local-plugins-folder/" title="docs" />.</p>
                        </li>
                        <li>Loose files in your directory as described <LinkNewLineNewTab href="https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/#files" title="in the docs."/></li>
                      </ul>
                      <p>What they all have in common is the name of the file maps to the API.  So for gatby node api the file name is gatsby-node.js </p>
                      <p>A plugin has these api files at the root of the directory.</p>
                      <p>If provided loosely a plugin is created internally with the name default-site-plugin. See <Link to="deepdive/gatsby/plugins">plugin loading</Link> for the details.</p>
                      <h3>createPages / createPagesStatefully</h3>
                      <p>Each of the gatsby node api functions are passed </p>
                      <h4>The built in method</h4>
                      <p>It is not necessary to obtain a plugin or write your own for gatsby to have a working site with pages as the internal <LinkNewTab href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-page-creator" title="gatsby-plugin-page-creator"/> does createPages.
                      If the default configuration is not good enough then you can add this plugin ( more than once if required ) to your gatby-config.js
                      </p>
                      <p>The default behaviour</p>
                      <p>
                        Create a deepdive api link.  Then refer to args which may mean mentioning the redux store.
                        Todo - describe the function signature - background / deep dive.  How gatsby calls all plugins ( in what order ?)
                      </p>
                      <LinkNewLineNewTab href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages" title="createPages ( docs )"/>
                      {/* will want to link to the apiRunner - specifically for anything createPages and the args */}

                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Nodes and graphql
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Site generation
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>The cli has commands and package.json from starters ( probably ) has scripts.</p>
                      <h3>Developing</h3>
                      <p>The cli command <GatsbyDevelop/> should be used which will create the site at http://localhost:8000/ that you can navigate to in the browser.  
                        When files are changed and saved the changes should be reflected in the browser.  Occasionally there may be issues and the <GatsbyClean/> command should be used before <GatsbyDevelop/>
                      </p>
                      <p>Additionally the nodes available to graphql can be seen at http://localhost:8000/___graphql and queries generated.</p>
                      <h3>Building</h3>
                      <p>The cli command <code>gatsby build</code> or if hosting on github pages and have followed along <code>npm run deploy</code></p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
     
     
     <Link to="/deepdive/gatsby">Deep dive</Link>
      
    </main>
  )
}

export default IndexPage
