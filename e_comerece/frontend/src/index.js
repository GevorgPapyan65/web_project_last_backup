import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from "react-redux";



// Usage of createRoot goes here

const container = document.getElementById("root");
const root = createRoot(container);
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App  />
    </PersistGate>
    </Provider>
);