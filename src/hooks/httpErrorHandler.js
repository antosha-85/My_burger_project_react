import {useState, useEffect} from 'react'

export default httpClient => {
    const [error, setError] = useState(null);

    // componentWillMount() { because componentWillMount runs before we render we can't use useEffect and can just delete this method
    const requestInterceptor = httpClient.interceptors.request.use((request) => {
      // this.setState({ error: null });
      setError(null);
      return request;
    });

    const responseInterceptor = httpClient.interceptors.response.use(
      (response) => response,
      (err) => {
        setError(err);
      }
    );
    useEffect(() => {
      return () => {
        //cleaning our memory, using instead of componentWillUnmout
        httpClient.interceptors.request.eject(requestInterceptor);
        httpClient.interceptors.request.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };
    return [error, errorConfirmedHandler]
}