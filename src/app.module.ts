import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminJS, { ResourceWithOptions } from 'adminjs';
import * as AdminJSTypeORM from '@adminjs/typeorm';
import { validate } from 'class-validator';
import { Resource } from '@adminjs/typeorm';
Resource.validate = validate;
AdminJS.registerAdapter(AdminJSTypeORM);

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiniprogramModule } from './miniprogram/miniprogram.module';
import { Miniprogram } from './miniprogram/entities/miniprogram.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite',
      entities: [Miniprogram],
      synchronize: true,
    }),
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [
          {
            resource: Miniprogram,
          },
        ] as ResourceWithOptions[],
      },
    }),
    MiniprogramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
