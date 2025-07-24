import { UserRepository } from '@/repositories/userRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';


type AuthState = {
    token: string | null;
    username: string | null;
    email: string | null;
    id: string | null,
    saveToken: (token: string) => Promise<void>;
    saveEmail: (email: string) => Promise<void>;
    saveUsername: (username: string) => Promise<void>;
    saveId:(id:string)=>Promise<void>;
    isAuthenticated: boolean;
    logout: () => Promise<void>;
    hydrate: () => Promise<void>;
};


export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    username: null,
    email: null,
    id:null,
    isAuthenticated: false,

    //save the token
    saveToken: async (token: string) => {
        await AsyncStorage.setItem('accessToken', token);

        //save the token state in the zustland
        set({
            token,
            isAuthenticated: true
        })
    },

    
    //save the email
    saveEmail:async(email:string)=>{
        await AsyncStorage.setItem('email',email);

        set({
            email:email
        })

    },

    
    //save the username
    saveUsername:async(username:string)=>{
        await AsyncStorage.setItem('username',username);

        set({
            username:username
        })
    },

    //logout the user
    logout: async () => {
        await UserRepository.logout();

        set({
            token: null,
            username: null,
            email: null,
            isAuthenticated: false,
        });
    },

    saveId:async(id:string)=>{
        await AsyncStorage.setItem('id',id);

        set({
            id:id
        })


    },

    hydrate: async () => {
        const [token, username, email] = await AsyncStorage.multiGet([
            'token',
            'username',
            'email',
        ]).then((entries) => entries.map((entry) => entry[1]));

        if (token && username && email) {
            set({
                token,
                username,
                email,
                isAuthenticated: true,
            });
        }
    },
}));
