import { Viaje } from "../models/viaje.js";
import db from "../config/db.js";

const paginaInicio = (req, res) => { // req - lo que enviamos, res - lo que express nos responde 
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 
    // Consultar bases de datos
    const viajes = await Viaje.findAll({ raw: true });

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

const paginaTestimoniales = (req, res) => { 
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}