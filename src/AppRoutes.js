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

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route exact path="/" element={ <Dashboard /> } />
            <Route exact path="/menu" element={ <Menu /> } />
            <Route exact path="/order-list" element={ <OrderList /> } />
            <Route exact path="/reports" element={ <Reports /> } />
            <Route exact path="/settings" element={ <Settings /> } />
        </Routes>
    </Suspense>
  )
}

export default AppRoutes