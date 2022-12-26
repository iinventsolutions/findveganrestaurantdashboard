import React, {Suspense, lazy } from 'react';
import styled from "styled-components";
import AppRoutes from "./AppRoutes";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainPageWrapper>

        <SidebarWrapper>
          <Sidebar/>
        </SidebarWrapper>

        <MainContent>
          <Navbar />
          <AppRoutes/>
        </MainContent>

      </MainPageWrapper>
    </Router>
  );
}

export default App;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 99.9vh;
  background-color: #F8A94C;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  /* border: 1px solid red; */
  border-radius: 50px 0px 0px 50px;
  background-color: #FFF;
  padding-left: 30px;
  padding-right: 30px;
`
const SidebarWrapper = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  /* border: 1px solid green; */
  background-color: #F8A94C;
`
