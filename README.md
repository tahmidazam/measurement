An extensible TypeScript library for labelling numeric quantities with physical dimensions enabling the formatting and conversion of related units.

This library is a port of the [Units and Measurement API Collection](https://developer.apple.com/documentation/foundation/units_and_measurement), a component of the Swift [Foundation](https://developer.apple.com/documentation/foundation) library. Classes, methods, and functionality closely follow the Swift Foundation library source code repository, [`swift-corelibs-foundation`](https://github.com/apple/swift-corelibs-foundation).

## Contributing

### Commits

Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### Unit tests

Unit tests are written using [`jest`](https://jestjs.io) and follow the [JavaScript Unit Testing Guide](https://github.com/mawrkus/js-unit-testing-guide).

## Roadmap

### Essentials

- [x] `Unit` class
- [x] `Measurement` class (N.B., split into `DimensionlessMeasurement` and `Measurement`)
- [x] `Dimension` class

### Conversion

- [x] `UnitConverter` class
- [x] `UnitConverterLinear` subclass

### Physical Dimension

- [ ] `UnitArea` subclass
- [ ] `UnitLength` subclass
- [ ] `UnitVolume` subclass
- [ ] `UnitAngle` subclass

### Mass, Weight, and Force

- [ ] `UnitMass` subclass
- [x] `UnitPressure` subclass

### Time and Motion

- [ ] `UnitAcceleration` subclass
- [ ] `UnitDuration` subclass
- [ ] `UnitFrequency` subclass
- [ ] `UnitSpeed` subclass

### Energy, Heat, and Light

- [ ] `UnitEnergy` subclass
- [ ] `UnitPower` subclass
- [ ] `UnitTemperature` subclass
- [ ] `UnitIlluminance` subclass

### Electricity

- [ ] `UnitElectricCharge` subclass
- [ ] `UnitElectricCurrent` subclass
- [ ] `UnitElectricPotentialDifference` subclass
- [ ] `UnitElectricResistance` subclass

### Concentration and Dispersion

- [ ] `UnitConcentrationMass` subclass
- [ ] `UnitDispersion` subclass

### Fuel Efficiency

- [ ] `UnitFuelEfficiency` subclass