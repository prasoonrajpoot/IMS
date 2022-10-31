import React from 'react'
import { useSelector } from "react-redux";

import AddItems from './addItems';
import AllItems from './allItems';
import OrderButton from './orderButton';

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
                <AllItems />
                <OrderButton />
            </div>
         )
    }
 
}

export default Employee