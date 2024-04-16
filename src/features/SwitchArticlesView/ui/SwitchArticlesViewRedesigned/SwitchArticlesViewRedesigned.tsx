import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesView } from '../../model/selectors/switchArticlesViewSelectors';
import {
  setArticlesView,
  switchArticlesViewReducer,
} from '../../model/slice/switchArticlesViewSlice';
import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tiled.svg';
import { LOCAL_STORAGE_ARTICLES_VIEW } from '@/shared/consts/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getHStack } from '@/shared/lib/helpers/flex';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Card, Icon } from '@/shared/ui/redesigned';
import classes from './SwitchArticlesViewRedesigned.module.scss';

interface SwitchArticlesViewRedesignedProps {
  className?: string;
}

type viewTypesParams = {
  view: ArticleView;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

const viewTypes = [
  {
    view: 'grid',
    Icon: GridIcon,
  },
  {
    view: 'tile',
    Icon: TileIcon,
  },
] as viewTypesParams[];

const reducers: ReducersList = {
  articlesView: switchArticlesViewReducer,
};

export const SwitchArticlesViewRedesigned: FC<
  SwitchArticlesViewRedesignedProps
> = ({ className }) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);

  useDynamicModuleLoader(reducers);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(setArticlesView(view));
    },
    [dispatch],
  );

  const onClick = (view: ArticleView) => () => {
    onChangeView(view);
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, view);
  };

  return (
    <Card
      className={classNames(classes.switchArticlesView, {}, [className])}
      border="round"
      padding="8"
      style={getHStack({ gap: '4' })}
    >
      {viewTypes.map((viewType) => (
        <Icon
          className={classNames(classes.icon, {
            [classes.selected]: view === viewType.view,
          })}
          Svg={viewType.Icon}
          onClick={onClick(viewType.view)}
          key={viewType.view}
          clickable
        />
      ))}
    </Card>
  );
};
