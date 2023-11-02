import { User } from 'src/dto/user'

export interface AuthInterface {
  user: User
  token: string
}

export interface SignInInterface {
  email: string
  password: string
}
