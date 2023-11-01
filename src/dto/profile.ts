import { ApiProperty } from '@nestjs/swagger'

export class Profile {
  @ApiProperty({ type: Number })
  id: number

  @ApiProperty({ type: String })
  name: string

  @ApiProperty({ type: Date })
  createdAt: Date

  @ApiProperty({ type: Date })
  updatedAt: Date
}
