import { prop, modelOptions, index } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

@index({ name: 1 }, { unique: false })
@modelOptions({
  schemaOptions: {
    collection: 'cats',
    timestamps: true
  },
  options: {
    runSyncIndexes: true
  }
})
export class CatModel {
  @prop({ required: true })
  name: string;
}
export interface CatModel extends Base, TimeStamps {}
