import { SwaggerCustomOptions } from '@nestjs/swagger'

export const customOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
    tagsSorter: 'alpha',
    operationsSorter: 'alpha',
  },
  customSiteTitle: 'NestJS Sample Application With PrismaORM',
  // customfavIcon: '',
  customCss: `.topbar-wrapper img {
                  max-width: 100%;
                  height: 80px;                  
                  content: url(https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png);
              }

              .swagger-ui .topbar .topbar-wrapper, .swagger-ui .topbar a {
                align-items: center;
                display: flex;
                padding: 0px;
                height: 50px;
              }

              .swagger-ui .topbar {
                background-color: #1B2449;
                padding: 10px 0;
              }
              `,
}
