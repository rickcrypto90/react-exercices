import React from "react";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter";
import {Route, Routes} from "react-router-dom";

export  function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<Welcome name="John" />}/>
          <Route path="/about" element={<Counter />}/>
        </Routes>
 
    );
  }