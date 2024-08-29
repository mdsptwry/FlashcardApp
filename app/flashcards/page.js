'use client'
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection, CollectionReference, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"
import { Card, CardActionArea, CardContent, Container, 
  Grid, Typography, AppBar, Toolbar, Box, Button, 
  IconButton, Menu, MenuItem } from "@mui/material"
import { Person } from "@mui/icons-material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Flashcards() {
  const {isLoaded, isSignedIn, user} = useUser()
  const [flashcards, setFlashcards] = useState([])
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
    const handleMenuClose = () => {
    setAnchorEl(null);
  }

  useEffect (() => {
    async function getFlashcards() {
      if (!user) return
      const docRef = doc(collection(db, 'users'), user.id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()){
        const collections = docSnap.data().flashcards || []
        setFlashcards(collections)
      } else {
        await setDoc(docRef, {flashcards: []})
      }
    }
    getFlashcards()
  }, [user])

  // if (!isLoaded || !isSignedIn){
  //   return 
  // }
  const handleCardClick=(id)=>{
    router.push(`/flashcard?id=${id}`)
  }

  return (
    <Container maxWidth='100vw' disableGutters>
        <AppBar position="static" >
        <Toolbar sx={{backgroundColor:'#673ab7', height: 80}}>
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
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
      

  <Box 
    display={"flex"}
    justifyContent={"center"}
    flexDirection={'column'}
    alignItems={"center"}
    gap={2}
  >
     {/* Title */}
  <Typography 
    variant="h4"        // Adjust the variant for the size you want
    color="black"     // You can set the color to primary or any custom color
    marginTop={5}
  >
    Saved Collections
  </Typography>
  </Box>


    <Container maxWidth='100vw'>
    {!isLoaded ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
            Loading...
          </Typography>
        ) : !isSignedIn ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
            You are not signed in. Please sign in to access your saved collections.
          </Typography>
        ) : flashcards.length === 0 ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
          </Typography>
        ) : (
      <Grid container spacing={3} sx={{mt: 2}}>
        {flashcards.map((flashcard, index)=> (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea
                onClick={() => {
                  handleCardClick(flashcard.name)
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {flashcard.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid> 
      )}
      
    </Container>
    </Container>
  )

}





// import {useUser} from '@clerk/nextjs'
// import { useEffect, useState} from 'react'

// import { CollectionReference, collection, doc, getDoc, setDoc } from 'firebase/firestore'
// import { db } from '@/firebase'
// import { useRouter } from 'next/navigation'
// import {Card, CardActionArea, CardContent, Container, Grid, Typography} from "@mui/material"

// export default function Flashcards(){
//     const {isLoaded, isSignedIn, user} = useUser()
//     const [flashcards, setFlashcards] = useState([])
//     const router = useRouter()
  
//     useEffect(() => {
//       async function getFlashcards() {
//         if (!user) return
//         const docRef = doc(collection(db, 'users'), user.id)
//         const docSnap = await getDoc(docRef)
        
//         if (docSnap.exists()) {
//           const collections = docSnap.data().flashcards || []
//           setFlashcards(collections)
//         } else {
//           await setDoc(docRef, {flashcards: []})
//         }
//       }
//       getFlashcards()
//     }, [user])
  
//     if (!isLoaded || !isSignedIn) {
//       return<></>
//     }
  
//     const handleCardClick = (id) => {
//       router.push('/flashcard?id=${flashcard.id}')
//     }
    
//     return (
//       <Container maxWidth="100vw">
//         <Grid
//           container
//           spacing = {3} 
//           sx={{
//             mt:4,
//           }}
//         >
//           {flashcards.map((flashcard, index) => (
//             <Grid item xs={12} sm ={6} md={4} key={index}>
//               <Card>
//                 <CardActionArea
//                   onClick={() => {
//                     handleCardClick(flashcard.id)
//                   }}
//                 >
//                   <CardContent>
//                     <Typography variant = 'h6'>
//                       {flashcard.name}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     )
// }
