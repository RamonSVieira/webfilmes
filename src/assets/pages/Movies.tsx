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
    // Requisicao na api
    const { data: repositories, isFetching } =
        useFetch<movieProps[]>(
            `3/movie/popular?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR&page=${page}`,
            {}, //Opções adicionais
            [page]// dependencias quando alterada, dispara nova requisição
        );

    const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

    return (
        <>
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

            <Pagination page={page} setPage={setPage}/>
        </>
    )
}