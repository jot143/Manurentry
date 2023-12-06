import { Feature } from './Feature';
import { Model } from './Model';

export class RawItemVariantFeature extends Model {

  override className = 'RawItemVariantFeature';

  id!: number;

  feature: Feature = new Feature;

  option: string = "";
}
