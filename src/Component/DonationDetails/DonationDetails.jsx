import { useLoaderData, useParams } from "react-router-dom";
import saveData from "../../utilities/Utilites"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getStoreddata from "../../utilities/getelemen";

const DonationDetails = () => {

    const lodeddata = useLoaderData();
    const donations= lodeddata.donations
    const {singelId} = useParams();
    console.log('id',singelId, 'donations', donations)
    const donation = donations.find(obj=>obj.id === parseInt(singelId))
    const {id,category,image,title,description,price,background_colour,button_background_colour,text_colour,category_background_colour}=donation
    console.log(Object.keys(donation).join(","))
    console.log(donation)
    
   
    const handleclick=() =>{
        
        const storeDonationData = getStoreddata();
    const exist = storeDonationData.find(Id =>Id===id)
    if(!exist)
    {
       toast('Donation added')
    }
    else{
        toast('this donation is already added')
    }
    saveData(id);      
       
    }

    return (
       
        <>
       
            <div className="mx-auto container">
                <div className="">
                   <div className="relative">
                   <button 
                   style={{ backgroundColor: text_colour }} className="btn absolute z-10 bottom-9 left-9 border-none rounded-sm text-white normal-case" onClick={handleclick}>Donate $ {price}
                   </button>
                  
                    <div className="relative ">

                      

                        <img className="h-screen w-full " src={image} alt="" />

                        <div className="absolute bottom-0 left-0 w-full h-28 flex items-center justify-center bg-black opacity-40">

                        </div>
                    </div>
                   </div>
                </div>
                <div className="my-12">
                    <h1 className="text-4xl font-bold mb-8">{title}</h1>
                    <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime sed, ab veritatis aliquam consectetur deserunt ipsa officia repellat voluptatum quas nihil aut obcaecati mollitia aliquid voluptatem distinctio odio nam itaque laboriosam sit vel ea! Officiis rem quasi magni accusantium natus odit, rerum beatae, voluptatibus reiciendis quod debitis? Molestias enim harum, eaque natus explicabo nesciunt, vero obcaecati eveniet quo, fugiat iusto officia quidem numquam beatae! Aperiam distinctio, aliquam laborum mollitia dolores pariatur et maxime dolor! Iste at doloribus numquam esse, amet in voluptatum ratione fugit id ullam error asperiores incidunt voluptatibus aperiam aliquid earum assumenda accusamus soluta dolore quia suscipit.</p>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </>
    );
};

export default DonationDetails;