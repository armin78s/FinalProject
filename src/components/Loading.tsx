import { Fragment } from "react";

const Loading = () =>{

    return(
        <Fragment>
            <h1 className="text-center mt-6 text-indigo-800 text-4xl font-extrabold">Loading ... <i className="animate-spin fa fa-spinner" aria-hidden="true"></i></h1>
        </Fragment>
    );
}

export default Loading;