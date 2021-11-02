import React, {useContext, useReducer} from "react";
import {gallery_reducer} from "../reducer/gallery_reducer";

const initialValues = {
    isGallery: false
}

const GalleryContext = React.createContext()

export const GalleryProvider = ({children}) => {
    const [state, dispatch] = useReducer(gallery_reducer, initialValues)

    const openGallery = () => {
        dispatch({
            type: 'OPEN_GALLERY'
        })
    }

    const closeGallery = () => {
        dispatch({
            type: 'CLOSE_GALLERY'
        })
    }

    return (
        <GalleryContext.Provider value={{
            ...state,
            openGallery,
            closeGallery
        }}>
            {children}
        </GalleryContext.Provider>
    )
}

export const useGalleryContext = () => useContext(GalleryContext)