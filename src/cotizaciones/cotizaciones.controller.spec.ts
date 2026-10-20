import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesController } from './cotizaciones.controller.js';
import { CotizacionesService } from './cotizaciones.service.js';

describe('CotizacionesController', () => {
  let controller: CotizacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionesController],
      providers: [CotizacionesService],
    }).compile();

    controller = module.get<CotizacionesController>(CotizacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
