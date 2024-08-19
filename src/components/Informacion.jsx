import Teoria from "./Teoria";

const Informacion = ({comision,anioActual}) => {
    return (
        <article className="mt-4">
           <h2>Introducción comision: {comision}</h2>     
           <p>React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario. Se destaca por su enfoque en la creación de aplicaciones web de una sola página <b>SPA</b> y su capacidad para manejar la interfaz de manera eficiente mediante el uso de un <span className="palabraResaltada">DOM virtual</span>. React permite a los desarrolladores construir interfaces dinámicas y reactivas de forma modular, lo que facilita el desarrollo y el mantenimiento de aplicaciones a gran escala.</p>
           <p>Año de actualización: {anioActual}</p>
           <Teoria></Teoria>
        </article>
    );
};

export default Informacion;