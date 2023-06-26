import {galleryData} from '../utils/data';



function Gallery(){
    const images = galleryData.map(image =>
        <div key={image.id} className="gallery overflow-hidden">
            <img
                src={image.imageId}
                alt={image.name} 
                width={350}
                height={500}
            />
        </div>
    );

    return(
        <section className="w-full h-[600px] bg-zinc-950 mt-[400px]  px-[10px] py-[20px]">
            <div className="w-[350px] mx-auto flex flex-wrap justify-center items-center sm:w-[400px] lg:justify-between lg:w-auto lg:mx-0 lg:mt-[100px]">
            {images}
            </div>
        </section>
    )
}

export default Gallery;