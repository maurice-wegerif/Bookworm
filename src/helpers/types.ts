export interface Review {
  userID: string;
  rating: number;
  comment: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  genres: string[];
  reviews?: Review[];
  date?: Date;
}

export interface UserLists {
  id: string;
  userID: string;
  favorites: Book[];
}
