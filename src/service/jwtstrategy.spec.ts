import { Test, TestingModule } from '@nestjs/testing';
import { Jwtstrategy } from './jwtstrategy';

describe('Jwtstrategy', () => {
  let provider: Jwtstrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Jwtstrategy],
    }).compile();

    provider = module.get<Jwtstrategy>(Jwtstrategy);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
