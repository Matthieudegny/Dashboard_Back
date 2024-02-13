import { PartialType } from '@nestjs/mapped-types';
import { CreateSubOrderDto } from './create-sub_order.dto';

export class UpdateSubOrderDto extends PartialType(CreateSubOrderDto) {}
