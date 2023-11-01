import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from 'src/middleware/auth.guard'
import { AppController } from './app.controller'
import { ActionsModule } from './core/actions/actions.module'
import { AuthModule } from './core/auth/auth.module'
import { UsersController } from './core/users/users.controller'
import { UsersModule } from './core/users/users.module'
import { UsersService } from './core/users/users.service'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [AuthModule, UsersModule, ActionsModule],
  controllers: [AppController, UsersController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    UsersService,
    PrismaService,
  ],
})
export class AppModule {}
