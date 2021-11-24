import { Module } from '@nestjs/common';
import { MiniprogramService } from './miniprogram.service';
import { MiniprogramController } from './miniprogram.controller';

@Module({
  controllers: [MiniprogramController],
  providers: [MiniprogramService]
})
export class MiniprogramModule {}
