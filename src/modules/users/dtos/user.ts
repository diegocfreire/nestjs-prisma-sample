import { ApiProperty } from '@nestjs/swagger'
import { Profile } from '../../profile/dtos/profile'

export class User {
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

  @ApiProperty({ type: () => Profile })
  profile?: Profile
}
