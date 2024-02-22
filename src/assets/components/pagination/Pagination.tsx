interface PaginationProps{
    page:number;
    setPage: (page: number) => void; 
}

export default function Pagination({page, setPage}: PaginationProps) {
    return (
        <div className="pagination">
            <button onClick={() => setPage(page > 1 ? page - 1 : page)}>Anterior</button>
            <span>Página {page}</span>
            <button onClick={() => setPage(page + 1)}>Próxima</button>
        </div>
    )
}