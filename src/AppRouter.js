import React from "react";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter";
import {ShowGithubUser} from "./ShowGithubUser";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

export  function AppRouter() {
    function PageNotFound() {
        return (
          <div>
            <h2>Bro, ritenta. (404) </h2>
          </div>
        );
      }
    return (
      <BrowserRouter>
        <Link to="/">Welcome</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/:username">Users</Link>
        <Routes>
          <Route path="/" element={<Welcome name="John" />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/users/:username" element={<ShowGithubUser/>}/>
          <Route path="*" element={<PageNotFound />} />
        
        </Routes>
      </BrowserRouter>
    );
  }