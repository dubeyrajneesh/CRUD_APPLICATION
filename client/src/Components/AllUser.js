import React ,{useState, useEffect} from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { getAllUsers , DeleteUserDetails } from './Services/Api';
import { Link } from 'react-router-dom';
// import './Alluser.css'

const AllUser = () => {

  const[users, setUsers] = useState([]) ;
  useEffect(()=>{
    getusers() ;

  },[])

  const getusers = async()=>{
    const res =await getAllUsers() ;
    setUsers(res.data) ;
  }

  const deleteUser=async(id)=>{
    await DeleteUserDetails(id) ;
    getusers();


  }




  return (

    <Table style={{ width:'80%' , margin:'70px auto 0px auto' , backgroundColor:'#F2F2F2'}}>
      <TableHead style={{backgroundColor:'#000000' }}>
        <TableRow>
          
          <TableCell style={{color:'#fff', fontSize:'22px'}}>Name</TableCell>
          <TableCell style={{color:'#fff', fontSize:'22px'}}>Username</TableCell>
          <TableCell style={{color:'#fff', fontSize:'22px'}}>Email</TableCell>
          <TableCell style={{color:'#fff', fontSize:'22px'}}>Phone</TableCell>
          <TableCell></TableCell>
          {/* <TableCell></TableCell> */}
        </TableRow>

      </TableHead>
      <TableBody>

        {
          users.map((user)=>(
            <TableRow>
               <TableCell style={{fontSize:'18px', fontWeight:'600'}}>{user.name}</TableCell>
                        <TableCell >{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <Button component={Link} to ={`/edituser/${user._id}`}  variant="contained" color="secondary" style={{marginRight:'20px',marginTop:'10px' , padding:'4px 20px', borderRadius:'2px'}}>Edit</Button>
                        <Button onClick={()=>{deleteUser(user._id)}} variant="contained" color="warning" style={{padding:'4px 20px',marginTop:'10px' ,  borderRadius:'2px'}} >Delete</Button>
            </TableRow>
          ))
        }

      </TableBody>
    </Table>
   
  )
}

export default AllUser
