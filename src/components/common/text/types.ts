export interface TextProps {
    fontColor: string,
    variant: FontVariant,
    value: string
}

export enum FontVariant {
    TEXT_XS = 'TEXT_XS',
    TEXT_SM = 'TEXT_SM',
    TEXT_LG = 'TEXT_LG',
    TEXT_XL = 'TEXT_XL',
    TEXT_2XL = 'TEXT_2XL',
    TEXT_3XL = 'TEXT_3XL',
    TEXT_4XL = 'TEXT_4XL',
  }
  
  export const getFontSize = (variant: FontVariant): number | undefined => {
    switch (variant) {
      case FontVariant.TEXT_XS:
        return 12;
      case FontVariant.TEXT_SM:
        return 14;
      case FontVariant.TEXT_LG:
        return 18;
      case FontVariant.TEXT_XL:
        return 20;
      case FontVariant.TEXT_2XL:
        return 24;
      case FontVariant.TEXT_3XL:
        return 30;
      case FontVariant.TEXT_4XL:
        return 36;
      default:
        return undefined;
    }
  };
  
  export const getLineHeight = (variant: FontVariant): number | undefined => {
    switch (variant) {
      case FontVariant.TEXT_XS:
        return 16;
      case FontVariant.TEXT_SM:
        return 20;
      case FontVariant.TEXT_LG:
        return 28;
      case FontVariant.TEXT_XL:
        return 28;
      case FontVariant.TEXT_2XL:
        return 32;
      case FontVariant.TEXT_3XL:
        return 38;
      case FontVariant.TEXT_4XL:
        return 44;
      default:
        return undefined;
    }
  };
  