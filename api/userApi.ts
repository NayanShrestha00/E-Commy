import { LoginData, RegisterData } from "@/types/auth";
import axios from "axios";


const API_BASE_URL="https://fakestoreapi.com";


export const loginUser=async(credentials:LoginData)=>{
    try{
        const response=await axios.post(`${API_BASE_URL}/auth/login/`, credentials);
        return response.data;
    }
    catch(error:any){
        throw error.response?.data || {message:"Failed to login, please try again"};
    };

};


export const RegisterUser=async(credentials:RegisterData)=>{
    try{
        const response=await axios.post(`${API_BASE_URL}/users`, credentials);
        return response.data;
    }
    catch(error:any){
        throw error.response?.data || {message:"Failed to register please try again"};
    };


};