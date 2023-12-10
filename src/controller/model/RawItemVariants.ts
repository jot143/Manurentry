import { ArrayDecorator } from '../decorator/arrayDecorator.dec';
import { Model } from './Model';
import { RawItemVariantFeature } from './RawItemVariantFeature';

export class RawItemVariants extends Model {

  override className = 'RawItemVariants';

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

  @ArrayDecorator('RawItemVariantFeature')
  itemVariantsFeatures: RawItemVariantFeature[] = [];
}
