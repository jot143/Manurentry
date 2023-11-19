import { Media } from './Media';
import { Model } from './Model';
import { environment } from 'src/environments/environment';

export class Profile extends Model {
  override className = 'Profile';

  id: null | number = null;

  firstName = '';
  lastName = '';
  mobile = '';
  email = '';
  gender = '';
  dob = '';

  profilePic = {
    value: ''
  };
  // profilePic: Media = new Media();

  get getProfilePic() {
    if (!this.profilePic?.value) {
      return '/assets/icons/default-marker.png';
    }

    return environment.ASSETS_URL + '/' + this.profilePic?.value;
  }
}
