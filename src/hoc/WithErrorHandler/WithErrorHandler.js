import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";
// import axios from "axios";

const WithErrorHandler = (WrappedComponent, axios) => {
  return function Error(props) {
    const [error, setError] = useState(null);

    // componentWillMount() { because componentWillMount runs before we render we can't use useEffect and can just delete this method
    const requestInterceptor = axios.interceptors.request.use((request) => {
      // this.setState({ error: null });
      setError(null);
      return request;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (err) => {
        setError(err);
      }
    );
    useEffect(() => {
      return () => {
        //cleaning our memory, using instead of componentWillUnmout
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.request.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };
    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default WithErrorHandler;
