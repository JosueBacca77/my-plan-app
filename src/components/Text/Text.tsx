import { Text as NativeBaseText } from 'native-base';
import { TextProps, getFontSize, getLineHeight } from './types';

export default function Text(textProps: TextProps) {
    const { fontColor, variant, value, ...props } = textProps;

    const fontSize = getFontSize(variant);
    const lineHeight = getLineHeight(variant);

    return (
        <NativeBaseText
            color={fontColor}
            fontSize={fontSize}
            lineHeight={lineHeight}
            {...props}
        >
            {value}
        </NativeBaseText>
    )
}