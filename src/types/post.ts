export interface IPost {
  id: number;
  date: Date;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  yoast_head_json: {
    description: string
  }
  og_url: string;
  og_image: {
    url: string
  }[]
}
