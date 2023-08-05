import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import TileIcon from 'shared/assets/icons/tile.svg';
import GridIcon from 'shared/assets/icons/grid.svg';
import { ArticleView } from 'entities/Article';
import { Button } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/localstorage';
import classes from './SwitchArticlesView.module.scss';

interface SwitchArticlesViewProps {
  className?: string;
  onViewClick?: (view: ArticleView) => void;
  view: ArticleView;
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

export const SwitchArticlesView: FC<SwitchArticlesViewProps> = ({
  className,
  onViewClick,
  view,
}) => {
  const onClick = (view: ArticleView) => () => {
    onViewClick?.(view);
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
          <viewType.Icon
            className={classNames(classes.icon, {
              [classes.selected]: view === viewType.view,
            })}
          />
        </Button>
      ))}
    </div>
  );
};
