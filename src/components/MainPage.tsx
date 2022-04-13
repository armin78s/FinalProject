import { Fragment } from "react";
import Form from "./Form";
import Nav from "./Nav";
import Products from "./Products";

const MainPage = () =>{
    return(
        <Fragment>
            <Nav />
            <Form />
            <Products />
        </Fragment>
    )
};

export default MainPage;