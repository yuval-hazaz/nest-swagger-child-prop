import { Body, Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiProperty
} from '@nestjs/swagger';
import { CatsService } from './cats.service';



class childObject {
  @ApiProperty({
    required: true,
    type: String,
  })
  requiredInnerProp!: string;
}

class parentObject {

  @ApiProperty({
    required: false
  })
  anotherOptionProp?: string;

  @ApiProperty({
    required: false,
    type: childObject,
  })
  optionalChildProp?: childObject;
}



@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}



  @Get("/action")
  async getWithChildObjectInQuery(
    @Query() query: parentObject
  ): Promise<string> {
    return "";
  }

 



}
