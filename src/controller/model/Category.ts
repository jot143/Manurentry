import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';

export class Category extends Model {

  override className = 'Category';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  children: Category[];

  icon : Media | null = null;
  get getIcon() {

    if(this.icon?.value) {
      return (this.icon?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.icon?.value;
    }

    return 'assets/icons/image_not_available.png';
  }
}
