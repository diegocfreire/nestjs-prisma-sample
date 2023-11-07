import { UserDTO } from 'src/modules/users/dtos/user.dto'

export interface AuthInterface {
  user: UserDTO
  token: string
}
