const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de Nodemailer pour envoyer des emails via Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'epay39209@gmail.com',  // Ton email
        pass: 'bfic klia qoqs esxl'  // Ton mot de passe
    }
});

// Route pour afficher la page d'inscription
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html'); // Remplace avec ton fichier HTML d'inscription
});

// Route pour envoyer l'e-mail de confirmation après inscription
app.post('/send-confirmation-email', (req, res) => {
    const email = req.body.email;

    // Configuration de l'email de confirmation
    const mailOptions = {
        from: 'epay39209@gmail.com',  // Ton email
        to: email,
        subject: 'Confirmation d\'Inscription',
        text: `Bonjour,\n\nMerci de vous être inscrit avec l'email ${email}. Votre inscription a bien été prise en compte.\n\nCordialement,\nL'équipe`
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email envoyé: ' + info.response);
        res.send('Inscription réussie! Un email de confirmation a été envoyé.');
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
