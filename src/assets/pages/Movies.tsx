import { useFetch } from "../hooks/useFetch";

// Definindo as props de um movie
interface movieProps {
    id: number;
    title: string;
    overview: string;
    backdrop_path?: string;
  }

export default function Movies() {
    // Requisicao na api
    const { data: repositories, isFetching } = 
        useFetch<movieProps[]>('3/movie/popular?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR')

    const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

    return (
        <>
            <ul className="">
                {isFetching && <p>Carregando</p>}
                {repositories?.map(movie => (
                    <li key={movie.id}>
                        <strong>{movie.title}</strong>
                        <p>{movie.overview}</p>
                        {movie.backdrop_path && (
                            <img
                                src={imageUrl(movie.backdrop_path)}
                                alt={`Capa do filme ${movie.title}`}
                                className="w-20 h-20 border border-cyan-100"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}