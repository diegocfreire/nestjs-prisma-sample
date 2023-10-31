import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { SignInInterface } from 'src/common/interface/auth.interface'
import { AuthService } from 'src/core/auth/auth.service'
import { Public } from './decorators/public.decorator'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  signIn(@Body() body: SignInInterface) {
    return this.authService.signIn(body.email, body.password)
  }

  @Get('/ola')
  getOla() {
    return { message: 'Olá Mundo.' }
  }
}
