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

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params

    try {   
        const viaje = await Viaje.findOne({where: {slug}});

        res.render('detalleViaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch(error) {
        console.log(error);
    }
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
    paginaDetalleViaje,
    paginaTestimoniales
}