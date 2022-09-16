import React from "react";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter";
import {ShowGithubUser} from "./ShowGithubUser";
import { BrowserRouter, Route, Routes} from "react-router-dom";

export  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="John" />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/users/:username" element={<ShowGithubUser/>}/>
        
        </Routes>
      </BrowserRouter>
    );
  }