import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}


export class Store extends Model {

  override className = 'Store';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;
  
}
