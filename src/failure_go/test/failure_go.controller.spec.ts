import { Test, TestingModule } from '@nestjs/testing';
import { FailureGoController } from '../failure_go.controller';
import { FailureGoService } from '../failure_go.service';
import { Failure_GoDto } from '../dto/failure_go.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

const failureDto = new Failure_GoDto();
describe('FailureGoController', () => {
  let controller: FailureGoController;
  let service: FailureGoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailureGoController],
      providers: [
        {
          provide: FailureGoService,
          useValue: {
            createFailure_go: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FailureGoController>(FailureGoController);
    service = module.get<FailureGoService>(FailureGoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a failure_go', async () => {
    const expectedResult: Failure_GoDto = new Failure_GoDto();
    jest.spyOn(service, 'createFailure_go').mockResolvedValue(expectedResult);

    expect(await controller.create(failureDto)).toBe(expectedResult);
  });

  it('should find all failure_go', async () => {
    const expectedResult: Failure_GoDto[] = [new Failure_GoDto()];
    jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

    expect(await controller.findAll()).toBe(expectedResult);
  });

  it('should find one failure_go', async () => {
    const expectedResult: Failure_GoDto = new Failure_GoDto();
    const id = '1';
    jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

    expect(await controller.findOne(id)).toBe(expectedResult);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('should update a failure_go', async () => {
    const expectedResult: UpdateResult = {
      affected: 1,
      raw: {},
      generatedMaps: [],
    };
    const id = '1';
    jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

    expect(await controller.update(id, failureDto)).toBe(expectedResult);
    expect(service.update).toHaveBeenCalledWith(+id, failureDto);
  });

  it('should remove a failure_go', async () => {
    const expectedResult: DeleteResult = {
      affected: 1,
      raw: {},
    };
    const id = '1';
    jest.spyOn(service, 'remove').mockResolvedValue(expectedResult);

    expect(await controller.remove(id)).toBe(expectedResult);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
