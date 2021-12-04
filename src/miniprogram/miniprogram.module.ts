import { Module } from '@nestjs/common';
import { MiniprogramService } from './miniprogram.service';
import { MiniprogramController } from './miniprogram.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Miniprogram } from './entities/miniprogram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Miniprogram])],
  controllers: [MiniprogramController],
  providers: [MiniprogramService],
})
export class MiniprogramModule {}
