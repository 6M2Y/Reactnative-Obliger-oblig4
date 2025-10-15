import { ImageSourcePropType } from 'react-native';

// extract types
export interface PropsBtn {
  title: string;
  action: () => void;
  color: string;
}

export interface CardProp {
  // image, text, etc. can be added here as needed
  //add image
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  icon?: string;
}

export interface Location {
  id: number;
  locationName: string;
  img: ImageSourcePropType;
  text: string;
  action: () => void;
}
