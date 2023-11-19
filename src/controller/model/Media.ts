import { Model } from './Model';

export class Media extends Model {

  override className = 'Image';

  id!: number;
  source: 'local' | 'url' = 'local';
  value = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;
}
