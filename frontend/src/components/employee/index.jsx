import React from 'react'
import { useSelector } from "react-redux";

import AddItems from './addItems';
import AllItems from './allItems';
import OrderButton from './orderButton';
import SafeItemsList from './safeList';
function Employee() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    var [refreshData, setRefresh] = React.useState(false);
    if(isLoggedIn == false){
        return (
            <div> Please log in to be here </div>
        )
    }else{
         return (
           <div>
             <AddItems refreshData={refreshData} setRefresh={setRefresh} />
             <AllItems refreshData={refreshData} setRefresh={setRefresh} />
             <OrderButton refreshData={refreshData} setRefresh={setRefresh} />
             <SafeItemsList refreshData={refreshData} setRefresh={setRefresh} />
           </div>
         );
    }
 
}

export default Employee