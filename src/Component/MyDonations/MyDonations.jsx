import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import getStoreddata from "../../utilities/getelemen";
import MyDonation from "../MyDonation/MyDonation";


const MyDonations = () => {
    const [matchCards, setMatchCards]=useState([]);
    const [visable, setVisable]=useState(4);
    const [click, setClick]= useState('btn')

   const allCards= useLoaderData()
   
   useEffect(()=>{
    const mylocalCard =getStoreddata();
   

    if(allCards.donations
        .length > 0){
        const matchAlldata = allCards.donations.filter(matchData=>mylocalCard.includes(matchData.id))
        setMatchCards(matchAlldata)
     
    }
   
   },[])
   
  const handleclick=(x)=>{
    setVisable(x.length);
    setClick('hidden')
    
  }

    return (
       <div>
         <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-7 mx-auto container my-7">
           {
           matchCards.slice(0,visable).map((singleCard,ind)=><MyDonation key={ind} singleCard={singleCard}></MyDonation>)
           }
        </div>
       
        <div className="text-center my-5">
       
       <button className={ matchCards.length < 4 ? "hidden":click} onClick={()=>handleclick(matchCards.length) }style={{background:  '#009444',color: 'white'}}> see all </button>

        </div>
             </div>
    );
};

export default MyDonations;