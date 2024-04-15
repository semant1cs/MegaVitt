import { ApiProperty } from '@nestjs/swagger';

export class CreateSiteDto {
  @ApiProperty({ example: 'Мой сайт', description: 'Название сайта' })
  readonly name: string;

  @ApiProperty({ example: 'Мой сайт', description: 'Название сайта' })
  readonly owner_id: string;

  readonly event_id: string;

  readonly site_id: string;
}
