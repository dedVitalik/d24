import uk from './src/messages/uk.json';

type Messages = typeof uk;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
