import { Model } from './Model';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}


export class FeatureOption extends Model {

  override className = 'FeatureOption';

  id!: number;

  option = "";
}
