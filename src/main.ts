import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { PrismaModel } from './dto'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('NestJS Prisma Sample')
    .setDescription('The API description')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [...PrismaModel.extraModels],
  })

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  })

  // Starts listening for shutdown hooks
  app.enableShutdownHooks()

  await app.listen(3333)
}
bootstrap()
