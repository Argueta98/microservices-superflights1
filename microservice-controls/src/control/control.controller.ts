import { Controller } from '@nestjs/common';
import { ControlService } from './control.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ControlMSG } from 'src/common/constants';
import { Control } from './model/control.model';

@Controller() ///Este controlador es el avion, nos permite crear un nuevo avion al repo
export class ControlController {
    constructor(private readonly controlService: ControlService) {}

@MessagePattern(ControlMSG.CREATE)
  createControl(@Payload() control: Control) {
    return this.controlService.createControl(control);
  }

  @MessagePattern(ControlMSG.FIND_ALL)
  getAllControls() {
    return this.controlService.getAllControls();
  }

  @MessagePattern(ControlMSG.FIND_ONE)
  getControl(@Payload() id: string) {
    return this.controlService.getControl(id);
  }

  @MessagePattern(ControlMSG.UPDATE)
  updateControl(@Payload() payload: any) {
    return this.controlService.updateControl(payload.id, payload.control);
  }

  @MessagePattern(ControlMSG.DELETE)
  deleteControl(@Payload() id: string) {
    return this.controlService.deleteControl(id);
  }

}
