import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AuthDto {
  @ApiProperty({
    description: 'User email',
    example: 'example@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'password12345',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
