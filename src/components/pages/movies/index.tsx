import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Pagination from '../../molecules/pagination';
import MovieGenres from '../../molecules/movie-genres';

import { movieProps } from './types'

export default function Movies() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // Requisicao na api
  const { data, isFetching } = useFetch<movieProps[]>(
    search
      ? `3/search/movie?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR&query=${encodeURIComponent(
          search
        )}&page=${page}${category ? `&with_genres=${category}` : ''}`
      : `3/movie/popular?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR&page=${page}`,
    {},
    'results',
    [page, search, category]
  );  

  const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

  return (
    <>
      <div>
        <input
          className="text-black"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Pesquisar filmes"
        />
      </div>

      <MovieGenres />

      <ul className="grid grid-cols-4 gap-5 items-stretch">
        {isFetching && <p>Carregando</p>}
        {data?.map((movie) => (
            <li key={movie.id} className="border ">
              {movie.backdrop_path && (
                <img
                  src={imageUrl(movie.backdrop_path)}
                  alt={`Capa do filme ${movie.title}`}
                  className="w-full border border-cyan-100"
                />
              )}
              <strong>{movie.title}</strong>
            </li>
          ))}
      </ul>

      <Pagination
        currentPage={page}
        handleChangePage={(newPage) => setPage(newPage)}
        pageSize={20}
        totalItems={1000}
      />
    </>
  );
}
