export interface Course {
  id: number;
  volumeInfo: {
    name: string;
    createDate: string;
    duration: string[];
    authors: string;
    publishDate: string;
  };
}
