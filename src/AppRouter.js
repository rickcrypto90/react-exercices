import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";

export function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="John" />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }