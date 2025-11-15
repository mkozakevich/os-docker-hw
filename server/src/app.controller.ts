import { Controller, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  @Post('/create')
  createFile() {
    const folder = '/app/data';
    const currentDate = new Date();
    const fileName = `${currentDate.toISOString()}.txt`;
    const filePath = path.join(folder, fileName);

    fs.writeFileSync(filePath, '');

    return { fileName };
  }
}
