"use client"

import React from 'react';

import { Box, Grid } from '@mui/material';
import PageContainer from '../components/container/PageContainer';

const Product = () => {
    return (
      <PageContainer title="Product" description="this is Product">
        
            <Box>
            <Grid item xs={1}>
              
              <h1>Product</h1>
            </Grid>
        </Box>
      </PageContainer>
    )
  }
  
  export default Product;

