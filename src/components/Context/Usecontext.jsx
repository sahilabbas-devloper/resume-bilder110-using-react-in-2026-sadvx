import React from 'react'
import Fromdata from './Usecontext'
import { useState } from 'react'

const FromProvider = ({children}) => {

const [resume,setresume] = useState(null);

return(
    <Fromdata.Provider 
    value={{resume,setresume}}>
        {children}
    </Fromdata.Provider>
)
}

export default FromProvider