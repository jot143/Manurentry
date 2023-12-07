import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

import { Component } from "@angular/core";
import { Feature } from "src/controller/model/Feature";
import { FeatureService } from "src/services/item/feature.service";
import { ItemService } from "src/services/item/item.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-items-new",
  templateUrl: "./items-new.component.html",
  styleUrls: ["./items-new.component.css"],
})
export class ItemsNewComponent {
  breadcrumb = {
    mainlabel: "New Items",
    links: [
      {
        name: "Item Management",
        isLink: true,
        link: "/home/item-management",
      },
      {
        name: "New Items",
        isLink: false,
      },
    ],
  };

  variantForm = () =>
    new FormGroup({
      sku: new FormControl("", Validators.required),

      dimensionLength: new FormControl(""),
      dimensionWidth: new FormControl(""),
      dimensionHeight: new FormControl(""),
      dimensionUnit: new FormControl("cm"),
      weight: new FormControl(""),
      weightUnit: new FormControl("cm"),
      //
      hsn: new FormControl(""),
      ean: new FormControl(""),
      mpn: new FormControl(""),
      isbn: new FormControl(""),
      ups: new FormControl(""),
      //
      salePrice: new FormControl("0"),
      purchasePrice: new FormControl("0"),
      features: new FormArray([]),
    });

  featureForm = (data = { feature: "", option: "" }) =>
    new FormGroup({
      feature: new FormControl(data.feature, Validators.required),
      option: new FormControl(data.option, Validators.required),
    });

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    unit: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    variants: new FormArray([this.variantForm()]),
    features: new FormArray([]),
  });

  get variants() {
    return this.form.controls["variants"] as FormArray;
  }

  get featuresFormArray() {
    return this.form.controls["features"] as FormArray;
  }

  features: Feature[] = [];
  featuresSubscription = new Subscription();

  constructor(
    private itemService: ItemService,
    public featureService: FeatureService,
    private toastr: ToastrService,
    private navCtrl: Router
  ) {}

  ngOnInit() {
    this.form.reset();
    this.subscribeFeatures();
    this.featureService.getAll();
  }

  ngOnDestroy() {
    this.featuresSubscription.unsubscribe();
  }

  subscribeFeatures = () => {
    this.featuresSubscription = this.featureService.features.subscribe(
      (features) => {
        this.filterFeatures();
      }
    );
  };

  filterFeatures() {
    this.features =
      this.featureService.features.value.filter((item) => {
        return (
          this.featuresFormArray.value.filter(
            (form) => form?.feature?.name == item.name
          ).length == 0
        );
      }) ?? [];
  }

  deleteFeature(i) {
    this.form.controls.features.removeAt(i);
    this.onFeatureOptionChange();
  }

  featureOptions(form) {
    if (form.controls.feature.value) {
      return form.controls.feature.value.options;
    }
    return [];
  }

  addFeature() {
    this.featuresFormArray.push(
      new FormGroup({
        feature: new FormControl("", Validators.required),
        options: new FormControl([], Validators.required),
      })
    );
  }

  onFeatureChange(e) {
    this.filterFeatures();
  }

  generateVariation(rows) {
    let previous = [];

    if (rows.length == 1) {
      const currentRow = rows[0];
      for (let currentOption of currentRow) {
        previous.push([
            {
              feature: currentOption.feature,
              option: currentOption.option,
            },
          ]);
      }
    } else {
      for (let x = 0; x < rows.length - 1; x++) {
        const variants = [];
        if (x == 0) {
          const currentRow = rows[x];
          const nextRow = rows[x + 1];
          for (let currentOption of currentRow) {
            for (let nextOption of nextRow) {
              variants.push([
                {
                  feature: currentOption.feature,
                  option: currentOption.option,
                },
                {
                  feature: nextOption.feature,
                  option: nextOption.option,
                },
              ]);
            }
          }
        } else {
          const currentRow = previous;
          const nextRow = rows[x + 1];
          for (let currentOption of currentRow) {
            for (let nextOption of nextRow) {
              variants.push([
                ...currentOption,
                {
                  feature: nextOption.feature,
                  option: nextOption.option,
                },
              ]);
            }
          }
        }

        previous = variants;
      }
    }

    return previous;
  }

  onFeatureOptionChange() {
    let featureRows = [];
    for (let formArray of this.featuresFormArray.value) {
      const row = [];
      for (let option of formArray.options) {
        row.push({
          feature: formArray.feature.name,
          option: option.option,
        });
      }
      featureRows.push(row);
    }

    const variants = this.generateVariation(featureRows);
    this.populateVariants(variants);
  }

  populateVariants(variants) {

    for (let i = 0; i < variants.length; i++) {
      if (!this.variants.controls[i]) {
        this.form.controls.variants.push(this.variantForm());
      }
      
      this.form.controls.variants.controls[i].controls.features.clear();

      for(let feature of variants[i]) {
        this.form.controls.variants.controls[i].controls.features.push(this.featureForm({
          feature: feature.feature,
          option: feature.option,
        }));
      }
    }

    while(this.form.controls.variants.length > variants.length) {
      this.form.controls.variants.removeAt(this.form.controls.variants.length  - 1);
    }
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const success = (value) => {
      if (value.status == "OK") {
        this.toastr.success(value.message);
        this.navCtrl.navigateByUrl('/home/item-management');
      }
    };

    const data = this.form.value;
    delete data.features;
    this.itemService.addItem(this.form.value, success);
  }
}
