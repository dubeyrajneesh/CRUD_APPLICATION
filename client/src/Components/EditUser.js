
import React , {useState, useEffect} from 'react'

import { Box, TextField , styled , Button, Typography} from '@mui/material'
import { addusers, getAllUser } from './Services/Api'
import { EditUserDetail } from './Services/Api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const adduserinitialvalue = {
    name:'',
    username: '',
    email:'',
    phone:''
}



const EditUser = () => {

  

    const [user , setUser] = useState(adduserinitialvalue)
    // const { name, username, email, phone } = user;

    const navigate= useNavigate() ;

    const {id} = useParams() ;

    const onValueChange = (e) =>{

        setUser({...user , [e.target.name]: e.target.value})

    }


    useEffect(()=>{
        editUser() ;

    },[])

    const editUser= async()=>{

     const response =  await getAllUser(id) ;
     setUser(response.data) ;

    }

    const editUseranddetails =async()=>{
        const response = await EditUserDetail(id, user);
        navigate('/alluser')

    }

    // useEffect(()=>{
    //     loadingDetails() ;

    // }, [])

    // const loadingDetails=()=>{
    //     setUser()
    // }
    return (
        <Box style={{display:'flex' , flexDirection:'column', margin:'80px auto', width:'50%'}}>

<Typography style={{fontSize:'26px', fontWeight:'600', marginBottom:'15px'}}> Edit User Details</Typography>

            <TextField  style={{marginBottom:'8px'}} id="filled-basic" label="Name" name='name' onChange={(e)=>{onValueChange(e)}} value={user.name} variant="filled" />
            <TextField style={{marginBottom:'8px'}} id="filled-basic" label="Username" name='username' onChange={(e)=>{onValueChange(e)}} value={user.username} variant="filled" />
            <TextField style={{marginBottom:'8px'}} id="filled-basic" label="email" name='email' onChange={(e)=>{onValueChange(e)}} value={user.email} variant="filled" />
            <TextField style={{marginBottom:'30px'}} id="filled-basic" label="Phone" name='phone' onChange={(e)=>{onValueChange(e)}} value={user.phone} variant="filled" />

            <Button onClick={()=>{editUseranddetails()}} variant="contained">Edit User</Button>


        </Box>
    )
}

export default EditUser
