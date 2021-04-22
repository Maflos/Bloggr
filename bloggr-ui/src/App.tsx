import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';
import AppFooter from './components/AppFooter/AppFooter';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppHeader />
      <AppBody />
      <AppFooter />
    </Router>
  );
}

export default App;
