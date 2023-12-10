import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';
import { ArrayDecorator } from '../decorator/arrayDecorator.dec';

export class RawCategory extends Model {

  override className = 'RawCategory';

  id!: number;
  name = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  @ArrayDecorator('RawCategory')
  children: RawCategory[] = [];

  icon : Media | null = null;
  get getIcon() {

    if(this.icon?.value) {
      return (this.icon?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.icon?.value;
    }

    return 'assets/icons/image_not_available.png';
  }
}
