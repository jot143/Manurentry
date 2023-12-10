import { ArrayDecorator } from '../decorator/arrayDecorator.dec';
import { FeatureOption } from './FeatureOption';
import { Model } from './Model';


export class Feature extends Model {

  override className = 'Feature';

  name = "";

  @ArrayDecorator('FeatureOption')
  options: FeatureOption[] = [];
}
