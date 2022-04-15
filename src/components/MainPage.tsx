import { Fragment } from "react";
import Form from "./Form";
import Products from "./Products";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { loading } from "../store";

const MainPage = () => {
  const isLoading = useSelector(loading);
  return (
    <Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <Form />
          <Products />
        </div>
      )}
    </Fragment>
  );
};

export default MainPage;
