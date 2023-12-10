import { Model } from './Model';
import { ItemVariantFeature } from './ItemVariantFeature';
import { ArrayDecorator } from '../decorator/arrayDecorator.dec';

export class ItemVariants extends Model {

  override className = 'ItemVariants';

  id!: number;

  sku = "";

  dimensionLength = "";
  dimensionWidth = "";
  dimensionHeight = "";
  dimensionUnit = "";

  weight = "";
  weightUnit = "";


  ean = "";
  hsn = "";
  mpn = "";
  isbn = "";
  ups = "";

  salePrice = 0;
  purchasePrice = 0;

  createdAt!: string;
  updatedAt!: string;
  deletedAt!: string;

  @ArrayDecorator('ItemVariantFeature')
  itemVariantsFeatures: ItemVariantFeature[] = [];
}
