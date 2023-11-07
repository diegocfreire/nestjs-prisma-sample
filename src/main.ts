import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { createDocument } from './config/swagger/swagger.create-document'
import { customOptions } from './config/swagger/swagger.custom-options'
import { AppModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  SwaggerModule.setup('api-docs', app, createDocument(app), customOptions)

  // Starts listening for shutdown hooks
  app.enableShutdownHooks()

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  await app.listen(3333)
}
bootstrap()
