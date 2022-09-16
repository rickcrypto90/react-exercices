import React from "react";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter";
import {Route, Routes} from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export  function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<Welcome name="John" />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/users/:username" element={<ShowGithubUser />}/>
          
        </Routes>
 
    );
  }