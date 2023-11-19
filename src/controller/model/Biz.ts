import { environment } from 'src/environments/environment';
import { Category } from './Category';
import { Deal } from './Deal';
import { Model } from './Model';
import { Media } from './Media';
import { Address } from './Address';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}

export class Biz extends Model {

  override className = 'Biz';

  id!: number;
  businessName = '';
  description = '';
  mobile = '';
  website = '';
  googleRating = '';
  about = '';
  tags = '';
  isActive = true;
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  categoryId = null;
  category = new Category();

  @ArrayDecorator('Deal')
  deals: Deal[] = [];

  address: Address | null = new Address;

  logoImage: Media | null = null;
  coverImage: Media | null = null;

  get getLogoImage() {
    if(this.logoImage?.value) {
      return (this.logoImage?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.logoImage?.value;
    }

    return 'assets/icons/image_not_available.png';
  }

  get getCoverImage() {
    if(this.coverImage?.value) {
      return (this.coverImage?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.coverImage?.value;
    }

    return 'assets/icons/image_not_available.png';
  }

  get markerIcon() {
    if(this.category.icon) {
      return this.category.getIcon;
    }

    return null;
  }
}
