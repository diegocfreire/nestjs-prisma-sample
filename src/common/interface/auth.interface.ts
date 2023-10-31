import { User } from '@prisma/client'

export interface AuthInterface {
  user: User
  token: string
}

export interface SignInInterface {
  email: string
  password: string
}
