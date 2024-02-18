import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Failure } from '../entities/Failure/Failure';
import { CreateFailureParams } from 'src/utils/types';

@Injectable()
export class FailureService {
  //injection de dépendance pour utiliser le repository Failure (repository = couche de l'ORM)
  constructor(
    @InjectRepository(Failure) private failureRepository: Repository<Failure>,
  ) {}
  findAllFailure() {
    return this.failureRepository.find();
  }

  createFailure(failureDetails: CreateFailureParams) {
    const newFailure = this.failureRepository.create(failureDetails);
    return this.failureRepository.save(failureDetails);
  }

  updateFailure(id: number, failureDetails: CreateFailureParams) {
    return this.failureRepository.update(id, failureDetails);
  }

  deleteFailure(id: number) {
    return this.failureRepository.delete(id);
  }
}
