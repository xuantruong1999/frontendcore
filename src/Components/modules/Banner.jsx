export default function Banner({image, alt}){
    return(
        <>
            <section className="w-100">
                <img className="img-fluid w-100 h-100" src={image} alt={alt} />
            </section>
        </>
    );
}