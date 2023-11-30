import { FeatureOption } from './FeatureOption';
import { Model } from './Model';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}


export class Feature extends Model {

  override className = 'Feature';

  name = "";

  @ArrayDecorator('FeatureOption')
  options: FeatureOption[] = [];
}
