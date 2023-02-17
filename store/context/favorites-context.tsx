import React from 'react'

export type props = {
    children: React.ReactNode
}

export type CurrentUserContextType = {
  ids: any , addFavorite: any, removeFavorite: any,
}

export const FavoritesContext:React.Context<CurrentUserContextType> = React.createContext({
    ids: [],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {}
})

const FavoritesContextProvider: React.FC<props> = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = React.useState<string[]>([])

    const addFavorite = (id: any) => {
        setFavoriteMealIds(currentFavs  => [...currentFavs, id])
    }

    const removeFavorite = (id: string) => {
        setFavoriteMealIds(currentFavs  => currentFavs.filter(e => e !== id))
    }


    return <FavoritesContext.Provider value={{ids: favoriteMealIds, addFavorite: addFavorite, removeFavorite: removeFavorite}} >{ children  }</FavoritesContext.Provider>
}

export default FavoritesContextProvider


//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/