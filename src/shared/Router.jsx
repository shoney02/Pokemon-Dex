import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default Router;
