import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module.js';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:
        }),
        CotizacionesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
