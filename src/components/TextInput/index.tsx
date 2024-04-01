import React, {FC, forwardRef, Ref} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  KeyboardTypeOptions, // Import KeyboardTypeOptions
} from 'react-native';

// user defined imports
import {styles} from './styles';

interface TextInputWithButtonProps {
  value: string;
  onPressButton?: () => void;
  onChangeText?: (text: string) => void;
  img?: any;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  placeholder: string;
  txtInputStyle?: StyleProp<TextStyle>;
  secure?: boolean;
  returnKeyType?: 'done' | 'next';
  onSubmitEditing?: () => void;
  ref?: Ref<TextInput>;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number | null;
}

const TextInputs: FC<TextInputWithButtonProps> = forwardRef(
  (
    {
      value,
      onPressButton,
      img,
      onChangeText,
      containerStyle,
      buttonStyle,
      imageStyle,
      placeholder,
      txtInputStyle,
      secure = false,
      returnKeyType,
      onSubmitEditing,
      keyboardType = 'default',
      maxLength = null,
    },
    ref?: Ref<TextInput>,
  ) => {
    const secureTextEntry = secure ? true : false;

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          style={[styles.input, txtInputStyle]}
          value={value}
          onChangeText={text => {
            if (maxLength !== null && maxLength > 0) {
              text = text.slice(0, maxLength);
            }
            onChangeText?.(text);
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
          keyboardType={keyboardType}
        />
        {img && (
          <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPressButton}>
            <Image source={img} style={[styles.image, imageStyle]} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default TextInputs;
