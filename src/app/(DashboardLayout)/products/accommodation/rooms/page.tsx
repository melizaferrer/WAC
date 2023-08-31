"use client"

import React from 'react';

import { Box, Grid } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';


const Room = () => {
    return (
      <PageContainer title="Room" description="this is Room">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>Room</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  

  
  export default Room;