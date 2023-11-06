import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { jwtConstants } from 'src/common/constants'
import AppError from 'src/common/errors/app.error'
import { IS_PUBLIC_KEY } from 'src/core/auth/decorators/public.decorator'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (isPublic) {
      return true
    }

    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new AppError('Token de autenticação não encontrado.', 403)
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secretKey,
      })
      request.user = { id: payload.sub, email: payload.email }
    } catch {
      throw new AppError('Token de autenticação inválido.', 403)
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
