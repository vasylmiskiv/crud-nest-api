import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @ApiProperty({
    description: 'User email',
    example: 'example@example.com',
  })
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Matthew',
  })
  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Husky',
  })
  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName?: string;
}
