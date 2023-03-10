export interface Review {
  userID: string;
  rating: number;
  comment: string;
  userName: string;
}

export interface Book {
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
