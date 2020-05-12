import { prop, modelOptions, index } from '@typegoose/typegoose';

@index({ name: 1 })
@modelOptions({ schemaOptions: { collection: 'cats' } })
export class CatModel {
  @prop({ required: true })
  name: string;
}
