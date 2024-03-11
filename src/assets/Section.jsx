// importamos el componente Article y el archivo data
import Article from "./Article.jsx";
import data from "../data.js";

const Section = () => {
    return (
        <>
            <main>
                <section>
                    <div className="title">
                        <h2>Nuestros Tours</h2>
                        <div className="underline"></div>
                    </div>
                    {data.map(tour => (
                        (tour.info) && // utilizamos AND para renderizar solo los articulos que contengan informacion
                        // para cada elemento en data, crearemos un componente Article pasandolo los datos correspondientes
                        <Article
                            key={tour.id} // clave unica para cada componente de React
                            name={tour.name} // pasaremos la prop para nombre
                            price={tour.price ? tour.price : 'A consultar'} // mostraremos el precio o 'a consultar' dependiendo si hay precio o no
                            // comprobamos si hay imagen y si no hay mostramos la imagen generica
                            image={tour.image ? tour.image : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                            info={tour.info} // pasamos la prop info
                            clase={tour.destacado ? 'single-tour destacado' : 'single-tour'} // pasamos la prop correspondiente a la clase si destacado es true
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Section;