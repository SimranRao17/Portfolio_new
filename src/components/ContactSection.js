import React from 'react';
import { Typography, Box, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const AnimatedBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3, 2),
  animation: 'fadeIn 1.2s',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const ContactSection = () => (
  <AnimatedBox id="contact" className="glass-card animated-section slide-in-up" sx={{ my: 6, background: 'linear-gradient(120deg, #1976d2 0%, #64b5f6 100%)', color: '#fff', boxShadow: '0 4px 32px 0 #1976d2aa' }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>Contact</Typography>
    <Stack spacing={1}>
      <Typography>Email: <span style={{ color: '#fff', fontWeight: 600 }}>1712simranrao@gmail.com</span></Typography>
      <Typography>Mobile: <span style={{ color: '#fff', fontWeight: 600 }}>9845883249</span></Typography>
      <Typography>Languages: <span style={{ color: '#b3e5fc', fontWeight: 600 }}>English, Hindi, Kannada</span></Typography>
    </Stack>
  </AnimatedBox>
);

export default ContactSection;
