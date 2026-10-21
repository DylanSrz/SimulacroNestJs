import { Module } from '@nestjs/common';
import { CotizacionesService } from './cotizaciones.service.js';
import { CotizacionesController } from './cotizaciones.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizacione } from './entities/cotizacione.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizacione])],
  controllers: [CotizacionesController],
  providers: [CotizacionesService],
})
export class CotizacionesModule {}
