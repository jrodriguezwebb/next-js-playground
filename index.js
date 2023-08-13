const miPaginaHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <div id="app">
            <h1>este es mi titulo</h1>
            asdsad
            qwewqeqw
            fghgfhfg
        </div>

        <script type="text/javascript">
            const app = document.getElementById("app");

            // Create a new H1 element
            const header = document.createElement('h1');

            // Create a new text node for the H1 element
            const headerContent = document.createTextNode(
                'Develop. Preview. Ship. 🚀',
            );

            // Append the text to the H1 element
            header.appendChild(headerContent);

            // Place the H1 element inside the div
            app.appendChild(header);
        </script>
    </body>

</html>
`;

// console.log(miPaginaHTML);

// const fs = require("fs");

// const callBack = (err) => {
//   if (err) {
//     console.error("Fallo de escritura error: " + err);
//   } else {
//     console.log("Se creó correctamente");
//   }
// };

// if (fs.existsSync("index3.html")) {
//   fs.unlink("index3.html", (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log("Delete File successfully.");
//   });
// }

// fs.appendFile("index3.html", miPaginaHTML, callBack);

const miObejetico = { nombre: "Chiquito", edad: "18" };

// let nombre = miObejetico.nombre;
// let edad = miObejetico.edad;

({ nombre, edad } = miObejetico);

console.log(`${nombre} ${edad}`);

const nombres = ["Pedro", "Juan", "Pepito"];

const arrayModificado = nombres.map((nombre) => {
  return `${nombre} el guapo`;
});

arrayModificado.forEach((nombre, i) => {
  console.log(nombre, i);
});
