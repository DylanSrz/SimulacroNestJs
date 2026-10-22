import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module.js';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config.js';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [appConfig]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: ( typeConfig: ConfigService ) => ({
                ...typeConfig.getOrThrow('database')
            })
        
        }),
        CotizacionesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
