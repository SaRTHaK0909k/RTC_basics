import React,{createContext} from 'react'

const SocketContext = createContext(null);


export const SocketProvider = (props) => {
    return(
        <SocketContext.Provider>
            {props.children}
        </SocketContext.Provider>
    )
}
