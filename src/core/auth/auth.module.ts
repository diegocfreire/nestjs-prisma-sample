import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/common/constants'
import { UsersService } from 'src/core/users/users.service'
import { PrismaService } from 'src/database/prisma.service'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secretKey,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
