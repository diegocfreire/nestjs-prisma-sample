import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../users/dtos/user'

export class Auth {
  @ApiProperty({ type: User })
  user: User

  @ApiProperty({ type: String })
  token: string
}

export class SignIn {
  @ApiProperty({ type: String })
  email: string

  @ApiProperty({ type: String })
  password: string
}
