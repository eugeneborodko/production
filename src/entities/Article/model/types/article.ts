import { User } from '../../../User/index';

export enum ArticleTypes {
  IT = 'IT',
  MEDICINE = 'MEDICINE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlocksTypes {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}

interface ArticleBlocksBase {
  id: string;
  type: ArticleBlocksTypes;
}

export interface ArticleTextBlock extends ArticleBlocksBase {
  type: ArticleBlocksTypes.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlocksBase {
  type: ArticleBlocksTypes.IMAGE;
  title: string;
  src: string;
}

export interface ArticleCodeBlock extends ArticleBlocksBase {
  type: ArticleBlocksTypes.CODE;
  code: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodeBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  user: User;
  type: ArticleTypes[];
  blocks: ArticleBlock[];
}

export interface ArticleSchema {
  data?: Article[];
  error?: string;
  isLoading: boolean;
}

export type ArticleView = 'grid' | 'tile';
