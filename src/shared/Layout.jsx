import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  background-color: #ffe4b8;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;

export default Layout;
