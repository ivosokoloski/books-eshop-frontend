import type { Author } from "./author.ts";
export interface Book {
  id: number;
  name: string;
  category: string;
  state: string;
  rented: boolean;
  availableCopies: number;
  authorId: number;
}

export interface BookDetails {
  id: number;
  name: string;
  category: string;
  state: string;
  rented: boolean;
  availableCopies: number;
  author: Author;
}

export interface BookFormData {
  name: string;
  category: string;
  state: string;
  rented: boolean;
  availableCopies: number;
  authorId: number;
}
