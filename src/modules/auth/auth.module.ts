import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from 'src/config/database/prisma.module'
import { jwtConstants } from 'src/util/constants'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secretKey,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
