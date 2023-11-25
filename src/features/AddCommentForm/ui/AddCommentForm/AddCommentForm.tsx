import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, HStack, Input } from 'shared/ui';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormReducer,
  setCommentsFormText,
} from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const isLoading = useSelector(getAddCommentFormIsLoading);

  useDynamicModuleLoader(reducers);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(setCommentsFormText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <HStack gap="32">
      <Input
        placeholder={t('enter your comment')}
        value={text}
        onChange={onCommentTextChange}
        fullWidth
      />
      <Button onClick={onSendHandler}>{t('send')}</Button>
    </HStack>
  );
};

export default memo(AddCommentForm);
