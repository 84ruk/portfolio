const { response } = require("express");
const Contact = require("../models/contact");

const contact = async (req, res = response) => {

    const { name, email, message } = req.body;

    try{
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(200).json({
            ok: true,
            contact
        });
    
    } catch (error) {
        console.error('Error en el servidor:', response.data);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }

  };

  
module.exports = {
    contact
}