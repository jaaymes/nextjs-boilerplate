import { Loading } from './loading';

export default {
  title: 'Components/Commons/Loading',
  component: Loading,
};

export const Default = () => {
  document.querySelector('body')?.classList.remove('dark');
  return <Loading />;
};

export const Dark = () => {
  document.querySelector('body')?.classList.add('dark');
  return <Loading />;
};
