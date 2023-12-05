import { Story } from '@storybook/react';
import { Suspense } from 'react';

import { Loader } from '../../../ui/Loader/Loader';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<Loader />}>
    <StoryComponent />
  </Suspense>
);
