import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Pagination from "../components/pagination/Pagination";

// Definindo as props de um movie
interface movieProps {
    id: number;
    title: string;
    overview: string;
    backdrop_path?: string;
}

export default function Movies() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    // Requisicao na api
    const { data: repositories, isFetching } =
        useFetch<movieProps[]>(
            search
                ? `3/search/movie?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR&query=${encodeURIComponent(search)}&page=${page}`
                : `3/movie/popular?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR&page=${page}`,
            {}, //Opções adicionais
            [page, search]// dependencias quando alterada, dispara nova requisição
        );

    const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

    return (
        <>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setPage(1);
                    }}
                    placeholder="Pesquisar filmes"
                />
            </div>

            <ul className="grid grid-cols-4 gap-5 items-stretch">
                {isFetching && <p>Carregando</p>}
                {repositories?.map(movie => (
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

            <Pagination page={page} setPage={setPage} />
        </>
    )
}