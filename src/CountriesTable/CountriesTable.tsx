import { useMemo, useState } from 'react';
import { Filter } from '../components/Filter';

type CountryDataType = {
    code: string;
    name: string;
};

interface CountriesTablePropsTypes {
    countriesData: CountryDataType[];
}

export const filterCountries = (
    countriesData: CountryDataType[],
    filter: string,
) => {
    return countriesData.filter((country) =>
        country.code.toLowerCase().includes(filter.toLowerCase()),
    );
};

export const CountriesTable = ({ countriesData }: CountriesTablePropsTypes) => {
    const [filter, setFilter] = useState<string>('');

    const filteredCountries = useMemo(
        () => filterCountries(countriesData, filter),
        [filter, countriesData],
    );

    return (
        <div className="relative overflow-x-auto glass-tile">
            <div className="flex flex-row justify-between">
                <h1 className="text-white text-3xl p-4">List of Countries</h1>
                <Filter filter={filter} onSetFilter={setFilter} />
            </div>
            <div className="max-h-[45rem] overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-md bg-blue-200 bg-opacity-30 text-white uppercase">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 w-1/2 border-r border-blue-200 border-opacity-30"
                            >
                                Country Code
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/2">
                                Country Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCountries.map((country: CountryDataType) => (
                            <tr
                                key={country.code}
                                className="border-b text-white border-blue-200 border-opacity-30"
                            >
                                <td className="px-6 py-4 w-1/2 border-r border-blue-200 border-opacity-30">
                                    {country.code}
                                </td>
                                <td className="px-6 py-4 w-1/2">
                                    {country.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
