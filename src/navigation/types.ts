export enum Routes {
  HOME = 'Users',
  REPOSITORIES = 'Repositories',
  SETTINGS = 'Settings',
}

export type ScreenValue = (typeof Routes)[keyof typeof Routes];
