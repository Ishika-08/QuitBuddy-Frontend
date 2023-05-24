import "./Profile.css"
import { useState } from 'react';
import Navbar from './Navbar';
import Home from "./Home/home"
import Analytics from "./Analytics/Analytics"
import Dashboard from './Dashboard/dashboard';

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Home');
  
  

  const handleNavItemSelect = (content: string) => {
    setSelectedContent(content);
  };

  const renderSelectedContent = () => {
    switch (selectedContent) {
      case 'Home':
        return <Home />;
      case 'Analytics':
        return <Analytics />;
      case 'Dashboard':
        return <Dashboard/>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
        <div className="navbar">
        <Navbar onNavItemSelect={handleNavItemSelect} />
        </div>
        <div className="content">
        {renderSelectedContent()}
        </div>
    </div>
  );
};

export default App;
