import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { MainContainer } from './MainContainer';
import { store } from '../Redux/store';
import { Provider } from 'react-redux';
import { getTasks } from '../Redux/actions';
import { ChakraProvider } from "@chakra-ui/react";

export default function HelloReact() {
  useEffect(() => {
        store.dispatch(getTasks());
  }, [])

  return (
    <>
    <Provider store={store}>
    <ChakraProvider>
    <MainContainer />
    </ChakraProvider>
    </Provider>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <HelloReact />
    </Router>
  </React.StrictMode>
,document.getElementById('hello-react'));