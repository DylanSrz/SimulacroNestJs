import { Module } from '@nestjs/common';
import { CotizacionesService } from './cotizaciones.service.js';
import { CotizacionesController } from './cotizaciones.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizaciones } from './entities/cotizacione.entity.js';
import { AuthService } from '../auth/auth.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizaciones])],
  controllers: [CotizacionesController],
  providers: [
    CotizacionesService,
    AuthService
  ]
})
export class CotizacionesModule {}
