import { Model } from './Model';

export class Store extends Model {

  override className = 'Store';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;
  
}
