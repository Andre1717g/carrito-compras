import { createContext, useState } from "react";
//creando contexto
export const FiltersContext = createContext();

//proveer contexto
export function FiltersProvider  ({children}) {

     const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 500,
     });
    return (
        <FiltersContext.Provider value={
            {
                filters,
                setFilters,
            }
        }>
            {children}
        </FiltersContext.Provider>
    );
}