
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

import { useState } from "react";

const Home = () => {
    const loadalldata = useLoaderData();
    const cards = loadalldata.donations;
   
    const [searchCata, setCata]=useState();
    const [seaccard, setSearchcard]= useState(cards);
    const hanleSubmit= e =>{
        e.preventDefault();
        console.log('search vallue',e.target.text.value)
        const searchValue = e.target.text.value.toLowerCase();
        setCata(searchValue)
      console.log(searchCata)
      console.log('allcards ', cards) 
      const manageCards= cards.filter(acard=>(acard.category.toLowerCase()) === searchCata )  
    setSearchcard(manageCards);
    console.log('search',seaccard)
    }
    return (
        <div>
          
            <div> 
    <div className="hero min-h-screen" style={{backgroundImage: 'url(./images/headerBg.png)'}}>
      
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
  
    <div className="justify-center">
   
      <h1 className="mb-5 text-5xl text-black font-bold ">I Grow By Helping People In Need</h1>
     <div className="sm:ml-12 md:ml-36">
       
       
        <form action="" onSubmit={hanleSubmit} >
      
           <input  type="text" name="text" placeholder="Search here" className=" text-black input input-bordered w-full max-w-xs mr-7" /> 
           <input type="submit" className="btn bg-[#FF444A] text-white"/>
   
           </form>
    
     </div>
    </div>
  </div>
</div>
</div>
          
           <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-7 max-auto container mb-7">
           {
           
            seaccard.map((card,inx)=><Card key={inx} card={card}></Card>)
            }
           </div>
 
        </div>
    );
};

export default Home;



