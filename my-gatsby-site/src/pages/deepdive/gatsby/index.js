import * as React from "react"
import { Link } from "gatsby"

const gatsbyDeepDive = () => {
    return <main>
        <title>Gatsby Deep Dive</title>
        <p>To understand how gatsby works it is essential to be able to <Link to="debugging">debug the build</Link>.</p>
        <p>Gatsby uses redux for state management. This can be seen when running the gatsby node api.</p> 
        <p><Link to="plugins">Plugins</Link> are required when they export an api that is to be called.</p>
        <p>Details of api calling can be found here for <Link to="apicalls/node">node</Link></p>
    </main>
}
export default gatsbyDeepDive;