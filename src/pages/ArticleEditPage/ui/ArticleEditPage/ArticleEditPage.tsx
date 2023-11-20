import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { id } = useParams<{id: string}>();
  const isEdit = !!id; // true -> edit page - false -> create page.
  return (
  // TODO: implement edit/create article - 61 (14:30)

    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames('', {}, [className])}>
      Article Edit Page
    </div>
  );
};
export default ArticleEditPage;
