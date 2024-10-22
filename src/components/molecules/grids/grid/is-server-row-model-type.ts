import { GridClientProps, GridServerSideProps } from './grid.props';
const isServerRowModelType = <T>(props: GridServerSideProps<T> | GridClientProps<T>): props is GridServerSideProps<T> =>
  props.rowModelType === 'server';

export default isServerRowModelType;
