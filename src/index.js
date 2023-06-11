import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Login from './pages/Login';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallbackDemo from './pages/Hooks/UseCallbackDemo/UseCallbackDemo';
import UseMemoDemo from './pages/Hooks/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
import DemoHookRedux from './pages/Hooks/HookRedux/DemoHookRedux';

//set up redux
import {Provider} from 'react-redux'
import { store } from './redux/configStore';
import UseNavigateDemo from './pages/Hooks/UseNavigateDemo';
import Profile from './pages/Profile';
import ForgotPass from './pages/ForgotPass';
import UseSearchParamDemo from './pages/Hooks/UseSearchParamDemo/UseSearchParamDemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store = {store}>
  <BrowserRouter>
 <Routes>
  <Route path='' element={<HomeTemplate />}>
    <Route index element={<Home />}></Route>
    <Route path='login' element={<Login />}></Route>
    <Route path='register'  element={<Register />}></Route>
    <Route path='contact'  element={<Contact />}></Route>
    <Route path='use-state-demo'  element={<UseStateDemo />}></Route>
    <Route path='use-efect-demo'  element={<UseEffectDemo />}></Route>
    <Route path='use-callback-demo'  element={<UseCallbackDemo />}></Route>
    <Route path='use-memo-demo'  element={<UseMemoDemo />}></Route>
    <Route path='use-ref-demo'  element={<UseRefDemo />}></Route>
    <Route path='hook-redux'  element={<DemoHookRedux />}></Route>
    <Route path='use-navigate'  element={<UseNavigateDemo />}></Route>
    <Route path='profile'  element={<Profile />}></Route>
    <Route path='forgot-pass'  element={<ForgotPass />}></Route>
    <Route path='use-search-params'  element={<UseSearchParamDemo />}></Route>


    <Route path='detail' >
      <Route path=':id' element={<Detail />}></Route>
    </Route>





  </Route>
 </Routes>
 </BrowserRouter>
 </Provider>
);



