import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { ProfileDTO } from '../../profile/dtos/profile.dto'

export class UserDTO implements User {
  @ApiProperty({ type: Number })
  id: number

  @ApiProperty({ type: Number })
  profile_id: number

  @ApiProperty({ type: String })
  name: string

  @ApiProperty({ type: String })
  email: string

  @ApiProperty({ type: String })
  password: string

  @ApiProperty({ type: Date })
  createdAt: Date

  @ApiProperty({ type: Date })
  updatedAt: Date

  @ApiProperty({ type: () => ProfileDTO })
  profile?: ProfileDTO
}
