import { Injectable } from '@nestjs/common';
import { LoginDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  async login(data: LoginDTO) {
    
    return 'login';
  }

  async signup(data: SignUpDTO) {
    return 'signup';
  }
}
