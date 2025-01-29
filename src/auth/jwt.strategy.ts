import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientService } from '../prisma-client/prisma-client.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaClientService,
    private jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: (ExtractJwt as any).fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey', // Replace with your secret key
    });
  }

  async validate(payload: any) {
    const { sub: employeeId } = payload;
    try {
      const employee = await this.prisma.employee.findUnique({
        where: { id: employeeId },
      });
      return employee;
    } catch (error) {
      // Handle the error here
      console.error('Error validating payload:', error);
      throw new Error('Invalid payload');
    }
  }
}
