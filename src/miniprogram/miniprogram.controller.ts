import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiniprogramService } from './miniprogram.service';
import { CreateMiniprogramDto } from './dto/create-miniprogram.dto';
import { UpdateMiniprogramDto } from './dto/update-miniprogram.dto';

@Controller('miniprogram')
export class MiniprogramController {
  constructor(private readonly miniprogramService: MiniprogramService) {}

  @Post()
  create(@Body() createMiniprogramDto: CreateMiniprogramDto) {
    return this.miniprogramService.create(createMiniprogramDto);
  }

  @Get()
  findAll() {
    return this.miniprogramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miniprogramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMiniprogramDto: UpdateMiniprogramDto) {
    return this.miniprogramService.update(+id, updateMiniprogramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.miniprogramService.remove(+id);
  }
}
