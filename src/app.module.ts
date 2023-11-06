import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from 'src/middleware/auth.guard'
import { ActionsModule } from './core/actions/actions.module'
import { AuthModule } from './core/auth/auth.module'
import { UsersController } from './core/users/users.controller'
import { UsersModule } from './core/users/users.module'
import { PrismaModule } from './database/prisma.module'

@Module({
  imports: [AuthModule, UsersModule, ActionsModule, PrismaModule],
  controllers: [UsersController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
