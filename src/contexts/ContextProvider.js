import React , { createContext, useContext, useState, } from 'react';

const StateContext = createContext(); 

const initialState = {
    chat: false,
    cart: false,
    userProfile: false, 
    notification: false,
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState( true)
    const [isClicked, setIsClicked] =useState(initialState)
    const [screenSize, setScreenSize]= useState('')
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')

    const[settings, setSettings] =  useState(false)

    const setMode = (e) =>{
        
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }

      const setColor= (color) =>{
      
        setCurrentColor(color)
    

        localStorage.setItem('colorMode', color)
        setSettings(false)
    }

    const handleClick = (clicked)=>{
        setIsClicked({...initialState, [clicked]:true})
    }
    const closeClick = (clicked)=>{
        setIsClicked({...initialState, [clicked]:false})
    }
    return (
        <StateContext.Provider 
        value={{    
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick, closeClick,
            screenSize, setScreenSize,
            currentColor, currentMode,
            setCurrentColor, setCurrentMode,
            setColor, setMode,
            settings, setSettings

        } }
        >
            {children} 
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);

