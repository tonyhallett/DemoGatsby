import * as React from "react"
const matchPage = (pageProps) => {
    return <main>
        <title>Match page</title>
        <div>This is a match page {pageProps.pageResources.page.matchPath}</div>
    </main>
}

export default matchPage;