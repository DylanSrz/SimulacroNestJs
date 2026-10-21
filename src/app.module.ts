import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module.js';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: 'admin123',
                database: 'simulacroNestJs',
                autoLoadEntities: true,
            })
        }),
        CotizacionesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
