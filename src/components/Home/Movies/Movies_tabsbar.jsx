// ShowsNavigation.jsx
import React from 'react';
import {
  Container,
  Tabs,
  Tab,
  TextField,
  Box,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function ShowsNavigation({ tabValue, setTabValue }) {
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{   py: 2 ,bx:'60px', backgroundColor: 'white' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          
          gap: 2,
        }}
      >
        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{ flexGrow: 1  }}
          
        >
          <Tab label="New Shows" />
          <Tab label="Upcoming" />
        </Tabs>

        {/* Search Bar */}
        <TextField
          placeholder="Search shows..."
          variant="outlined"
          size="small"
          sx={{ width: { xs: '100%', sm: '300px', } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}

export default ShowsNavigation;
