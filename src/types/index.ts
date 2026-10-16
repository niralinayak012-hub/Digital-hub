export type Category = 
  | 'All'
  | 'Digital Marketing'
  | 'Social Media'
  | 'SEO'
  | 'Content Marketing'
  | 'Email Marketing'
  | 'Influencer Marketing'
  | 'Artificial Intelligence'
  | 'Paid Advertising'
  | 'Analytics';

export interface ArticleSection {
  heading: string;
  content: string;
  subsections?: {
    title: string;
    text: string;
  }[];
  exampleBox?: {
    title: string;
    description: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  views: number;
  likes: number;
  tags: string[];
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  keyTakeaways: string[];
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  date: string;
  content: string;
}
