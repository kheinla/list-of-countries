interface FilterProps {
    filter: string;
    onSetFilter: (filter: string) => void;
}

export const Filter = ({ filter, onSetFilter }: FilterProps) => {
    return (
        <div className="p-4 flex justify-end">
            <label htmlFor="table-search" className="sr-only">
                Search
            </label>
            <div className="relative mt-1">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="table-search"
                    value={filter}
                    onChange={(event) => onSetFilter(event.target.value)}
                    className="block glass-tile p-2 pl-10 text-sm text-white border focus-visible:border-blue-100 border-gray-300 rounded-lg w-80 placeholder-white"
                    placeholder="Search by Country Code"
                />
            </div>
        </div>
    );
};
