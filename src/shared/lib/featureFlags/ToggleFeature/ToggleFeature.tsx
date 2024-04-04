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
  // console.log({ feature, on, off });
  // console.log(getFeatureFlag(feature));
  if (getFeatureFlag(feature)) return <>{on}</>;
  return <>{off}</>;
};
