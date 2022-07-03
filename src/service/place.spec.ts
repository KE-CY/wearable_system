import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from './place';

describe('PlaceService', () => {
  let provider: PlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService],
    }).compile();

    provider = module.get<PlaceService>(PlaceService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
