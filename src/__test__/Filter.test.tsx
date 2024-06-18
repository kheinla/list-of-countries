import { filterCountries } from '../CountriesTable/CountriesTable.tsx';

const mockCountriesData = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'MX', name: 'Mexico' },
];

describe('filterCountries', () => {
    test('returns all countries when filter is empty', () => {
        const result = filterCountries(mockCountriesData, '');
        expect(result).toEqual(mockCountriesData);
    });

    test('filters countries by code', () => {
        const result = filterCountries(mockCountriesData, 'CA');
        expect(result).toEqual([{ code: 'CA', name: 'Canada' }]);
    });

    test('filters countries case insensitively', () => {
        const result = filterCountries(mockCountriesData, 'ca');
        expect(result).toEqual([{ code: 'CA', name: 'Canada' }]);
    });

    test('returns empty array when no countries match the filter', () => {
        const result = filterCountries(mockCountriesData, 'ZZ');
        expect(result).toEqual([]);
    });
});
