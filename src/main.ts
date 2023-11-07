import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('NestJS Prisma Sample')
    .setDescription('The API description')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [],
  })

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  })

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
