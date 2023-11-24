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


export class Category extends Model {

  override className = 'Category';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  @ArrayDecorator('Category')
  children: Category[] = [];

  icon : Media | null = null;
  get getIcon() {

    if(this.icon?.value) {
      return (this.icon?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.icon?.value;
    }

    return 'assets/icons/image_not_available.png';
  }
}
