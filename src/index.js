import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Garage from './Garage'
import Football from './Football';
import MyForm from './MyForm';
import Timer from "./Timer";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import reportWebVitals from './reportWebVitals';
import FavoriteColor from "./FavoriteColor";
import Component1 from "./UseContext";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";

export default function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Layout />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>)
}

ReactDOM.render(
  <React.StrictMode>
    <UseRef/>
    <Component1 />
      <UseReducer/>
    <App />
    <Garage />
    {/*<Football />*/}
    {/*<MyForm />*/}
    <Timer />
    {/*<FavoriteColor />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
