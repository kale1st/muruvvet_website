import { IImage } from './IImage';

export interface IPost {
  id: number;
  title: string;
  date: string;
  place: string;
  mainText: string[];
  quote: string;
  images: IImage[];
}
