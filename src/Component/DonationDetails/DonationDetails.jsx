import { useLoaderData } from "react-router-dom";


const DonationDetails = () => {

    const donation = useLoaderData();
    const { title, image, description, text_colour , price} = donation

    return (
        // 'url({image})'
        <>
            <div className="mx-auto container">
                <div className="">
                   <div className="relative">
                   <button style={{ backgroundColor: text_colour }} className="btn absolute z-10 bottom-9 left-9 border-none rounded-sm text-white normal-case" >Donate $ {price}
                   </button>
                  
                    <div className="relative ">

                        {/* <img src="base-image.jpg" alt="Base Image" class="w-full"> */}

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

        </>
    );
};

export default DonationDetails;