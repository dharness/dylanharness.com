class BesselFunctionCalculator {
  private static factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  public static calculateBesselFunction(x: number, order: number): number {
    if (order < 0 || !Number.isInteger(order)) {
      throw new Error("Invalid order. Order must be a non-negative integer.");
    }

    let result = 0;
    for (let k = 0; k <= order; k++) {
      const coefficient =
        Math.pow(-1, k) / (this.factorial(k) * this.factorial(order + k));
      result += coefficient * Math.pow(x / 2, 2 * order + k);
    }

    return result;
  }
}

// Example usage:
const xValue = 2.5;
const besselOrder = 3;

try {
  const besselValue = BesselFunctionCalculator.calculateBesselFunction(
    xValue,
    besselOrder
  );
  console.log(
    `The Bessel function value of order ${besselOrder} at x = ${xValue} is: ${besselValue}`
  );
} catch (error) {
  console.error(error.message);
}
