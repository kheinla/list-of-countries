import { CountriesTable } from './CountriesTable';
import { gql, useQuery } from '@apollo/client';
import { Loader } from './components/Loader';

function App() {
    const GET_COUNTRIES = gql`
        query GetCountries {
            countries {
                code
                name
            }
        }
    `;

    const {
        data,
        loading: isLoadingCountries,
        error,
    } = useQuery(GET_COUNTRIES);

    if (isLoadingCountries)
        return (
            <div>
                <Loader />
            </div>
        );

    if (error)
        return (
            <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
            >
                <span className="font-medium">{error.message}</span>
            </div>
        );

    return <CountriesTable countriesData={data.countries}></CountriesTable>;
}

export default App;
