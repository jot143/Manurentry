import { Feature } from './Feature';
import { Model } from './Model';

export class ItemVariantFeature extends Model {

  override className = 'ItemVariantFeature';

  id!: number;

  feature: Feature = new Feature;

  option: string = "";
}
