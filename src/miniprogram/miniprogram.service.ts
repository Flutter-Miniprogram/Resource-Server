import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
// import { CreateMiniprogramDto } from './dto/create-miniprogram.dto';
// import { UpdateMiniprogramDto } from './dto/update-miniprogram.dto';
import { Miniprogram } from './entities/miniprogram.entity';

@Injectable()
export class MiniprogramService {
  private readonly logger = new Logger(MiniprogramService.name);
  constructor(
    @InjectRepository(Miniprogram)
    private readonly miniprogramRepo: Repository<Miniprogram>,
  ) {}

  // create(createMiniprogramDto: CreateMiniprogramDto) {
  //   return 'This action adds a new miniprogram';
  // }

  findAll(dto: { name?: string }) {
    const { name } = dto;
    this.logger.verbose('name', name);
    const select: (keyof Miniprogram)[] = ['uuid', 'name', 'logoUrl'];
    if (name) {
      return this.miniprogramRepo.find({
        select,
        where: { name: Like(`%${name}%`) },
      });
    }
    return this.miniprogramRepo.find({ select });
  }

  async findOne(uuid: string) {
    const select: (keyof Miniprogram)[] = ['uuid', 'name', 'logoUrl'];
    const miniprogram = await this.miniprogramRepo.findOne({
      select,
      where: { uuid },
    });
    if (!miniprogram) {
      throw new NotFoundException();
    }
    return miniprogram;
  }

  // update(id: number, updateMiniprogramDto: UpdateMiniprogramDto) {
  //   return `This action updates a #${id} miniprogram`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} miniprogram`;
  // }
}
