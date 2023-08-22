import { Body, Controller, Get, Param, Post,Put, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { Control } from './models/control.model';
import { IControl } from 'src/common/interfaces/control.interface';
import { ControlMSG, FlightMSG } from 'src/common/constants';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';

@ApiTags('Control')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/control')
export class ControlController {
    constructor(private readonly clienProxy: ClientProxySuperFlights) {}
  private _clientProxyControls = this.clienProxy.clientProxyControls();

  @Post()
  create(@Body() control: Control): Observable<IControl> {
    return this._clientProxyControls.send(ControlMSG.CREATE, control);
  }

  @Get()
  findAll(): Observable<IControl[]> {
    return this._clientProxyControls.send(ControlMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IControl[]> {
    return this._clientProxyControls.send(ControlMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() control: Control): Observable<IControl> {
    return this._clientProxyControls.send(ControlMSG.UPDATE, { id, control });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyControls.send(ControlMSG.DELETE, id);
  }

}
