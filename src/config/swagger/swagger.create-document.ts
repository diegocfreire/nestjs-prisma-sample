import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger'
import { SWAGGER_CONFIG } from './swagger.config'

export function createDocument(app: INestApplication): OpenAPIObject {
  const builder = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        in: 'header',
        bearerFormat: 'JWT',
        description:
          'Token de autenticação obtido no método Auth (/auth/signin)',
      },
      'JWT-auth',
    )
    .setVersion(SWAGGER_CONFIG.version)
  for (const tag of SWAGGER_CONFIG.tags) {
    builder.addTag(tag)
  }

  const options = builder.build()
  return SwaggerModule.createDocument(app, options)
}