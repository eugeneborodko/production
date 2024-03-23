import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

export const setFeatureFlags = (newFeatureFlags: FeatureFlags) => {
  if (!newFeatureFlags) return;

  featureFlags = newFeatureFlags;
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => featureFlags[flag];
