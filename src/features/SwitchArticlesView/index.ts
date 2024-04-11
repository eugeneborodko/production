export { SwitchArticlesViewRedesigned } from './ui/SwitchArticlesViewRedesigned/SwitchArticlesViewRedesigned';
export { SwitchArticlesViewDeprecated } from './ui/SwitchArticlesViewDeprecated/SwitchArticlesViewDeprecated';
export type { ArticlesViewSchema } from './model/types/articlesViewSchema';
export {
  switchArticlesViewReducer,
  setArticlesView,
} from './model/slice/switchArticlesViewSlice';
export { getArticlesView } from './model/selectors/switchArticlesViewSelectors';
