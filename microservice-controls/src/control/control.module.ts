import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CONTROL} from 'src/common/models/models';
import { ControlSchema } from './schema/control.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CONTROL.name,
        useFactory: () => {
          return ControlSchema;
        },
      },
    ]),
  ],
  controllers: [ControlController],
  providers: [ControlService],
})
export class ControlModule {}
