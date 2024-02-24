import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/Login.dto';
import { User } from '../entities/User';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async findByLogin(loginDto: LoginDto) {
    const { login } = loginDto;
    const user = await this.userRepository.findOne({ where: { login } });

    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.idUser, username: user.firstName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
