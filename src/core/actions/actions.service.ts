import { Injectable } from '@nestjs/common'

@Injectable()
export class ActionsService {
  findAll() {
    return `This action returns all actions`
  }

  findOne(id: number) {
    return `This action returns a #${id} action`
  }

  remove(id: number) {
    return `This action removes a #${id} action`
  }
}
