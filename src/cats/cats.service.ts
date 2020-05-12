import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";

import { CatModel } from "./cat.model";

@Injectable()
export class CatsService {
  constructor(@InjectModel(CatModel) readonly catModel: ReturnModelType<typeof CatModel>) {}

  async create(createCatDto: { name: string }): Promise<CatModel> {
    return this.catModel.create(createCatDto);
  }

  async findAll(): Promise<CatModel[]> {
    return this.catModel.find().lean();
  }
}