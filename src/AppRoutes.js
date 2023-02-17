import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './Components/Dashboard';
import Spinner from './Components/Spinner';
const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Menu = lazy(() => import('./Pages/Menu'));
const OrderList = lazy(() => import('./Pages/OrderList'));
const Reports = lazy(() => import('./Pages/Reports'));
// const Review = lazy(() => import('./Components/Review'));
const Settings = lazy(() => import('./Pages/Settings'));
const SignUp = lazy(() => import('./Components/SignUp'));
const Login = lazy(() => import('./Components/Login'));
const LoginSignup = lazy(() => import('./Pages/LoginSignup'));
const OrderDetails = lazy(() => import('./Pages/OrderDetails'));
const NewRestaurantForm = lazy(() => import('./Components/NewRestaurantForm'));
const NewMenuItemForm = lazy(() => import('./Components/NewMenuItemForm'));
const MenuEditForm = lazy(() => import('./Components/MenuEditForm'));
// const Onboard = lazy(() => import('./Pages/Onboard'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route exact path="/" element={ <Dashboard /> } />
            <Route exact path="/menu" element={ <Menu /> } />
            <Route exact path="/order-list" element={ <OrderList /> } />
            <Route exact path="/order-list/:id" element={ <OrderDetails /> } />
            <Route exact path="/reports" element={ <Reports /> } />
            <Route exact path="/settings" element={ <Settings /> } />
            <Route exact path="/auth" element={ <LoginSignup /> } />
            <Route exact path="/add-restaurant" element={ <NewRestaurantForm /> } />
            <Route exact path="/add-menu" element={ <NewMenuItemForm /> } />
            <Route exact path="/edit-menu/:id" element={ <MenuEditForm /> } />
            {/* <Route exact path="/onboarding" element={ <Onboard /> } /> */}
        </Routes>
    </Suspense>
  )
}

export default AppRoutes