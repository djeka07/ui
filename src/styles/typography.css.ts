export type Size = {
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  normal: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export type Family = { heading: string; body: string };
export type FamilyKeys = keyof Family;

export type Weight = {
  light: string;
  regular: string;
  bold: string;
};

export type WeightKeys = keyof Weight;

export type SizeKeys = keyof Size;