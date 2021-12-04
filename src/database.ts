import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Miniprogram } from './miniprogram/entities/miniprogram.entity';

export default {
  type: 'sqlite',
  database: 'sqlite',
  synchronize: true,
  entities: [Miniprogram],
  keepConnectionAlive: true, // for testing
} as TypeOrmModuleOptions;
