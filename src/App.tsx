import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Add from "./containers/Add/Add";
import FullPost from "./components/FullPost/FullPost";
import OnePost from "./containers/OnePost/OnePost";
import AddForm from "./components/AddForm/AddForm";

function App() {
  return (
    <div className="App">
      <header className="header mb-4">
        <Navbar/>
      </header>
      <main className="main-block">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path={"/posts/add"} element={(
            <AddForm/>
          )}/>

          <Route path="/post/:id" element={(
            <OnePost/>
          )}/>

          <Route path="/post/:id/edit" element={(
            <Add/>
          )}/>

          <Route path="/about" element={(
            <About/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts/>
          )}/>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
      <div className="footer py-3 mt-5">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
