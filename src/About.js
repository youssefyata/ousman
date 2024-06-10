// src/About.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutTab from './AboutTab';
import PortfolioTab from './PortfolioTab';
import ServicesTab from './ServicesTab';
import ContactTab from './ContactTab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || '1';

  const [value, setValue] = useState(initialTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(initialTab);
  }, [initialTab]);

  return (
    <div className="about-page">
      <TabContext value={value}>
        <div className="header">
        <Link to="/"> <img src="/images/logo.png" alt="Logo" className="logo" /></Link> 
          <Box sx={{ borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Tabs">
              <Tab label="Á PROPOS" value="1" style={{ color: value === '1' ? '#FF8A00' : null }} />
              <Tab label="PORTFOLIO" value="2" style={{ color: value === '2' ? '#FF8A00' : null }} />
              <Tab label="SERVICES" value="3" style={{ color: value === '3' ? '#FF8A00' : null }} />
              <Tab label="CONTACT" value="4" style={{ color: value === '4' ? '#FF8A00' : null }} />
              <Tab value="5"  style={{display:"none"}}/>
              <a className='whatsapp-button' href="https://wa.me/+22237015199#" target='_blank' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                <WhatsAppIcon style={{ fontSize: '15px', marginRight: '3px', marginTop: '8px' }} />| MON WHATSAPP
              </a>
            </TabList>
          </Box>
        </div>
        <div className="about-content">
          <TabPanel value="1">
            <AboutTab />
          </TabPanel>
          <TabPanel value="2">
            <PortfolioTab />
          </TabPanel>
          <TabPanel value="3">
            <ServicesTab />
          </TabPanel>
          <TabPanel value="4">
            <ContactTab />
          </TabPanel>
          <TabPanel value="5">
            <ContactTab />
          </TabPanel>

        </div>
      </TabContext>
    </div>
  );
}

export default About;
