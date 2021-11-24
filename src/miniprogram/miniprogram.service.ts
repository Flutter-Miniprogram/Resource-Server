import { Injectable } from '@nestjs/common';
import { CreateMiniprogramDto } from './dto/create-miniprogram.dto';
import { UpdateMiniprogramDto } from './dto/update-miniprogram.dto';

@Injectable()
export class MiniprogramService {
  create(createMiniprogramDto: CreateMiniprogramDto) {
    return 'This action adds a new miniprogram';
  }

  findAll() {
    return `This action returns all miniprogram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} miniprogram`;
  }

  update(id: number, updateMiniprogramDto: UpdateMiniprogramDto) {
    return `This action updates a #${id} miniprogram`;
  }

  remove(id: number) {
    return `This action removes a #${id} miniprogram`;
  }
}
