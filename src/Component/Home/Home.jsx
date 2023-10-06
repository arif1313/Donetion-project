import { useLoaderData } from "react-router-dom";
import Banar from "../Banar/Banar";

import Card from "../Card/Card";






const Home = () => {
    const cards = useLoaderData();
 
   

    return (
        <div>
            
            <Banar></Banar>
         
           <div className="grid grid-cols-4 gap-7 max-auto container mb-7">
           {
              cards.donations.map((card,inx)=><Card key={inx} card={card}></Card>)
            }
           </div>
          
         
          
        </div>
    );
};

export default Home;