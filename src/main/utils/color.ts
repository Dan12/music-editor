
export class Color {
  static genColor(color: string, a: number) {
    if (a !== undefined)
      return `rgba(${color},${a})`;
    else
      return `rgb(${color})`;
  }

  static primaryColor = '255,255,255';

  static primary(a?: number): string {
    return Color.genColor(Color.primaryColor, a);
  }

  static primaryColorShade1 = '220,220,220';

  static primaryS1(a?: number): string {
    return Color.genColor(Color.primaryColorShade1, a);
  }

  static secondaryColor = '0,0,0';

  static secondary(a?: number): string {
    return Color.genColor(Color.secondaryColor, a);
  }

  static secondaryColorShade1 = '10,10,10';

  static secondaryS1(a?: number): string {
    return Color.genColor(Color.secondaryColorShade1, a);
  }

  static ternaryColor = '0,250,140';

  static ternary(a?: number): string {
    return Color.genColor(Color.ternaryColor, a);
  }

  static grayShade1 = '220,220,220';

  static gray1(a?: number): string {
    return Color.genColor(Color.grayShade1, a);
  }

  static grayShade2 = '220,220,220';

  static gray2(a?: number): string {
    return Color.genColor(Color.grayShade2, a);
  }

  static grayShade3 = '220,220,220';

  static gray3(a?: number): string {
    return Color.genColor(Color.grayShade3, a);
  }
}
