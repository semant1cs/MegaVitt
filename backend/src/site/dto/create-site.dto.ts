import { ApiProperty } from '@nestjs/swagger';

export class CreateSiteDto {
  @ApiProperty({ example: 'Мой сайт', description: 'Название сайта' })
  readonly name: string;

  @ApiProperty({ example: 'https://my-site.com', description: 'Ссылка на сайт' })
  readonly link: string;

  @ApiProperty({example: '<div><p>Hello World</p></div>', description: 'Строки HTML' })
  readonly html: string;
}
