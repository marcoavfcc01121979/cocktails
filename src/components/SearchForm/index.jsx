import { useGlobalContext } from "../../context"

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    return(
        <h1>SearchForm</h1>
    )
}

export { SearchForm }