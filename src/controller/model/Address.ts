import { Model } from './Model';

export class Address extends Model {

  override className = 'Address';

  id!: number;
  address = '';
  city = '';
  province = '';
  country = '';
  postalCode = 11111;
  latitude = 0.0000;
  longitude = 0.0000
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;
}
