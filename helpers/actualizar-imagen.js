
const fs = require('fs')

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');


const borrarImagen = (path) => {
    if( fs.existsSync(path)){
        //borrar la imagen antigua
        fs.unlinkSync(path);
    }
}

const actualizarImagen = async(tipo, id, nombreArchivo) =>{

    let pathViejo;
    switch( tipo ){
        case 'medicos':
            const medico = await Medico.findById(id);
            if(!medico){
                console.log('No es médico por id');
                return false;
            }
            pathViejo = `./uploads/medicos/${medico.img}`;

            borrarImagen(pathViejo);

            medico.img = nombreArchivo;
            await medico.save();
            return true;
       

        case 'hospitales':
            const hospital = await Hospital.findById(id);
            if(!hospital){
                console.log('No es hospital por id');
                return false;
            }
            
            pathViejo = `./uploads/hospitales/${hospital.img}`;

            borrarImagen(pathViejo);

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;
        

        case 'usuarios':
            const usuario = await Usuario.findById(id);
            if(!usuario){
                console.log('No es usuario por id');
                return false;
            }
            
            pathViejo = `./uploads/usuarios/${usuario.img}`;

            borrarImagen(pathViejo);

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;
        
    }
}


module.exports = {
    actualizarImagen
}