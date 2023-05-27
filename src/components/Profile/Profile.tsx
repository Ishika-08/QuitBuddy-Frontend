import  { useState, useEffect } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import Home from './Home/home';
import Analytics from './Analytics/Analytics';
import Dashboard from './Dashboard/dashboard';
import Blogs from './Blogs/Blogs';
import { useParams } from 'react-router-dom';

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Home');
  const { userID } = useParams();

  const mockData = {
    image: '/Article/img1.jpg',
    link: 'https://example.com/smoking-article',
    title: 'Tips for Quitting Smoking',
    description:
      'Discover effective strategies and tips to help you quit smoking and improve your health.',
    rating: '5.0',
    author: {
      name: 'John Smith',
      image: 'https://example.com/author-profile-image.jpg',
    },
  };

  const handleNavItemSelect = (content:any) => {
    setSelectedContent(content);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geeks-for-geeks-health-backend.up.railway.app/${userID}/medicalData`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userID]);

  const renderSelectedContent = () => {
    switch (selectedContent) {
      case 'Home':
        return <Home />;
      case 'Analytics':
        return <Analytics />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Blogs':
        return <Blogs {...mockData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar onNavItemSelect={handleNavItemSelect} />
      </div>
      <div className="content">{renderSelectedContent()}</div>
    </div>
  );
};

export default App;
