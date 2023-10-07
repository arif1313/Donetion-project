import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import getStoreddata from "../../utilities/getelemen";
import MyDonation from "../MyDonation/MyDonation";


const MyDonations = () => {
    const [matchCards, setMatchCards]=useState([]);
   const allCards= useLoaderData()
   console.log('all card display in my donations',allCards)
   useEffect(()=>{
    const mylocalCard =getStoreddata();
    console.log('my localdat',mylocalCard);
    console.log('my localdat length',mylocalCard.length);
    console.log('my all length',allCards.donations
    .length);

    

    if(allCards.donations
        .length > 0){
        const matchAlldata = allCards.donations.filter(matchData=>mylocalCard.includes(matchData.id))
        setMatchCards(matchAlldata)
     
    }
   
   },[])
   console.log('matched data',matchCards)
    return (
       <div>
         <div className="grid grid-cols-2 gap-7 mx-auto container ">
           {
           matchCards.map((singleCard,ind)=><MyDonation key={ind} singleCard={singleCard}></MyDonation>)
           }
        </div>
        <p> match card : {matchCards.length}</p>
        <button className={ matchCards.length < 4 ? "hidden":"btn"} > see all </button>
       </div>
    );
};
{/*  */}
export default MyDonations;