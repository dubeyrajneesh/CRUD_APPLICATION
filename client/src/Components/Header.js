import React from 'react'
import {AppBar,Toolbar, Typography, styled} from '@mui/material'
import { useNavigate } from 'react-router-dom'



const Header = () => {

  const navigate = useNavigate() ;
  const openCrud = () =>{
    navigate('/')
  }

  const openAddUsers = ()=>{
    navigate('/adduser')
  }
  const openAllUsers = ()=>{
    navigate('/alluser')
  }
  return (
   <AppBar position="static" style={{backgroundColor: '#111111'}} >
    <Toolbar>
        <Typography onClick={()=>{openCrud()}} style={{marginRight:'20px', fontSize:'20px' , cursor:'pointer'}}>CRUD APP</Typography>
        <Typography onClick={()=>{openAllUsers()}} style={{marginRight:'20px', fontSize:'20px', cursor:'pointer'}}>All Users</Typography>
        <Typography onClick={()=>{openAddUsers()}} style={{marginRight:'20px', fontSize:'20px', cursor:'pointer'}}>Add Users</Typography>
    </Toolbar>

   </AppBar>
  )
}

export default Header
