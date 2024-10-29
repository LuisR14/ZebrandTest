import {storage} from '@app/utils/initStorage';

export const getUserTheme = (): string|undefined => {
  return storage.getString('userTheme');
};
