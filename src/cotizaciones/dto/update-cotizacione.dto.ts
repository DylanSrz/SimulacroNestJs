import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizacionesDto } from './create-cotizacione.dto.js';

export class UpdateCotizacionesDto extends PartialType(CreateCotizacionesDto) {}
