import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Bidding Platform for Selling Used Products',
    period: 'Jul 2024–Nov 2024',
    description: 'Developed a full-stack web app for students to list, bid, and purchase second-hand items. Implemented secure bidding workflows, user authentication, backend APIs, and robust database integration. UI created using Figma.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Figma', 'HTML', 'CSS'],
    github: 'https://github.com/simranrao/bidding-platform'
  },
  {
    title: 'Movie Database Management System',
    period: 'Dec 2023–Apr 2024',
    description: 'Developed a full-stack application to manage movie data, including ratings, box office stats, cast details, and user-side filtering. Integrated a third-party chatbox widget for conversational movie search.',
    tech: ['MySQL', 'Flask', 'Python', 'JavaScript', 'React'],
    github: 'https://github.com/simranrao/movie-db'
  },
  {
    title: 'Transformer-based Language Translation (Generative AI)',
    period: 'Jan 2024–Apr 2024',
    description: 'Built a Generative AI system for English–Hindi translation using transformer architectures. Fine-tuned a custom model and compared its performance with a pre-trained transformer. Integrated into a React frontend for real-time translation.',
    tech: ['Python', 'PyTorch', 'Hugging Face Transformers', 'React', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/simranrao/transformer-translation'
  }
];

const AnimatedCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(90deg, #f9d423 0%, #ff4e50 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  animation: 'fadeIn 1.2s',
  marginBottom: theme.spacing(2),
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const ProjectsSection = () => (
  <Box id="projects" className="glass-card animated-section slide-in-left" sx={{ my: 6, background: 'linear-gradient(120deg, #2193b0 0%, #6dd5ed 100%)', color: '#e3f2fd', boxShadow: '0 4px 32px 0 #2193b0aa' }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>Projects</Typography>
    <Grid container spacing={2}>
      {projects.map((proj, idx) => (
        <Grid item xs={12} key={idx}>
          <AnimatedCard variant="outlined" className="card-pop" sx={{ background: 'linear-gradient(120deg, #1976d2 0%, #64b5f6 100%)', color: '#fff' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>{proj.title}</Typography>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: 12, fontSize: 24 }} aria-label="GitHub Link">
                    <FaGithub />
                  </a>
                )}
              </Box>
              <Typography variant="subtitle2" sx={{ color: '#b3e5fc' }}>{proj.period}</Typography>
              <Typography paragraph sx={{ color: '#e3f2fd' }}>{proj.description}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {proj.tech.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" sx={{ m: 0.25, background: '#fffde7', color: '#1976d2', fontWeight: 600 }} />
                ))}
              </Stack>
            </CardContent>
          </AnimatedCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ProjectsSection;
