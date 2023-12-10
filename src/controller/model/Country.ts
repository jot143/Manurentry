import { ArrayDecorator } from 'src/controller/decorator/arrayDecorator.dec';
import { Model } from './Model';
import { City } from './City';
import { Province } from './Province';

export class Country extends Model {

  override className = 'Country';
  id: null | number = null;
  name = "";
  slug = "";

  @ArrayDecorator('Province')
  provinces: Province[] = [];
}
