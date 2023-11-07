import { User } from '@prisma/client'

export interface IUsersInterface {
  findMany(): Promise<User[]>
  findUnique(email: string): Promise<User>
  create(data: User): Promise<User>
  update(data: User): Promise<void>
  delete(codConv: number, cpf: string): Promise<void>
}
