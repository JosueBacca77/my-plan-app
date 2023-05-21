import { Text as NativeBaseText } from 'native-base';
import { FontVariant, TextProps, getFontSize, getLineHeight } from './types';

export default function Text(textProps: TextProps) {
    const { fontColor, variant=FontVariant.TEXT_XS, value, style } = textProps;

    const fontSize = getFontSize(variant);
    const lineHeight = getLineHeight(variant);

    return (
        <NativeBaseText
            color={fontColor}
            fontSize={fontSize}
            lineHeight={lineHeight}
            style={style}
        >
            {value}
        </NativeBaseText>
    )
}