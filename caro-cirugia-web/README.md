Web creada por el grupo del segundo cuatrimestre del 2023 de Tecnicas de Programacion del CFP18

A que se dedica:
Servicios de cirugía veterinaria.

Colaboradores:

- Diego Iacub
- Ignacio Zanella
- Federico Longarini
- Katherine Fernández de la Cruz
- Carolina Maffi

Investigación de páginas similares de referencia:

1. https://www.secmov.com/:
   Página de España. Ofrecen servicio de cirugía ambulante a diferentes veterinarias. No se si el formato es el más apropiado, pero si el tipo de servicio que brindan se acerca bastante a lo que necesitamos.
2. https://aunaespecialidadesveterinarias.es/servicios/cirugia/:
   Es un centro de especialidades veterinarias. En la parte de cirugías, me parece útil la descripción del tipo de cirugías que realizan. Y también la forma en que presentan a cada integrante del equipo.
3. https://vetmi.es/servicios:
   Servicio de cirugía veterinaria móvil. Brindan servicios a otras veterinarias.
4. https://www.jorgevallecirugiavet.com/:
   Servicios móviles de cirugía para centros veterinarios. Me pareció que están bien descriptas las cirugías que realizan y que podría servir como formato para eso.
5. https://www.cvpradodeboadilla.es/servicios-veterinarios/cirug%C3%ADa/:
   Ofrecen servicios veterinarios móviles varios, entre otros, de cirugía. Puede ser útil la parte en la que describe el tipo de cirugías que se ofrecen.
6. https://veteriastur.com/cirugia-veterinaria/:
   Si bien es de un centro veterinario que ofrece diferentes especialidades, y no de servicio brindado a veterinarias, puede ser útil la estructura de la página.
7. https://www.instagram.com/vetcx__/?hl=es:
   Si bien es un instagram, puede servir para la parte de presentar los casos clínicos.
   Tienen también un facebook: https://www.facebook.com/VetCx/?locale=es_LA
8. https://www.instagram.com/clinicaveterinarialasbrisas/?hl=es:
   Otra página de instagram con muy buen marketing.

                                                               Parte Fede

 Para la configuración del ESLINT es necesario usar en la consola del proyecto "npm i -D eslint" y luego aceptar e instalar las dependencias que necesite. Luego podemos configurar de qué forma se va a utilizar utilizando su propia herramienta, para esto tiramos en consola "npx eslint --init"
 De esta forma deberemos ir seleccionando las opciones que nos ofrece la herramienta en la consola.

 Ya podemos ver que se generan archivos como el ".eslintrc.js" que contiene toda la configuración de este linter. Ahora ya podemos corregir los errores en nuestro código, pero si queremos que nos marque estos errores deberemos instalar la extención de ESLint.

 En el archivo de la configuración del ESLint le agregué una regla donde nos marque como advertencia (warn) si encuentra variantes que no se están usando en nuestro código. Por supuesto podemos agregar o sacar las reglas que consideremos convenientes.

 Por otro lado, podemos usar Prettier para que nuestro código sea lindo y ordenado. Para esto "npm i -D prettier" Luego instalamos Prettier (todxs ya deberíamos tenerlo instalado jeje).

 Para que todo funcione correctamente se recomienda ir a configuración del VSCode y activamos la opción de "Format on save" y chequeamos que quede puesto solo para "file" en el renglón de abajo.

 Por último, para hacer que coexistan correctamente ESLint y Prettier tenemos que hacer la siguiente magia: instalamos el paquete "npm i -D eslint-config-prettier" y luego volvemos a .eslintrc.js y en la parte de "extends" le agregamos "eslint-config-prettier" y listo! de esta manera se queda con las reglas de Prettier por encima de las de ESLint.

 Mentira, no era lo último. Ahora sí, como cereza del postre. Agregué dos scripts en "package.json" para que simplemente usando en consola "npm run (nombre del script)" ejecute los mismos de manera automática. El script de format, como su nombre lo dice, formatea los archivos. Y el script de lint es para corregir (hacer linting) de todos estos archivos. Por supuesto creamos .prettierignore y .eslintignore para agregar los archivos que no queremos que se formateen ni se modifiquen, por ejemplo los que se van modificando automáticamente. Para esto simplemente los añadimos ahí.

 Fin del tutorial. Ante cualquier consulta consulten con el profe Diego :D
 Saludos! <3