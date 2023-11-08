import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ScheduleModule } from '@nestjs/schedule'
import { AuthGuard } from 'src/middleware/auth.guard'
import { PrismaModule } from '../config/database/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, ScheduleModule.forRoot()],
  controllers: [UsersController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
