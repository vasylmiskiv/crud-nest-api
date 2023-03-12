import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger/dist';
import { AuthService } from './auth.service';
import { AuthDto, signTokenDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({
    description: 'User has been successfully created',
    type: signTokenDto,
  })
  @ApiBadRequestResponse({
    description: 'Cretentials are not correct',
  })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOkResponse({
    description: 'User has been successfully signed in',
    type: signTokenDto,
  })
  @ApiBadRequestResponse({
    description: 'Cretentials are not correct',
  })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
