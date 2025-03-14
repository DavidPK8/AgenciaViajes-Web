import { Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => { // req - lo que enviamos, res - lo que express nos responde 
    // Consultar tres viajes del modelo viaje
    
    const promiseDB = [];
    
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        // const viajes = await Viaje.findAll({limit: 3})
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch(error) {
        console.log(error);
    }
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

const paginaTestimoniales = async (req, res) => { 
    try {
        const testimoniales = await Testimonial.findAll();
        
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch(error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}