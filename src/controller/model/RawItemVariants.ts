import { Model } from './Model';
import { RawItemVariantFeature } from './RawItemVariantFeature';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}


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
