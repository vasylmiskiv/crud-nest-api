import { Controller, Get, UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return req.user;
  }
}
