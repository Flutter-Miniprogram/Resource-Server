import {
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Query,
  Response,
  StreamableFile,
} from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { MiniprogramService } from './miniprogram.service';
// import { CreateMiniprogramDto } from './dto/create-miniprogram.dto';
// import { UpdateMiniprogramDto } from './dto/update-miniprogram.dto';

@Controller('miniprogram')
export class MiniprogramController {
  private readonly logger = new Logger(MiniprogramController.name);

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

  @Get(':uuid/resource/:versionCode')
  @ApiParam({
    name: 'uuid',
    required: true,
    description: '小程序 UUID',
    example: 'example-uuid',
  })
  @ApiParam({
    name: 'versionCode',
    required: true,
    description: '小程序版本号',
    example: 'latest',
  })
  getMiniprogram(
    @Response({ passthrough: true }) res,
    @Param('uuid') uuid: string,
    @Param('versionCode') versionCode: string,
  ) {
    const path = join(
      process.cwd(),
      `miniprogram/${uuid}/${versionCode}/archive.zip`,
    );
    this.logger.verbose('path: ' + path);
    if (!existsSync(path)) {
      throw new NotFoundException();
    }
    const file = createReadStream(path);
    res.set({
      'Content-Disposition': `attachment; filename="${uuid}-${versionCode}.zip"`,
    });
    return new StreamableFile(file);
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
