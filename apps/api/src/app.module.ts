import { Module } from '@nestjs/common';
import { HealthCheckController } from './modules/health-check/health-check.controller';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}