import { Controller, Get, Post, Body } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatModel } from "./cat.model";

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll()
  }

  @Post()
  create(@Body() body: any): Promise<CatModel> {
    return this.catsService.create(body);
  }
}
