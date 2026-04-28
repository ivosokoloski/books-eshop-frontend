import { Continent } from './continent.ts';
export interface Author {
  id: number;
  name: string;
  surname: string;
}
export interface AuthorDetails {
  id: number;
  name: string;
  surname: string;
  continent: Continent;
}