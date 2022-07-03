import { Test, TestingModule } from '@nestjs/testing';
import { MaterialService } from './material';

describe('MaterialService', () => {
  let provider: MaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialService],
    }).compile();

    provider = module.get<MaterialService>(MaterialService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
