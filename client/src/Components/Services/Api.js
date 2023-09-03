import React from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000'

export const addusers = async(user) => {

    try{

       return await axios.post(`${API_BASE_URL}/add` , user)

    }

    catch(error){
        console.log("Some error while adding the user detail " , error.message)
    }

}

export const getAllUsers =async()=>{

    try{

    

    return await axios.get(`${API_BASE_URL}/all`)
    }
    catch(error){
        console.log("error")
    }

}

export const getAllUser =async(id)=>{

    try{

    

    return await axios.get(`${API_BASE_URL}/${id}`)
    }
    catch(error){
        console.log("error")
    }

}



export const EditUserDetail = async(id,user)=>{
    try{

        return await axios.put(`${API_BASE_URL}/edit/${id}`, user)

    }
    catch(error){
        console.log("Some error while editing the details")

    }
}

export const DeleteUserDetails=async (id)=>{
    try{
        return await axios.delete(`${API_BASE_URL}/delete/${id}`)
    }
    catch(error){
        console.log("error")
    }
}

