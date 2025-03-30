import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContextProvider from './context';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";
import './App.css';
import TopBar from './components/TopBar';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Inventory from './components/Inventory';

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <ContextProvider>
        <div className="App wrapper">
          <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <TopBar toggleSidebar={toggleSidebar} />
          <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })}>
            <Routes>
              <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </Container>
        </div>
      </ContextProvider>
    </Router>
  )
}

export default App;
