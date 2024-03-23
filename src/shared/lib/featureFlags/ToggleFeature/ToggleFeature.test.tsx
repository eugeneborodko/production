import { render, screen } from '@testing-library/react';
import { setFeatureFlags } from '../featureFlags';
import { ToggleFeature } from './ToggleFeature';

describe('ToggleFeature', () => {
  it('should render on component when feature is on', () => {
    setFeatureFlags({
      isArticleCommentsEnabled: true,
    });
    render(
      <ToggleFeature
        feature="isArticleCommentsEnabled"
        on={<div>Comments</div>}
        off={<div>No comments</div>}
      />,
    );
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(screen.queryByText('No comments')).toBeNull();
  });

  it('should render off component when feature is off', () => {
    setFeatureFlags({
      isArticleCommentsEnabled: false,
    });
    render(
      <ToggleFeature
        feature="isArticleCommentsEnabled"
        on={<div>Comments</div>}
        off={<div>No comments</div>}
      />,
    );
    expect(screen.getByText('No comments')).toBeInTheDocument();
    expect(screen.queryByText('Comments')).toBeNull();
  });

  it('should return null if feature flag does not exist ', () => {
    render(
      <ToggleFeature
        // @ts-ignore
        feature={undefined}
        on={<div>Comments</div>}
        off={<div>No comments</div>}
      />,
    );
    expect(screen.queryByText('Comments')).toBeNull();
    expect(screen.queryByText('No comments')).toBeNull();
  });
});
