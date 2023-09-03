                          
import React , {useState} from 'react'
import { Box, TextField , styled , Button, Typography} from '@mui/material'
import { addusers } from './Services/Api'
import { useNavigate } from 'react-router-dom'

const adduserinitialvalue = {
    name:'',
    username: '',
    email:'',
    phone:''
}

const AddUser = () => {
    const [user , setUser] = useState(adduserinitialvalue)
    const { name, username, email, phone } = user;

    const navigate = useNavigate() ;

    const onValueChange = (e) =>{

        setUser({...user , [e.target.name]: e.target.value})

    }

    const addUser= async()=>{

        await addusers(user) ;
        setUser(adduserinitialvalue) ;
        navigate('/alluser')
    

    }
    return (
        <Box style={{display:'flex' , flexDirection:'column', margin:'80px auto', width:'50%'}}>

            <Typography style={{fontSize:'26px', fontWeight:'600', marginBottom:'15px'}}> Add User Details</Typography>

            <TextField  style={{marginBottom:'8px'}} id="filled-basic" label="Name" name='name' onChange={(e)=>{onValueChange(e)}} value={name} variant="filled" />
            <TextField style={{marginBottom:'8px'}} id="filled-basic" label="Username" name='username' onChange={(e)=>{onValueChange(e)}} value={username} variant="filled" />
            <TextField style={{marginBottom:'8px'}} id="filled-basic" label="email" name='email' onChange={(e)=>{onValueChange(e)}} value={email} variant="filled" />
            <TextField style={{marginBottom:'30px'}} id="filled-basic" label="Phone" name='phone' onChange={(e)=>{onValueChange(e)}} value={phone} variant="filled" />

            <Button onClick={()=>{addUser()}} variant="contained">Add User</Button>


        </Box>
    )
}

export default AddUser
