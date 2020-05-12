import { Module } from "@nestjs/common";

import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { TypegooseModule } from "nestjs-typegoose";
import { CatModel } from "./cat.model";

@Module({
  imports: [TypegooseModule.forFeature([CatModel])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
