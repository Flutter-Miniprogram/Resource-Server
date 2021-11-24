import { Test, TestingModule } from '@nestjs/testing';
import { MiniprogramController } from './miniprogram.controller';
import { MiniprogramService } from './miniprogram.service';

describe('MiniprogramController', () => {
  let controller: MiniprogramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiniprogramController],
      providers: [MiniprogramService],
    }).compile();

    controller = module.get<MiniprogramController>(MiniprogramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
