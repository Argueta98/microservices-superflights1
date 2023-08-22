import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ControlController } from './control.controller';
import { ControlService } from './control.service';

@Module({
    imports: [ProxyModule],
    controllers: [ControlController],
  providers: [ControlService],
})
export class ControlModule {}
