import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user-zebran-storage',
  encryptionKey: 'hunter2',
});
