import React, {memo} from 'react';
import ListSkeleton from '../skeletonList';

export const LoadingComponent = () => {
  return <ListSkeleton />;
};
export default memo(LoadingComponent);
