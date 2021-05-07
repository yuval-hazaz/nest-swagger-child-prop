import { Body, Controller, Get, Query ,Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiProperty,
  ApiQuery
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Request } from 'express';




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
  @ApiQuery({
    type:parentObject,
    style:"deepObject",
    explode:true
  })
  async getWithChildObjectInQuery(
    @Req() request: Request
    //@Query() query: parentObject
  ): Promise<string> {
    const query :parentObject = request.query
    console.log(query);
    
    return "";
  }

 



}
