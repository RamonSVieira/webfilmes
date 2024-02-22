import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
// Importe sua função de fazer requisições HTTP, useFetch ou outra


interface Genre {
    id: number;
    name: string;
}

const MovieGenresSelect = () => {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fffdc0e9123f3943573fdf948dd21681&language=pt-BR')
            .then((response) => {
                setGenres(response.data.genres);
            });
    }, []);

    console.log(genres);

    return (
        <select className="text-black">
            <option value="">Todas as categorias</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default MovieGenresSelect;