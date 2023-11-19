import { environment } from 'src/environments/environment';
import { Media } from './Media';
import { Model } from './Model';
import { Biz } from './Biz';

export class Deal extends Model {

  override className = 'Deal';

  id!: number;
  name = "";
  offer = "";
  slug = "";
  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  discountType: 'flat' | 'percentage' = 'percentage';

  description = "";
  price = 0;
  promoCode = "";
  image : Media | null = null;

  business = new Biz();

  get getImage() {

    if(this.image?.value) {
      return (this.image?.source == 'local' ? environment.ASSETS_URL + '/' : '') + this.image?.value;
    }

    return 'assets/icons/image_not_available.png';
  }

  conditions: string[] = [];
}
