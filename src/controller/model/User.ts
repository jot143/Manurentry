import { Model } from './Model';
import { Profile } from './Profile';

export class User extends Model {
  override className = 'User';

  id: null | number = null;
  role = 'user';

  profile: Profile = new Profile();

  get getId() {
    return this.id;
  }
}
