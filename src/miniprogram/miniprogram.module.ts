import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiniprogramService } from './miniprogram.service';
import { MiniprogramController } from './miniprogram.controller';
import { Miniprogram } from './entities/miniprogram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Miniprogram])],
  controllers: [MiniprogramController],
  providers: [MiniprogramService],
  exports: [MiniprogramService],
})
export class MiniprogramModule {}
