import React from 'react'
import { useSelector } from "react-redux";

import AddItems from './addItems';

function Employee() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    if(isLoggedIn == false){
        return (
            <div> Please log in to be here </div>
        )
    }else{
         return(
            <div>
                <AddItems />

            </div>
         )
    }
 
}

export default Employee