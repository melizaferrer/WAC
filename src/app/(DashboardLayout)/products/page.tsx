"use client"

import React from 'react';

import { Box, Grid, CardContent, Rating, Stack, Typography, Tooltip, Fab, Link } from '@mui/material';
import Excursion from './excursions/page';
import Accommodation from './accommodation/page';
import BoxOffice from './boxOffice/page';
import Car from './carRent/page';
import Traslados from './transfers/page';

  
  const Product = () => {
    return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
          <h1>Accommodation</h1>
            <Accommodation />
          </Grid>
        
          <Grid item xs={12} lg={12}>
          <h1>Box Office</h1>
            <BoxOffice />
          </Grid>
          <Grid item xs={12} lg={12}>
          <h1>Car Rent</h1>
            <Car />
          </Grid>
          <Grid item xs={12}>
          <h1>Excursions</h1>
            <Excursion />
          </Grid>
          <Grid item xs={12}>
          <h1>Transfers</h1>
            <Traslados />
          </Grid>
        </Grid>
      </Box>
    )      
    };
   
  
  export default Product;

