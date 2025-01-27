import { PrismaClient } from "@prisma/client"
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common"

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit, OnModuleDestroy
{
    async onModuleInit() {
        await this.$connect()
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }
    enableShutdownHooks(app: INestApplication) {
      process.on('SIGINT', () => {
        (async () => {
          await app.close();
        })();
      })
    }
}