import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';
import { RawCategory } from './RawCategory';
import { RawItemVariants } from './RawItemVariants';
import { ArrayDecorator } from '../decorator/arrayDecorator.dec';

export class RawItem extends Model {

  override className = 'RawItem';

  id!: number;
  name = "";
  slug = "";
  unit = "";

  category = new RawCategory();

  @ArrayDecorator('RawItemVariants')
  itemVariants: RawItemVariants[] = [];

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
