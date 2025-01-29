import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaClientService } from '../prisma-client/prisma-client.service';
import { Employee } from '@prisma/client';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaClientService,
    private jwtService: JwtService,
  ) {}

  // validate user credentials 
  async validateEmployee(email: string, password: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { email },
    });

    console.log("validate Employee:", employee);

    if (employee && bcrypt.compareSync(password, employee.password)) {
      console.log('employee exits');
      return employee;
    }
    console.log('Invalid credentials');
    return null;
  }

  // login
  async login(employee: Employee) {
    const payload = { email: employee.email, sub: employee.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  // Register method
  async register(email: string, password: string, name?: string) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return this.prisma.employee.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  }
}
