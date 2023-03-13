export interface Review {
  userID: string;
  rating: number;
  comment: string;
  userName: string;
}

import { ReactNode } from "react";

export interface Book {
  description: ReactNode;
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  genres: string[];
  reviews: Review[];
  averageRating: number;
  date?: Date;
  description?: String;
  year?: number;
}

export interface UserLists {
  id: string;
  userID: string;
  favorites: Book[];
}
