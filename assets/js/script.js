function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*-----Dark mode-----*/
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*----Typing Effect----*/
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/*---------------Scroll Animation----*/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*----Active Link-----*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*----WhatsApp Redirection-----*/
function openWhatsApp() {
    const phoneNumber = "51938914459";
    const message = encodeURIComponent("¡Hola Ingrid! Me gustaría contactarte.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
}

/*----CV Download-----*/
function downloadCV() {
    const cvUrl = "assets/cv/CV-INGRID CRUZ.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Ingrid-CV.pdf";
    link.click();
}

/*----Enviar Correo-----*/
function enviarCorreo() {
    console.log("➡️ Función enviarCorreo() ejecutada");

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos.");
        console.log("❌ Campos incompletos");
        return;
    }

    console.log("✔️ Campos completos, enviando correo...");

    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, asunto, mensaje }),
    })
        .then((response) => response.text())
        .then((result) => {
            alert("¡Correo enviado con éxito! ✅");
            console.log("✅ Resultado:", result);
            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("asunto").value = "";
            document.getElementById("mensaje").value = "";
        })
        .catch((error) => {
            alert("Hubo un problema al enviar el correo.");
            console.error("❌ Error:", error);
        });
}
