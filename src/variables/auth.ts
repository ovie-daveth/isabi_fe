export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


export interface AuthResponse {
    success: boolean,
    message: string,
    token?: string
  }

export interface loginRequest {
    email: string,
    password: string
}


export interface UserResponse {
    success: boolean,
    user: {
      firstName: string,
      lastName: string,
      email: string
    }
  }