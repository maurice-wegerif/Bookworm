export interface Book {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  genres: string[];
  category?: string;
  date?: Date;
}
