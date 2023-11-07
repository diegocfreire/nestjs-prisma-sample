import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { UserDTO } from '../../users/dtos/user.dto'

export class AuthDTO {
  @ApiProperty({ type: UserDTO })
  user: UserDTO

  @ApiProperty({ type: String })
  token: string
}

export class SignInDTO {
  @IsEmail()
  @ApiProperty({ type: String })
  email: string

  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string
}
