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
                        // Por cada objeto en data, creamos un componente Article con los datos correspondientes
                        <Article
                            key={tour.id} // Es importante proporcionar una clave única para cada componente en un bucle
                            name={tour.name}
                            price={tour.price ? tour.price : 'A consultar'}
                            image={tour.image ? tour.image : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                            info={tour.info}
                            clase={tour.destacado ? 'single-tour destacado' : 'single-tour'}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Section;