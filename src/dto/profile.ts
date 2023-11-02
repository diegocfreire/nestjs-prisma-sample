import { ApiProperty } from '@nestjs/swagger'
import { User } from './user'

export class Profile {
  @ApiProperty({ type: Number })
  id: number

  @ApiProperty({ type: String })
  name: string

  @ApiProperty({ type: Date })
  createdAt: Date

  @ApiProperty({ type: Date })
  updatedAt: Date

  @ApiProperty({ isArray: true, type: () => User })
  users?: User[]
}
