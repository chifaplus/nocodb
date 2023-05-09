import { Test } from '@nestjs/testing';
import { AppHooksListenerService } from './app-hooks-listener.service';
import type { TestingModule } from '@nestjs/testing';

describe('HooksListenerService', () => {
  let service: AppHooksListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppHooksListenerService],
    }).compile();

    service = module.get<AppHooksListenerService>(AppHooksListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
