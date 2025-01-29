import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClientService } from '../prisma-client/prisma-client.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // JWT token expiration
    }),
  ],
  providers: [AuthService, PrismaClientService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
