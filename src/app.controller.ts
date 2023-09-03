import { Controller, Get } from '@nestjs/common';

@Controller('/app')
class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'Hi there!';
  }
  @Get('/bye')
  getByeThere() {
    return 'Bye there!';
  }
}

export default AppController;
