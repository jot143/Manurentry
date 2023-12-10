import { Model } from './Model';

export class Warehouse extends Model {

  override className = 'Warehouse';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;
  
}
