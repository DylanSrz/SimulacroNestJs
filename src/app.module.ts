import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module.js';

@Module({
  imports: [CotizacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
