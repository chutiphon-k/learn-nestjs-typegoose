import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/learn-nestjs-typegoose', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoCreate: false,
      autoIndex: false,
    }),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
