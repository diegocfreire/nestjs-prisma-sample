import { Controller, Delete, Get, Param } from '@nestjs/common'
import { ActionsService } from './actions.service'

@Controller('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Get()
  findAll() {
    return this.actionsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionsService.findOne(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionsService.remove(+id)
  }
}
