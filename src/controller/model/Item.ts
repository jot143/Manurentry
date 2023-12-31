import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';
import { Category } from './Category';
import { ItemVariants } from './ItemVariants';
import { ArrayDecorator } from '../decorator/arrayDecorator.dec';

export class Item extends Model {

  override className = 'Item';

  id!: number;
  name = "";
  slug = "";
  unit = "";

  category = new Category();

  @ArrayDecorator('ItemVariants')
  itemVariants: ItemVariants[] = [];

  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  icon : Media | null = null;

  get getIcon() {

    if(this.icon?.value) {
      return (this.icon?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.icon?.value;
    }

    return 'assets/icons/image_not_available.png';
  }
}
