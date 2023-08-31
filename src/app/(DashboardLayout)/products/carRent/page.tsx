"use client"

import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import { Box, Grid } from '@mui/material';

const Cars = () => {
    return (
      <PageContainer title="Cars" description="this is Cars">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>cars</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  
  export default Cars;