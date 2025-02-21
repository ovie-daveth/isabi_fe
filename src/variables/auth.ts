export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface googleRequest {
  token: string,
  logoutOtherSession: boolean
}

export interface AuthResponse {
    success: boolean,
    message: string,
    token: string
    userId: string
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

  
export interface onboardRequest {
  studyGoal: string,
  heardAboutPlatform: string,
  desiredCourse: string,
  phone: string
}