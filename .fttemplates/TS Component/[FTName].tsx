import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName]: FC<[FTName]Props> = ( {className} ) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.[FTName | camelcase], {}, [className])}>

    </div>
  );
}