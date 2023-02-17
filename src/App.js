import React, {Suspense, lazy, useState, useEffect } from 'react';
import styled from "styled-components";
import AppRoutes from "./AppRoutes";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router } from "react-router-dom";
// import Layout from './Components/Layout';
import LoginSignup from './Pages/LoginSignup';
import OnboardingPage from './Components/Onboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Layout, Image } from 'antd';
import { withAuthenticator, View, useTheme, Text } from '@aws-amplify/ui-react';
import SideMenu from './Components/SideMenu';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import { useRestaurantOwnerContext } from './Contexts/RestaurantOwnerContext';

const { Sider, Content, Footer, Header} = Layout;

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

    // const { restaurantOwner } = useRestaurantOwnerContext();
  // if (!restaurantOwner) return null;

  // const [currentUser, setCurrentUser] = useState(null)
  // && restaurantOwner.length > 0 
  return (
    <div>
      {showOnboarding === null ? null : showOnboarding ? 
      (
        <OnboardingScreen onDismiss={handleOnboardingDismiss} />
        ) : (
          <MainPage signOut={signOut} user={user} />
      )}
      {/* {!restaurantOwner?.length > 0 ? 
      (
        <OnboardingScreen onDismiss={handleOnboardingDismiss} />
        ) : (
          <MainPage signOut={signOut} user={user} />
      )} */}
  </div>
  );
}

function OnboardingScreen({ onDismiss }) {
  return (
      <OnboardingPage onDismiss={onDismiss} />
  );
}

function MainPage({ signOut, user }) {

  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout>
        <Router>
        <Sider trigger={null} collapsible collapsed={collapsed} width={250} style={{backgroundColor: '#F8A94C', width: '500px'}}>
          <Image width={collapsed? 65 : 150} style={{marginLeft: 10, marginTop: 10}} src='/images/logo.png'/>
          <SideMenu signOut={signOut}/>

          {collapsed == false && <div style={{marginTop: '70px', marginLeft: '20px', marginBottom: 20, width: '100%'}}>
            <img className='sidebarImage' height={200} width={170} src='/images/upgrade.png' />
          </div>}


        </Sider>
        <Layout>
          <Header style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <MenuOpenSharpIcon style={{cursor: 'pointer'}} onClick = {()=>setCollapsed(!collapsed)}/>
            <Navbar />
          </Header>

          <Content style={{padding: '20px 20px', backgroundColor: '#fff'}}>
            
              <AppRoutes />
            
          </Content>
          <Footer style={{textAlign: 'center', height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>FindVegan Dashboard ©2023</p>
          </Footer>
          
        </Layout>
        
      
            {/* <MainPageWrapper> */}

            {/* <SidebarWrapper>
              <Sidebar signOut={signOut}/>
            </SidebarWrapper> */}

            {/* <MainContent> */}
              {/* <Navbar /> */}
              {/* <Layout> */}
                
              {/* </Layout> */}
            {/* </MainContent> */}

          {/* </MainPageWrapper> */}
          </Router>
      </Layout>
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
