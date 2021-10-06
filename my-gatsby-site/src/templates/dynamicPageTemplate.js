import * as React from "react"
import { Link } from "gatsby"

const dynamicPageTemplate = ({pageContext}) => {
    const {numPages, pageNumber, pathPrefix} = pageContext;
    let nextPage = 0;
    if(pageNumber < numPages - 1){
        nextPage = pageNumber + 1;
    }
    var pageDetails = `dynamic page - ${pageNumber}`;
    return <div>
        <div>{pageDetails}</div>
        <Link to={`../${pathPrefix}${nextPage}`}>Next page</Link>
    </div>
}
export default dynamicPageTemplate