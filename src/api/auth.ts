// api/auth/signup

import { useAxios } from "@/config/useAxios";
import { AuthResponse, loginRequest, SignUpRequest, UserResponse } from "@/variables/auth";
import { AxiosInstance } from "axios";

export class AuthService {

    private baseUrl: string;
    private axiosInstance: AxiosInstance;

    constructor(){
        this.baseUrl = "/api/auth"
        this.axiosInstance = useAxios()
    }


    async SignUpUsers(data: SignUpRequest){
        let url = `${this.baseUrl}/signup`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }

    async VerifyEmail(token: string){
        let url = `${this.baseUrl}/verify-email:${token}`;
        const response = await this.axiosInstance.get<AuthResponse>(url)
        return response.data
    }

    async Login(data: loginRequest){
        let url = `${this.baseUrl}/login`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }

    async ResendEmailVerification(data: {email: string}){
        let url = `${this.baseUrl}/resend-verification`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }

    async GoogleAuth(idToken: {idToken: string}){
        let url = `${this.baseUrl}/google-auth`;
        const response = await this.axiosInstance.post<AuthResponse>(url, idToken)
        return response.data
    }

    async Logout(){
        let url = `${this.baseUrl}/logouth`;
        const response = await this.axiosInstance.post<AuthResponse>(url)
        return response.data
    }

    async ForgetPassowrd(data: {email: string}){
        let url = `${this.baseUrl}/forgot-password`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }
    
    async ResetPasswordToken(newPassword: string, token: string ){
        let url = `${this.baseUrl}/reset-password/${token}`;
        const response = await this.axiosInstance.post<AuthResponse>(url, newPassword)
        return response.data
    }

    async GetProfile(){
        let url = `${this.baseUrl}/profile`;
        const response = await this.axiosInstance.get<UserResponse>(url)
        return response.data
    }
}