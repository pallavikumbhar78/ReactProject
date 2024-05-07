import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch(); //Height of the device 375

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizonatlScale = size => (width / guidelineBaseWidth()) * size; //For horizonal padding margin left, it will scale the horizonal item according to ratio

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);
export {horizonatlScale, verticalScale, scaleFontSize};
