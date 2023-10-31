import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import AppError from 'src/common/errors/app.error'
import { AuthInterface } from 'src/common/interface/auth.interface'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<AuthInterface> {
    const user = await this.usersService.findUnique(email)

    if (!user) {
      throw new AppError('Usuário incorreto ou sem acesso.', 401)
    }

    if (user?.password !== pass) {
      throw new AppError('Senha incorreta.', 401)
    }

    delete user.password

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    })

    return {
      user,
      token,
    }
  }
}
