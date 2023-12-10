import { City } from './City';
import { Country } from './Country';
import { Model } from './Model';

export class Province extends Model {

  override className = 'Province';
  id: null | number = null;
  name = "";
  slug = "";
  timezoneId = 0;
  countryId = 0;

  cities: City[] = [];
}
