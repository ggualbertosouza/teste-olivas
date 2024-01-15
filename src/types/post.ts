export interface IPost {
  id: number;
  date: Date;
  categories: number[];
  title: {
    rendered: string;
  };
  link: string;
  content: {
    rendered: string;
  };
  yoast_head_json: {
    description: string;
  };
  og_url: string;
  og_image: {
    url: string;
  }[];
}
