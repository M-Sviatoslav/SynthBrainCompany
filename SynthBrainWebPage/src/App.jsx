import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Presentation from './MainPageComponents/presentation'
import ArcHeader from "./AddComponents/ArcHeader";
import ShowCase from './ShowCasePage/showcase';
import ContactPage from './ContactPage/contactPage';
import FixedLogo from './AddComponents/miniLogo';


function Layout() {
  return (
    <>
      <ArcHeader />
      <FixedLogo/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Presentation />} />
          <Route path="/ShowCase" element={<ShowCase />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
