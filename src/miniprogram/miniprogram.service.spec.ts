import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { MiniprogramService } from './miniprogram.service';

describe('MiniprogramService', () => {
  let service: MiniprogramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<MiniprogramService>(MiniprogramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
