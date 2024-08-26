import { Dimension } from "../dimension/dimension";
import { DimensionlessMeasurement } from "../dimensionless-measurement/dimensionless-measurement";

export class Measurement<
  UnitType extends Dimension
> extends DimensionlessMeasurement<UnitType> {
  converted(otherUnit: UnitType): Measurement<UnitType> {
    if (this.unit.isEqual(otherUnit)) {
      return new Measurement(this.value, otherUnit);
    } else {
      const valueInTermsOfBase = this.unit.converter.baseUnitValue(this.value);

      if (otherUnit.isEqual(this.unit.baseUnit())) {
        return new Measurement(valueInTermsOfBase, otherUnit);
      } else {
        const otherValueFromTermsOfBase =
          otherUnit.converter.value(valueInTermsOfBase);

        return new Measurement(otherValueFromTermsOfBase, otherUnit);
      }
    }
  }

  convert(otherUnit: UnitType): void {
    const converted = this.converted(otherUnit);

    this.value = converted.value;
    this.unit = converted.unit;
  }
}