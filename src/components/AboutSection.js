import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AnimatedBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(120deg, #1e3c72 0%, #2a5298 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 32px 0 #1e3c72aa',
  padding: theme.spacing(4, 2),
  animation: 'fadeIn 1.2s',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const AboutSection = () => (
  <Box id="about" className="glass-card animated-section slide-in-left" sx={{ my: 6, background: 'linear-gradient(120deg, #1e3c72 0%, #2a5298 100%)', color: '#e3f2fd', boxShadow: '0 4px 32px 0 #1e3c72aa' }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', fontWeight: 600 }}>About</Typography>
    <Typography sx={{ color: '#e3f2fd', fontWeight: 500 }}>
      I am a Computer Science undergraduate at BITS Pilani with a minor in Data Science. I am passionate about building impactful software, exploring machine learning, and working on full-stack web development projects. I enjoy solving real-world problems and have interned at Microsoft and Software Tree, California.
    </Typography>
  </Box>
);

export default AboutSection;
