import BannarSearch from "../BannarSearch/BannarSearch";

import "./banar.css"

const Banar = () => {

  return (
    // hero-overlay
   <div>
    
    <div className="hero min-h-screen" style={{backgroundImage: 'url(./images/headerBg.png)'}}>
      
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
  
    <div className="justify-center">
   
      <h1 className="mb-5 text-5xl text-black font-bold ">I Grow By Helping People In Need</h1>
     <div className="sm:ml-12 md:ml-36">

     <BannarSearch></BannarSearch>
     </div>
    </div>
  </div>
</div>

</div>
  )










};

export default Banar;