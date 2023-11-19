import { Model } from './Model';
import { Deal } from './Deal';

export class Redeem extends Model {

  override className = 'Redeem';

  id: number | null = null;

  dealId: number = 0;
  deal: Deal = new Deal;

  profileId: number = 0;
  profile: any;
  promoCode: string = "";
  status: "showed" | "redeemed" | "not-redeemed" = 'showed';

  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  amountSaved: number = 0;
  reason: string = "";
}
