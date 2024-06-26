import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesView } from '../../model/selectors/switchArticlesViewSelectors';
import { setArticlesView } from '../../model/slice/switchArticlesViewSlice';
import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/grid.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { LOCAL_STORAGE_ARTICLES_VIEW } from '@/shared/consts/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Icon } from '@/shared/ui/deprecated';
import { ButtonVariants } from '@/shared/ui/deprecated/Button';
import classes from './SwitchArticlesViewDeprecated.module.scss';

interface SwitchArticlesViewDeprecatedProps {
  className?: string;
}

type viewTypesParams = {
  view: ArticleView;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

const viewTypes = [
  {
    view: 'tile',
    Icon: TileIcon,
  },
  {
    view: 'grid',
    Icon: GridIcon,
  },
] as viewTypesParams[];

export const SwitchArticlesViewDeprecated: FC<
  SwitchArticlesViewDeprecatedProps
> = ({ className }) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
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
    <div className={classNames(classes.switchArticlesView, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          variant={ButtonVariants.ICON}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            className={classNames(classes.icon, {
              [classes.selected]: view === viewType.view,
            })}
            Svg={viewType.Icon}
            width="24"
            height="24"
          />
        </Button>
      ))}
    </div>
  );
};
