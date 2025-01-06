import { getPresets } from 'eslint-config-molindo';

export default await getPresets('typescript', 'react', 'tailwind', 'jest');

export const rules = {
  'object-curly-spacing': ['error', 'always']
};
