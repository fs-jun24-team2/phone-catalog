export interface Banner {
  id: number;
  link: string;
  mainImage: string;
  mediaSets: MediaSet[];
  alt: string;
  title: string;
}

export interface MediaSet {
  media: string;
  srcSet: string;
}
