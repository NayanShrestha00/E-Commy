import { loginUser, RegisterUser } from "@/api/userApi";
import { LoginData, RegisterData } from "@/types/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";


export const UserRepository = {
    //login
    login: async (credentials: LoginData) => {
        try {
            const token = await loginUser(credentials);

            if (!token) {
                Alert.alert('Token not found');
                return;
            }
            return token;
        }
        catch (error: any) {
            throw new Error(error.message || "Unable to Login");
        }

    },

    //registration or signup
    signup: async (credentials: RegisterData) => {
        try {
            const data = await RegisterUser(credentials);

            if (!data) {
                Alert.alert('Error in registration, please try again');
                return;
            }
            return data;
        }
        catch (error: any) {
            throw new Error(error.message || "Unable to register");
        }
    },

    //get token
    token: async () => {
        return AsyncStorage.getItem("authToken");
    },

    //logout user
    logout: async () => {
        AsyncStorage.removeItem("authToken");

    }
}
