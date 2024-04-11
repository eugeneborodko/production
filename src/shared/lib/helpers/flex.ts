import { CSSProperties } from 'react';

type GapSize = '0' | '4' | '8' | '16' | '24';

type FlexProperties = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

interface StackProperties extends FlexProperties {
  gap: GapSize;
  flexDirection?: 'row' | 'column';
}

const getStackStyles = ({
  flexDirection = 'row',
  ...props
}: StackProperties): CSSProperties => ({
  display: 'flex',
  gap: `${props.gap}px`,
  justifyContent: props.justifyContent ?? 'flex-start',
  alignItems: props.alignItems ?? 'stretch',
  flexDirection,
});

export const getHStack = (
  properties: Omit<StackProperties, 'flexDirection'>,
): CSSProperties => getStackStyles({ ...properties, flexDirection: 'row' });

export const getVStack = (
  properties: Omit<StackProperties, 'flexDirection'>,
): CSSProperties => getStackStyles({ ...properties, flexDirection: 'column' });
