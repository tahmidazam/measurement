import { UnitPressure } from "../unit-pressure/unit-pressure";
import { Measurement } from "./measurement";

describe("Measurement", () => {
  describe("converted()", () => {
    it("returns a new measurement with the same value and unit when the units are equal", () => {
      // Arrange
      const measurement = new Measurement(5, UnitPressure.megapascals);

      // Act
      const result = measurement.converted(UnitPressure.megapascals);

      // Assert
      expect(result.value).toBe(5);
      expect(result.unit).toEqual(UnitPressure.megapascals);
    });

    it("returns a new measurement with the value converted to the other unit when the units are not equal", () => {
      // Arrange
      const measurement = new Measurement(5, UnitPressure.megapascals);

      // Act
      const result = measurement.converted(UnitPressure.kilopascals);

      // Assert
      expect(result.value).toBe(5000);
      expect(result.unit).toEqual(UnitPressure.kilopascals);
    });

    it("returns a new measurement with the value converted to the base unit when the other unit is the base unit", () => {
      // Arrange
      const measurement = new Measurement(5, UnitPressure.kilopascals);

      // Act
      const result = measurement.converted(
        UnitPressure.newtonsPerMetersSquared
      );

      // Assert
      expect(result.value).toBe(5000);
      expect(result.unit).toEqual(UnitPressure.newtonsPerMetersSquared);
    });
  });

  describe("convert()", () => {
    it("mutates instance after conversion", () => {
      // Arrange
      const measurement = new Measurement(5, UnitPressure.megapascals);

      // Act
      measurement.convert(UnitPressure.kilopascals);

      // Assert
      expect(measurement.value).toBe(5000);
      expect(measurement.unit).toEqual(UnitPressure.kilopascals);
    });
  });
});
