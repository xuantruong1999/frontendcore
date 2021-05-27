export default function Banner({image, alt}){
    return(
        <>
            <section className="">
                <img src={image} alt={alt} className="h-100 w-100"/>
            </section>
        </>
    );
}