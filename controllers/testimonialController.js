const guardarTestimonial = (req, res) => {
    // Validar..
    const {nombre, email, message} = req.body;
    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(email.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(message.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }
    
    if(errores.length > 0) {
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            message
        });

        return;
    }    
}

export {
    guardarTestimonial
}