app.post("/send-email", (req, res) => {
    console.log("📩 Se recibió una solicitud de envío de correo.");
    const { nombre, email, asunto, mensaje } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tucorreo@gmail.com",
            pass: "tupassword",
        },
    });

    const mailOptions = {
        from: email,
        to: "tucorreo@gmail.com",
        subject: asunto,
        text: `De: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Error al enviar el correo:", error);
            res.status(500).send("Error al enviar el correo.");
        } else {
            console.log("✅ Correo enviado: " + info.response);
            res.status(200).send("Correo enviado correctamente.");
        }
    });
});

