export { SwitchArticlesView } from './ui/SwitchArticlesView/SwitchArticlesView';
export type { ArticlesViewSchema } from './model/types/articlesViewSchema';
export {
  switchArticlesViewReducer,
  setArticlesView,
} from './model/slice/switchArticlesViewSlice';
export { getArticlesView } from './model/selectors/switchArticlesViewSelectors';
