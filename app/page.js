'use client'
import getStripe from "@/utils/getStripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import { useState } from "react";

export default function Home() {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }


  return (
    <Container maxWidth="100vw" disableGutters>
      <Head>
        <title>LingoDeck</title>
        <meta name = "description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#673ab7',height: 80}}>
          <Box sx={{flexGrow: 1}}>
          <Button color="inherit" href="/">
          <Typography variant="h6" textTransform="none" href="page.js" style={{flexGrow: 1}} sx={{ml: 2}}>
            LingoDeck
          </Typography>
          </Button>
          </Box>

          <SignedOut>
            <Box sx={{mx: 2}}>
            <Button color = "inherit"  href="/generate"> 
              {' '}
              Generate </Button>
            <Button color="inherit" href="/flashcards"> 
              {' '}
              Saved </Button>
            </Box>
            <IconButton color="inherit" onClick={handleMenuOpen} sx={{mr: 2}}>
              <Person/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} component="a" href="/sign-in">
                Sign In
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/sign-up">
                Sign Up
                </MenuItem>
            </Menu>  
          </SignedOut>
          
          
          <SignedIn>
            <Box sx={{mx: 2}}>
            <Button color = "inherit" href="/generate"> 
              {' '}
              Generate </Button>
            <Button color="inherit" href="/flashcards"> 
              {' '}
              Saved </Button>
            </Box>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box 
        sx={{
          textAlign: 'center',
          marginY: 5,
        }}
      >
        <Box sx={{my: 1}}>
        <Typography variant="h3" sx={{marginTop:4}}>Welcome to LingoDeck</Typography>
        </Box>

        <Box sx={{my: 2}}>
        <Typography variant="h6">
          {' '}
          Learn any language you want with our advanced AI generated flashcards
        </Typography>
        </Box>
        <Box sx={{my: 3}}>
        <Button 
        variant="contained" 
        sx={{
          marginTop: 2, marginRight: 2,
          borderRadius: 2,
          backgroundColor: '#212121',
          color: 'whitesmoke',
          '&:hover':{
            backgroundColor: '#333',
          }
        }}
        href="/generate">
          Get Started
        </Button>

        <Button 
        variant="contained"
        color= 'white' 
        sx={{marginTop: 2,
          border: '1px solid',
          borderRadius: 2
        }}
        href="/flashcards">
          Saved Collections
        </Button>
        </Box>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
          {/*Features*/}
        </Typography>
        <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '3px 8px 10px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest.
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into
              concise flashcards, perfect for studying.
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at
              any time. Study on the go with ease.
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Numerous Languages
            </Typography>
            <Typography>
              {' '}
              Access to over 50+ languages, including text in that language, english translation, and transliteration.
            </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Saved Collections
            </Typography>
            <Typography>
              {' '}
              Save your flashcard to a collection and revisit them later.
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 160,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
              }}>
            <Typography variant="h6" gutterBottom>
              Ad Free
            </Typography>
            <Typography>
              {' '}
              This is a completely free platform with no ads or aditional fees.
            </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box> 
    </Container>
  )
}
