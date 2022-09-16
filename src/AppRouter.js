import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Route, Routes, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function AppRouter() {
  function PageNotFound() {
    return (
      <div>
        <h2>Bro, ritenta. (404) </h2>
      </div>
    );
  }
  return (

    <div>
      <nav><ul><li ><Link to="/">Home</Link></li>
      <li ><Link to="/counter">Counter</Link></li>
      <li ><Link to="/users">Users</Link></li></ul></nav>
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />} >
        <Route index element={<h1>Add a user and select it</h1>} />
        <Route path="/users/:username" element={<ShowGithubUser />}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

  );
}
