'use client'
import getStripe from "@/utils/getStripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard AI</title>
        <meta name = "description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard AI
          </Typography>
          <SignedOut>
            <Button color = "inherit" href="/sign-in"> 
              {' '}
              Sign In </Button>
            <Button color="inherit" href="/sign-up"> 
              {' '}
              Sign Up </Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box 
        sx={{
          textAlign: 'center',
          marginY: 4,
        }}
      >
        <Typography variant="h2">Welcome to Flashcard AI</Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flaschards from scratch
        </Typography>
        <Button 
        variant="contained"
        color= 'primary' 
        sx={{marginTop: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into
              concise flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at
              any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={7} md={4}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                Free
              </Typography>
              <Typography>
                {' '}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7} md={4}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $1.99 / year
              </Typography>
              <Typography>
                {' '}
                Access to unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7} md={4}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Premium
              </Typography>
              <Typography variant="h6" gutterBottom>
                $4.99 / month
              </Typography>
              <Typography>
                {' '}
                Access to unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
