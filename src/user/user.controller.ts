import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/index';
import { JwtGuard } from '../auth/guard/index';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@ApiTags('Users')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  @ApiOperation({ summary: 'Get user information' })
  @ApiOkResponse({
    description: 'Users personal information',
    type: EditUserDto,
  })
  @ApiBadRequestResponse({
    description: 'Cretentials are not correct',
  })
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch('me')
  @ApiOperation({ summary: 'Update user iformation' })
  @ApiCreatedResponse({
    description: 'Users personal information',
    type: EditUserDto,
  })
  @ApiBadRequestResponse({
    description: 'Cretentials are not correct',
  })
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
