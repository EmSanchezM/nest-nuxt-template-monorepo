import { Controller, Get } from '@nestjs/common';

interface HealthCheckResponse {
  status: string;
  message: string;
}

@Controller()
export class HealthCheckController {
  @Get()
  async getHealthCheck(): Promise<HealthCheckResponse> {
    return {
        status: 'ok',
        message: 'I am alive'
    };
  }

  @Get('/health-check')
  async getHealthCheckApi(): Promise<HealthCheckResponse> {
    return {
      status: 'ok',
      message: 'I am alive',
    };
  }
}