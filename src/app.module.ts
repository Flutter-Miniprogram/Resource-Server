import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminJS, { ResourceWithOptions } from 'adminjs';
import * as AdminJSTypeORM from '@adminjs/typeorm';
import { validate } from 'class-validator';
import { Resource } from '@adminjs/typeorm';
Resource.validate = validate;
AdminJS.registerAdapter(AdminJSTypeORM);

import DbConfig from './database';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiniprogramModule } from './miniprogram/miniprogram.module';
import { Miniprogram } from './miniprogram/entities/miniprogram.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig),
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        branding: {
          companyName: 'Flutter-Miniprogram',
        },
        resources: [
          {
            resource: Miniprogram,
            options: {
              properties: {
                // uuid: {
                //   isVisible: {
                //     show: true,
                //     list: true,
                //     filter: true,
                //   },
                // },
              },
            },
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
