import { environment as devEnvironment } from './environment.dev';
import { Environment } from './types';

export const environment: Environment = {
  ...devEnvironment,
};
