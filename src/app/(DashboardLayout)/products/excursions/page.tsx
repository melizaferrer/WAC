"use client"

import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import { Box, Grid } from '@mui/material';

const Excursion = () => {
    return (
      <PageContainer title="Excursion" description="this is Excursion">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>Excursion</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  
  export default Excursion;