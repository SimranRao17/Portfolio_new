import React from 'react';
import { Box, Typography, Avatar, Stack, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HomeSection = () => (
  <Box
    id="home"
    className="hero-bg animated-section slide-in-right"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      py: 8,
      background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
      gap: { xs: 4, md: 8 },
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 260 }}>
      <Avatar
        alt="Simran Sesha Rao"
        src="/profile.jpg"
        sx={{ width: 200, height: 200, mb: 2, border: '4px solid #1976d2', boxShadow: '0 4px 32px 0 #1976d2aa' }}
      />
      <Typography
        className="hero-title fade-in-text"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#fff',
          letterSpacing: 2,
          fontSize: { xs: '2.2rem', md: '2.2rem' },
          textAlign: 'center',
        }}
      >
        Simran Rao
      </Typography>
      <Stack direction="row" spacing={2} className="hero-socials fade-in-text delay-2" sx={{ justifyContent: 'center', mt: 1 }}>
        <IconButton component="a" href="https://www.linkedin.com/in/simranrao" target="_blank" rel="noopener" aria-label="LinkedIn" sx={{ color: '#1976d2', '&:hover': { color: '#64b5f6' } }}>
          <FaLinkedin />
        </IconButton>
        <IconButton component="a" href="https://github.com/simranrao" target="_blank" rel="noopener" aria-label="GitHub" sx={{ color: '#1976d2', '&:hover': { color: '#64b5f6' } }}>
          <FaGithub />
        </IconButton>
        <IconButton component="a" href="mailto:1712simranrao@gmail.com" aria-label="Email" sx={{ color: '#1976d2', '&:hover': { color: '#64b5f6' } }}>
          <FaEnvelope />
        </IconButton>
      </Stack>
    </Box>
    <Box className="fade-in-text delay-1" sx={{ maxWidth: 500, ml: { md: 4 }, color: '#e3f2fd', textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        className="hero-subtitle"
        sx={{ color: '#90caf9', fontWeight: 500, mb: 2, fontSize: { xs: '1rem', md: '1.3rem' } }}
      >
        Aspiring Software Engineer | Full-Stack Developer | ML & Data Science Enthusiast
      </Typography>
      <Typography sx={{ color: '#e3f2fd', fontWeight: 400, fontSize: { xs: '1rem', md: '1.1rem' }, mt: 2 }}>
        I am a Computer Science undergraduate at BITS Pilani with a minor in Data Science. I am passionate about building impactful software, exploring machine learning, and working on full-stack web development projects. I enjoy solving real-world problems and have interned at Microsoft and Software Tree, California.
      </Typography>
    </Box>
  </Box>
);

export default HomeSection;
