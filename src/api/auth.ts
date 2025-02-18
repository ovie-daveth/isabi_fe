// api/auth/signup

import { useAxios } from "@/config/useAxios";
import { AuthResponse, googleRequest, loginRequest, onboardRequest, SignUpRequest, UserResponse } from "@/variables/auth";
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

    async VerifyEmail(token: { verificationCode: string, token: string }) {
        let url = `${this.baseUrl}/verify-email`;
        
        const response = await this.axiosInstance.post<AuthResponse>(url, token, {
            withCredentials: true, // Explicitly ensure cookies are sent
        });
        
        return response.data;
    }

     
    async onBoardStudents(data: onboardRequest, userId: string){
        let url = `${this.baseUrl}/onboarding/${userId}`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }
    

    async Login(data: loginRequest){
        let url = `${this.baseUrl}/login`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }

    
    async VerifyLogin(token: { verificationCode: string }) {
        let url = `${this.baseUrl}/verify-login`;
        
        const response = await this.axiosInstance.post<AuthResponse>(url, token, {
            withCredentials: true, // Explicitly ensure cookies are sent
        });
        
        return response.data;
    }

    async ResendEmailVerification(data: {email: string}){
        let url = `${this.baseUrl}/resend-ver-otp`;
        const response = await this.axiosInstance.post<AuthResponse>(url, data)
        return response.data
    }


    async GoogleAuth(idToken: googleRequest){
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