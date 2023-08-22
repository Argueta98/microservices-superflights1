import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class Control {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly modelo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly matricula: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly aerolinea: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly capacidad: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly estado: Boolean;
}