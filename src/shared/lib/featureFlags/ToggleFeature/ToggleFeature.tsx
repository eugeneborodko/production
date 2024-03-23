/* eslint-disable react/jsx-no-useless-fragment */
import { ReactElement, ReactNode } from 'react';
import { getFeatureFlag } from '../featureFlags';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeatureProps {
  feature: keyof FeatureFlags;
  on: ReactNode;
  off: ReactNode;
}

export const ToggleFeature = ({
  feature,
  on,
  off,
}: ToggleFeatureProps): ReactElement | null => {
  if (getFeatureFlag(feature)) return <>{on}</>;
  if (getFeatureFlag(feature) === false) return <>{off}</>;
  return null;
};
