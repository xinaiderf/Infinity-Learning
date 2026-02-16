import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDTO) {
    console.log({ body });

    return await this.authService.login(body);
  }
  
  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    console.log({ body });

    return await this.authService.signup(body);
    
  }
}
