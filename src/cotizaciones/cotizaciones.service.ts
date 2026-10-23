import { Injectable } from '@nestjs/common';
import { CreateCotizacionesDto } from './dto/create-cotizacione.dto.js';
import { UpdateCotizacionesDto } from './dto/update-cotizacione.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Cotizaciones } from './entities/cotizacione.entity.js';
import { Repository } from 'typeorm';
import { CotizacionesStatus } from './enum/cotizaciones-status.enum.js';

@Injectable()
export class CotizacionesService {

    constructor(
        @InjectRepository(Cotizaciones)
        private readonly cotizacioneRepository: Repository<Cotizaciones>
    ) {}

    async create(createCotizacioneDto: CreateCotizacionesDto): Promise<Cotizaciones>{
        const cotizacion = this.cotizacioneRepository.create({
            ...createCotizacioneDto,
            status: CotizacionesStatus.BORRADOR //RN-01 toda cotizacion inicial sera "BORRADOR"
        })
        return this.cotizacioneRepository.save(cotizacion);
    }

    findAll() {
        return `This action returns all cotizaciones`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cotizacione`;
    }

    update(id: number, updateCotizacioneDto: UpdateCotizacionesDto) {
        return `This action updates a #${id} cotizacione`;
    }

    remove(id: number) {
    return `This action removes a #${id} cotizacione`;
    }
}