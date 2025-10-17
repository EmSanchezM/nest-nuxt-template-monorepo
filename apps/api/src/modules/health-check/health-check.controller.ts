import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

export interface HealthCheckResponse {
  status: string;
  message: string;
}

@Controller('health')
export class HealthCheckController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getHealthCheck(): HealthCheckResponse {
    return {
      status: 'ok',
      message: 'I am alive'
    };
  }

  @Get('check')
  @HttpCode(HttpStatus.OK)
  getHealthCheckApi(): HealthCheckResponse {
    return {
      status: 'ok',
      message: 'Health check endpoint'
    };
  }
}