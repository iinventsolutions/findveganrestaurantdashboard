import React, {Suspense, lazy, useState, useEffect } from 'react';
import styled from "styled-components";
import AppRoutes from "./AppRoutes";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './Components/Layout';
import LoginSignup from './Pages/LoginSignup';
import OnboardingPage from './Components/Onboard';
import { withAuthenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

function App({signOut, user}) {

  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    const storedShowOnboarding = localStorage.getItem('showOnboarding');
    if (storedShowOnboarding === null) {
      setShowOnboarding(true);
    } else {
      setShowOnboarding(JSON.parse(storedShowOnboarding));
    }
  }, []);

  const handleOnboardingDismiss = () => {
    setShowOnboarding(false);
    localStorage.setItem('showOnboarding', JSON.stringify(false));
  };

  // const [currentUser, setCurrentUser] = useState(null)

  return (
    <div>
      {showOnboarding === null ? null : showOnboarding ? (
        <OnboardingScreen onDismiss={handleOnboardingDismiss} />
        ) : (
          <MainPage signOut={signOut} user={user} />
    )}
  </div>
  );
}

function OnboardingScreen({ onDismiss }) {
  return (
    // <div>
    //   <p>Welcome to the app!</p>
    //   <button onClick={onDismiss}>Got it</button>
    // </div>
      <OnboardingPage onDismiss={onDismiss} />
  );
}

function MainPage({ signOut, user }) {
  return (
    <Router>
  
        <MainPageWrapper>

        <SidebarWrapper>
          <Sidebar signOut={signOut}/>
        </SidebarWrapper>

        <MainContent>
          <Navbar />
          {/* <Layout> */}
            <AppRoutes/>
          {/* </Layout> */}
        </MainContent>

      </MainPageWrapper>
    </Router>
  )
}


export default withAuthenticator(App,{
  socialProviders: ['google']
});

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  /* width: 100%; */
  /* padding-bottom: 30px; */
  background-color: #F8A94C;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 15vw);
  height: 100vh;
  padding-bottom: 30px;
  /* border: 1px solid red; */
  border-radius: 20px 0px 0px 20px;
  background-color: #FFF;
  padding-left: 30px;
  padding-right: 30px;
`
const SidebarWrapper = styled.div`
  display: flex;
  min-width: 15vw;
  height: 100vh;
  /* border: 1px solid green; */
  background-color: #F8A94C;
`
