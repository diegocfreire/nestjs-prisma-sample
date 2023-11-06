import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Operation } from '@prisma/client'
import { User } from '../../users/dtos/user'

export class Audit {
  @ApiProperty({ type: Number })
  id: number

  @ApiPropertyOptional({ type: Number })
  user_id?: number

  @ApiProperty({ type: String })
  table: string

  @ApiProperty({ enum: Operation, enumName: 'Operation' })
  operation: Operation

  @ApiPropertyOptional({ type: String })
  description?: string

  @ApiPropertyOptional({ type: Object })
  data_before?: object

  @ApiPropertyOptional({ type: Object })
  data_after?: object

  @ApiProperty({ type: Date })
  created_at: Date

  @ApiProperty({ type: Date })
  updated_at: Date

  @ApiPropertyOptional({ type: () => User })
  user?: User
}
