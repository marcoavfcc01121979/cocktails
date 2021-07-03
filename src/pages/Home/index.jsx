import { CockTailList } from "../../components/CockTailList"
import { SearchForm } from "../../components/SearchForm"

const Home = () => {
    return(
        <main>
            <SearchForm />
            <CockTailList />
        </main>
    )
}

export { Home }