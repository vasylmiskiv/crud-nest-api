import { ApiProperty } from '@nestjs/swagger';

export class signTokenDto {
  @ApiProperty({
    description: 'Your access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE1MywiZW1haWwiOiJleGFtcGxlMTFAZ21haWwuY29tIiwiaWF0IjoxNjc4NjMzMjA0LCJleHAiOjE2Nzg3MTk2MDR9.OBl2GI0HVNVeP900zuW2VGpzj3JVLg0a2s-P14qHHLg',
  })
  access_token: string;
}
