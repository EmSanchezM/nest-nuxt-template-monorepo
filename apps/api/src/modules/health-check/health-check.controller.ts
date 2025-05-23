import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get()
  getHealthCheck() {
    return {
        status: 'ok',
        message: 'I am alive'
    };
  }

  @Get('health-check')
  getHealthCheckApi() {
    return {
      status: 'ok',
      message: 'I am alive',
    };
  }
}