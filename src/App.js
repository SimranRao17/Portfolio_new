import React, { useRef } from 'react';
import { CssBaseline, Container, Box, AppBar, Toolbar, Tabs, Tab, Avatar } from '@mui/material';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import './App.css';

// Update your sections array to match the order of the content:
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [tab, setTab] = React.useState(0);
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    const sectionId = sections[newValue].id;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="default" elevation={2} sx={{ mb: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Simran Sesha Rao"
              src="/profile.jpg" // Place your photo as public/profile.jpg
              sx={{ width: 56, height: 56, mr: 2, border: '2px solid rgb(41, 44, 142)' }}
            />
            <Box sx={{ fontWeight: 700, fontSize: 22, color: ' rgb(41, 44, 142)', letterSpacing: 1 }}>
              Simran Rao
            </Box>
          </Box>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Portfolio Sections"
            sx={{ minHeight: 48 }}
          >
            {sections.map((section) => (
              <Tab key={section.id} label={section.label} sx={{ fontWeight: 600, minHeight: 48 }} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: { xs: 2, md: 6 } }}>
        <Box my={4}>
          <HomeSection />
          {/* SVG Section Divider */}
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <SkillsSection />
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <ExperienceSection />
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <ProjectsSection />
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <EducationSection />
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <AwardsSection />
          <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1976d2" fillOpacity="0.25" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path>
          </svg>
          <ContactSection />
        </Box>
      </Container>
    </>
  );
}

export default App;
