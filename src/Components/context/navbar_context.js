import React, {useContext, useReducer} from "react";
import {navbar_reducer} from "../reducer/navbar_reducer";

const initialValues = {
    sidebar: false
}

const NavbarContext = React.createContext()

export const NavbarProvider = ({children}) => {
    const [state, dispatch] = useReducer(navbar_reducer, initialValues)

    const openSidebar = () => {
      dispatch({
          type: 'OPEN_SIDEBAR'
      })
    }

     const closeSidebar = () => {
      dispatch({
          type: 'CLOSE_SIDEBAR'
      })
    }


    return (
        <NavbarContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar

        }}>
            {children}
        </NavbarContext.Provider>
    )
}

export const useNavbarContext = () => useContext(NavbarContext)

