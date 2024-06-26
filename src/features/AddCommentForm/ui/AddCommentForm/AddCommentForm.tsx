import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import {
  addCommentFormReducer,
  setCommentsFormText,
} from '../../model/slice/addCommentFormSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Button, Input } from '@/shared/ui/deprecated';
import { HStack } from '@/shared/ui/redesigned';

export interface AddCommentFormProps {
  id: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({ id }) => {
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  useDynamicModuleLoader(reducers);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(setCommentsFormText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    dispatch(addCommentForArticle(text || ''));
    onCommentTextChange('');
  }, [dispatch, onCommentTextChange, text]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <HStack gap="32">
      <Input
        placeholder={t('enter your comment')}
        value={text}
        onChange={onCommentTextChange}
        data-testid="AddCommentForm.Input"
        fullWidth
      />
      <Button onClick={onSendHandler} data-testid="AddCommentForm.Button">
        {t('send')}
      </Button>
    </HStack>
  );
};

export default memo(AddCommentForm);
