"use client"

import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import { Box, Grid } from '@mui/material';
import Blog from '../../components/dashboard/Blog';

const BoxOffice = () => {
    return (
      <PageContainer title="BoxOffice" description="this is BoxOffice">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>BoxOffice</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  
  export default BoxOffice;