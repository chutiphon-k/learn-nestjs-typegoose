import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";

import { CatModel } from "./cat.model";

@Injectable()
export class CatsService {
  private readonly catRepository: ReturnModelType<typeof CatModel>;

  constructor(@InjectModel(CatModel) catRepository: ReturnModelType<typeof CatModel>) {
    this.catRepository = catRepository;
  }

  async create(createCatDto: { name: string }): Promise<CatModel> {
    const cat: CatModel = await this.catRepository.create(createCatDto);
    return cat;
  }

  async findAll() {
    const cat: CatModel = await this.catRepository.findOne().lean();
    return cat;
  }
}