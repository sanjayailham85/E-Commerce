import React from "react";

const Helmet = (props) => {

    document.title = 'E-Commerce - ' + props.title
    return (
        <div className="w-500">{props.children}</div>
    )
}

export default Helmet