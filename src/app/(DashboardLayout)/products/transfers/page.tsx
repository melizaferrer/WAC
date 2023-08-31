"use client"

import React from 'react';
import img1 from "public/images/products/T1.jpg";
import img2 from "public/images/products/T2.jpg";
import img3 from "public/images/products/T3.jpg";
import { Box, Grid, CardContent, Rating, Stack, Typography, Tooltip, Fab, Link } from '@mui/material';

import { IconBasket } from '@tabler/icons-react';
import Image from "next/image";
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';

const paquetes = 
  [
    {
      title: "",
      subheader: "September 14, 2023",
      photo: img1,
      salesPrice: 375,
      price: 285,
      rating: 4,
    },
    {
      title: "",
      subheader: "September 14, 2023",
      photo: img2,
      salesPrice: 650,
      price: 900,
      rating: 5,
    },
    {
      title: "",
      subheader: "September 14, 2023",
      photo: img3,
      salesPrice: 150,
      price: 200,
      rating: 3,
    },
    // {
    //   title: "Cute Soft Teddybear",
    //   subheader: "September 14, 2023",
    //   photo: ,
    //   salesPrice: 285,
    //   price: 345,
    //   rating: 2,
    // },
  ];
  
  const Traslados = () => {
    return (
      <Grid container spacing={3}>
        {paquetes.map((product, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <BlankCard>
              <Typography component={Link} href="/">
                <Image
                  src={product.photo}
                  alt="img"
                  style={{ width: "100%", height: "250px" }}
                />
              </Typography>
              <Tooltip title="Add To Cart">
                <Fab
                  size="small"
                  color="primary"
                  sx={{ bottom: "75px", right: "15px", position: "absolute" }}
                >
                  <IconBasket size="16" />
                </Fab>
              </Tooltip>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">${product.price}</Typography>
                    <Typography
                      color="textSecondary"
                      ml={1}
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.salesPrice}
                    </Typography>
                  </Stack>
                  <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  />
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    );
  };
   
  
  export default Traslados;

