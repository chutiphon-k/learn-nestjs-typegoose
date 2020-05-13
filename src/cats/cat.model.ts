import { prop, modelOptions, index } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

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
export class CatModel extends Base {
  @prop({ required: true })
  name: string;

  @prop({ default: Date.now })
  createdAt: Date;

  @prop({ default: Date.now })
  updatedAt: Date;
}
