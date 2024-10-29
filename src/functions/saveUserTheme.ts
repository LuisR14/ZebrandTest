import {storage} from '@app/utils/initStorage';

export const saveUserTheme = (style: string) => {
  storage.set('userTheme', style);
};
