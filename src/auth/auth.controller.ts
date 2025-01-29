import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, } from './dto/login.dto';
import {  RegisterDto } from './dto/register.dto';

// class LoginDto {
//   email: string;
//   password: string;
// }

// class RegisterDto {
//   email: string;
//   password: string;
//   name?: string;
// }

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const employee = await this.authService.validateEmployee(
      loginDto.email,
      loginDto.password,
    );

    if (!employee) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

  const loginResponse = await this.authService.login(employee);

  return {
    message: 'Login successful',
    employee: {
      id: employee.id,
      name: employee.name,
      email: employee.email,
    },
    ...loginResponse, 
  };

  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const existingEmployee = await this.authService.validateEmployee(
      registerDto.email,
      registerDto.password,
    );

    console.log("existingEmployee",existingEmployee);
    if (existingEmployee) {
      throw new HttpException('Email already in use', HttpStatus.BAD_REQUEST);
    }

    const employee = await this.authService.register(
      registerDto.email,
      registerDto.password,
      registerDto.name,
    );
    const loginResponse = await this.authService.login(employee);
    return {
      message: 'Registration successful',
      employee: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
      },
      ...loginResponse, 
    };

    // return this.authService.login(employee);
  }
}
