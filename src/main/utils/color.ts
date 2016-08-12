
export class Color {
  static genColor(color: string, a: number) {
    if (a !== undefined)
      return `rgba(${color},${a})`;
    else
      return `rgb(${color})`;
  }

  static primaryColor = '255,255,255';
  static secondaryColor = '0,0,0';
  static ternaryColor = '0,140,220';
  static grayShade1 = '220,220,220';
  static grayShade2 = '200,200,200';

  static primary(a?: number): string {
    return Color.genColor(Color.primaryColor, a);
  }

  static secondary(a?: number): string {
    return Color.genColor(Color.secondaryColor, a);
  }

  static ternary(a?: number): string {
    return Color.genColor(Color.ternaryColor, a);
  }

  static gray1(a?: number): string {
    return Color.genColor(Color.grayShade1, a);
  }

  static gray2(a?: number): string {
    return Color.genColor(Color.grayShade2, a);
  }
}
