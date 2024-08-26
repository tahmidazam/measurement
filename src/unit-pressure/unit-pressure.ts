import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitPressure extends Dimension {
  static UNIT_PRESSURE_SYMBOL = {
    newtonsPerMetersSquared: "N/m²",
    gigapascals: "GPa",
    megapascals: "MPa",
    kilopascals: "kPa",
    hectopascals: "hPa",
    inchesOfMercury: "inHg",
    bars: "bar",
    millibars: "mbar",
    millimetersOfMercury: "mmHg",
    poundsForcePerSquareInch: "psi",
  } as const;

  static UNIT_PRESSURE_COEFFICIENT = {
    newtonsPerMetersSquared: 1.0,
    gigapascals: 1e9,
    megapascals: 1e6,
    kilopascals: 1e3,
    hectopascals: 1e2,
    inchesOfMercury: 3386.39,
    bars: 1e5,
    millibars: 1e2,
    millimetersOfMercury: 133.322,
    poundsForcePerSquareInch: 6894.76,
  };

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static newtonsPerMetersSquared: UnitPressure =
    new (class extends UnitPressure {
      constructor() {
        super(
          UnitPressure.UNIT_PRESSURE_SYMBOL.newtonsPerMetersSquared,
          UnitPressure.UNIT_PRESSURE_COEFFICIENT.newtonsPerMetersSquared
        );
      }
    })();

  static gigapascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.gigapascals,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.gigapascals
      );
    }
  })();

  static megapascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.megapascals,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.megapascals
      );
    }
  })();

  static kilopascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.kilopascals,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.kilopascals
      );
    }
  })();

  static hectopascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.hectopascals,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.hectopascals
      );
    }
  })();

  static inchesOfMercury: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.inchesOfMercury,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.inchesOfMercury
      );
    }
  })();

  static bars: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.bars,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.bars
      );
    }
  })();

  static millibars: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.millibars,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.millibars
      );
    }
  })();

  static millimetersOfMercury: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.UNIT_PRESSURE_SYMBOL.millimetersOfMercury,
        UnitPressure.UNIT_PRESSURE_COEFFICIENT.millimetersOfMercury
      );
    }
  })();

  static poundsForcePerSquareInch: UnitPressure =
    new (class extends UnitPressure {
      constructor() {
        super(
          UnitPressure.UNIT_PRESSURE_SYMBOL.poundsForcePerSquareInch,
          UnitPressure.UNIT_PRESSURE_COEFFICIENT.poundsForcePerSquareInch
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitPressure.newtonsPerMetersSquared;
  }
}
