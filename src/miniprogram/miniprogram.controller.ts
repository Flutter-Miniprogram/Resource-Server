import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { MiniprogramService } from './miniprogram.service';
// import { CreateMiniprogramDto } from './dto/create-miniprogram.dto';
// import { UpdateMiniprogramDto } from './dto/update-miniprogram.dto';

@Controller('miniprogram')
export class MiniprogramController {
  constructor(private readonly miniprogramService: MiniprogramService) {}

  // @Post()
  // create(@Body() createMiniprogramDto: CreateMiniprogramDto) {
  //   return this.miniprogramService.create(createMiniprogramDto);
  // }

  @Get()
  @ApiQuery({ name: 'name', required: false, description: '小程序名称' })
  findAll(@Query('name') name?: string) {
    return this.miniprogramService.findAll({ name });
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.miniprogramService.findOne(uuid);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMiniprogramDto: UpdateMiniprogramDto) {
  //   return this.miniprogramService.update(+id, updateMiniprogramDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.miniprogramService.remove(+id);
  // }
}
