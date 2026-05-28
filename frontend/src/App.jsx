import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

function App() {
  const [message, setMessage] = useState('');

  // Prueba rápida de conexión al backend
  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error conectando al backend', err));
  }, []);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Plantilla Base Lista
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Estado del Backend: {message || 'Cargando...'}
      </Typography>
      
      <Button variant="contained" sx={{ mt: 3 }}>
        Botón Material UI de Prueba
      </Button>
    </Box>
  );
}

export default App;