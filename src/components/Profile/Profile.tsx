import "./Profile.css"
import { useState } from 'react';
import Navbar from './Navbar';
import Home from "./Home/home"
import Analytics from "./Analytics/Analytics"
import Dashboard from './Dashboard/dashboard';
import Blogs from "./Blogs/Blogs"

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Home');

  const mockData= {
    image: "/Article/img1.jpg",
    link: 'https://example.com/smoking-article',
    title: 'Tips for Quitting Smoking',
    description: 'Discover effective strategies and tips to help you quit smoking and improve your health.',
    rating: '5.0',
    author: {
      name: 'John Smith',
      image: 'https://example.com/author-profile-image.jpg',
    },
  };
  
  

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
      case 'Blogs':
        return <Blogs {...mockData}/>
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
