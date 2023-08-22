import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IControl } from 'src/common/interfaces/control.interface';
import { CONTROL } from 'src/common/models/models';
import { Control } from './model/control.model';

@Injectable()
export class ControlService {
    constructor(
        @InjectModel(CONTROL.name) private readonly model: Model<IControl>,
      ) {}

      async createControl(control: Control): Promise<IControl> {
        const newControl = new this.model(control);
        return await newControl.save();
      }

      async getAllControls(): Promise<IControl[]> {
        return await this.model.find();
      }

      async getControl(id: string): Promise<IControl> {
        return await this.model.findById(id);
      }

      async updateControl(id: string, control: Control): Promise<IControl> {
        return await this.model.findByIdAndUpdate(id, control, { new: true });
      }

      async deleteControl(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Deleted' };
      }

}
