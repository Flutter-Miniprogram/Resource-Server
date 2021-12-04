import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { MiniprogramController } from './miniprogram.controller';
import { AppModule } from '../app.module';

describe('MiniprogramController', () => {
  let controller: MiniprogramController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<MiniprogramController>(MiniprogramController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('list miniprogram should be ok', () => {
    return supertest(app.getHttpServer())
      .get('/miniprogram')
      .expect(HttpStatus.OK)
      .expect(({ body }: supertest.Response) => {
        expect(body).toEqual(expect.arrayContaining([]));
      });
  });

  it('get miniprogram resource should be 404', () => {
    return supertest(app.getHttpServer())
      .get('/miniprogram/404/resource/404')
      .expect(HttpStatus.NOT_FOUND)
      .expect(({ body }: supertest.Response) => {
        expect(body).toEqual(
          expect.objectContaining({
            message: 'path does not exist',
          }),
        );
      });
  });
});
