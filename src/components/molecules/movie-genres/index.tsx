import Select from '../../atoms/select';

import useFetch from '../../../hooks/useFetch';

import { Response } from './types';

const MovieGenres = () => {
  const { data } = useFetch<Response>('/3/genre/movie/list');

  return (
    <Select>
      <option value="">Todas as categorias</option>
      {data?.genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </Select>
  );
};
export default MovieGenres;
