import { Model } from './Model';
import { ItemVariantFeature } from './ItemVariantFeature';

function ArrayDecorator(className: string) {
  return function(target: any, key: any) {

    if(!target.constructor.prototype['_array_variable_type']) {
      target.constructor.prototype['_array_variable_type'] = {};
    }
    target.constructor.prototype['_array_variable_type'][key] = className;
  }
}


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
