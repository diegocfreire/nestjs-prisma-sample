import { ApiProperty } from '@nestjs/swagger'
import { Profile } from '@prisma/client'
import { UserDTO } from '../../users/dtos/user.dto'

export class ProfileDTO implements Profile {
  @ApiProperty({ type: Number })
  id: number

  @ApiProperty({ type: String })
  name: string

  @ApiProperty({ type: Date })
  createdAt: Date

  @ApiProperty({ type: Date })
  updatedAt: Date

  @ApiProperty({ isArray: true, type: () => UserDTO })
  users?: UserDTO[]
}
