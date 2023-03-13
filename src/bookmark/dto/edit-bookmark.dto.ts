import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @ApiProperty({
    description: 'Title of the bookmark',
    example: 'Some title',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Link to the bookmark',
    example: 'https://example.com/example',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Some description of the bookmark',
    example: 'Some description',
  })
  @IsString()
  @IsOptional()
  link?: string;
}
