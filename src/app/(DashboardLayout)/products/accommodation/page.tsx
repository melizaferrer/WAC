  "use client"

import React from 'react';

import { Box, Grid } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';


const Accommodation = () => {
    return (
      <PageContainer title="Hotel" description="this is Hotel">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>Hotel</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  

  
  export default Accommodation;
  