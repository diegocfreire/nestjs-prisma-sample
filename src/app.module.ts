import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from 'src/middleware/auth.guard'
import { AppController } from './app.controller'
import { AuthModule } from './core/auth/auth.module'
import { UsersModule } from './core/users/users.module'

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
