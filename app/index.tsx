import { useAuthStore } from "@/stores/authStore";
import { Redirect } from "expo-router";

export default function Index(){
    const authStore=useAuthStore.getState();
    const isAuthenticated=authStore.isAuthenticated;

    return <Redirect href={isAuthenticated?'/home':'/login'}/>;
};