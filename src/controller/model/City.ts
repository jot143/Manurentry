import { Country } from './Country';
import { Model } from './Model';

export class City extends Model {

  override className = 'City';
  id: null | number = null;
  name = "";
  slug = "";
  timezoneId = 0;
  countryId = 0;
  provinceId = 0;
}
