import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @ApiProperty({
    description: 'Title of the bookmark',
    example: 'Some title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Link to the bookmark',
    example: 'https://example.com/example',
  })
  @IsString()
  @IsNotEmpty()
  link: string;

  @ApiProperty({
    description: 'Some description of the bookmark',
    example: 'Some description',
  })
  @IsString()
  @IsOptional()
  description?: string;
}
