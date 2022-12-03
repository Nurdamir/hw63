import React from 'react';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Add from "./containers/Add/Add";
import OnePost from "./components/OnePost/OnePost";
import AddForm from "./components/AddForm/AddForm";
import './App.css';

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
          <Route path="/posts" element={(<Home/>)}>
            <Route path="/posts/:id" element={(<OnePost/>)}>
              <Route path="/posts/:id/edit" element={(<Add/>)}/>
            </Route>
          </Route>
          <Route path={"/posts/add"} element={(
            <AddForm/>
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
