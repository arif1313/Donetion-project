import { useState } from "react";


const BannarSearch = () => {
    const [searchCata, setCata]=useState();
    const hanleSubmit=e=>{
        e.preventDefault();
      setCata(e.target.text.value);
      

    }
   
console.log(searchCata);
    return (
       
           <form action="" onSubmit={hanleSubmit} >
            <div className="flex ">
           <input  type="text" name="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mr-7" /> 
           <input type="submit" className="btn bg-[#FF444A] "/>
           </div>
           </form>
      
    );
};

export default BannarSearch;