import { User } from 'src/modules/users/dtos/user'

export interface AuthInterface {
  user: User
  token: string
}

export interface SignInInterface {
  email: string
  password: string
}
