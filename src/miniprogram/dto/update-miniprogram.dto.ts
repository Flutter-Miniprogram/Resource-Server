import { PartialType } from '@nestjs/mapped-types';
import { CreateMiniprogramDto } from './create-miniprogram.dto';

export class UpdateMiniprogramDto extends PartialType(CreateMiniprogramDto) {}
