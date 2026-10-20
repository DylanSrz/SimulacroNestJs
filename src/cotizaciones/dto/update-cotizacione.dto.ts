import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizacioneDto } from './create-cotizacione.dto.js';

export class UpdateCotizacioneDto extends PartialType(CreateCotizacioneDto) {}
