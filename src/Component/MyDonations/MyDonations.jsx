import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import getStoreddata from "../../utilities/getelemen";


const MyDonations = () => {
   const allCards= useLoaderData()
   console.log('all card display in my donations',allCards)
   useEffect(()=>{
    const mylocalCard =getStoreddata();
    console.log('my localdat',mylocalCard);
   },[])
    return (
        <div>
            <h1>this is details section</h1>
        </div>
    );
};

export default MyDonations;