import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Container } from "./assets/styles/styleds";
import NoMatch from "./components/NoMatch/index";
import Home from "./pages/Home/index";
import Main from "./pages/Main";

export default function App() {
  return (
    <Container >
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <Outlet />
    </Container>
  );
}
