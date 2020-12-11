# Markdown Links

## Índice

* [1. Acerca del proyecto](#1-acerca-del-proyecto)
* [2. Flowchart](#2-flowchart)
* [3. Backlog de la implementación](#3-backlog-de-la-implementación)
* [4. Documentación técnica](#4-documentación-tecnica)
* [5. Instalación](#5-instalación)

***

## 1. Acerca del proyecto

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Se ha desarrollado esta herramienta usando Node.js, para que lea y analice archivos en dicho formato y así verificar los links que contengan y reportar algunas estadísticas.

## 2. Flowchart

### Flowchart de API
  ![flowchart](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/flowchartApi.png)
### Flowchart de CLI
  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/flowchartCli.png)

## 3. Backlog de la implementación

* Toda la planificación del proyecto se llevo a cabo en github, agrupando `issues` 
en `milestone`.

  *  Organization and creation of the flowchart
  *  Architecture and boilerplate
  *  Create API
  *  API publication and test
  *  Create CLI
  *  Cli publication
  *  Readme and project completion

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/github.png)


## 4. Documentación técnica

### JavaScript API

* La función `mdLinks(path, options)`es un promesa que recibe como argumento un path y un objeto con una propiedad validate de  valor TRUE o FALSE, en ausencia del segundo argumento se le asigna por defecto el valor de FALSE a dicha propiedad.

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, se resuelve como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

* En el siguiente ejemplo se llama a la función mdLinks con solo el primer argumento `mdLinks(path)`

```js
mdLinks('D:/md-prueba')
  .then((err) => { 
    console.log(err); 
    })
  .catch((error) => { 
    console.log(error);
    });
```
  - En caso de que el path ingresado sea inválido dara como resultado un mensaje de error `The path entered is not found`.

  - En caso de que el path sea válido se resolvera un array con un objeto por cada link encontrado que tenga como propiedad información básica de cada link ` [{ href, text, file } ...]`.

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/APi.png)

* En el siguiente ejemplo se llama a la función mdLinks con los dos argumentos  `mdLinks(path, options)`

```js
mdLinks('D:/md-prueba', { validate: true})
  .then((err) => { 
    console.log(err); 
    })
  .catch((error) => { 
    console.log(error); 
    });
```
  - En caso que el segundo argumento ingresado diste del valor de true o false , o no tenga el formato incorrecto dará como resultado el siguiente mensaje de error `The second argument only allows an object with true or false property value`.

  - En caso de que los argumentos sean correctos la función resolverá un array con un objeto por cada link encontrado que tenga como propiedad información básica y validada de cada link ` [{ href, text, file, status, message } ...]`.

    ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/ApiValidate.png)

### CLI (Command Line Interface - Interfaz de Línea de Comando)

* El ejecutable de la aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal: `md-links <path> [options]`.
  - `path`: Ruta válida absoluta o relativa a directorio o file.
  - `options`: Puedes tomar los siguiente valores.

    * [] --validate || --v || --V
    * [] --stats || --s || --S
    * [] Combinación de las dos opciones anteriores

* Cuando en la terminal se ingresa `md-links <path>`, la aplicación mostrará en la terminal por defecto la ruta donde se encuentran los links del los archivos `.md` `( file )` , los links encontrados `( href )` y a su vez el texto del link `( text )` truncado en 50 caracteres.

  * `href`: URL encontrada.
  * `text`: Texto que aparecía dentro del link.
  * `file`: Ruta del archivo donde se encontró el link.
  
  - Ejemplo

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/noOpts.png)

* Cuando en la terminal se ingresa la opción` --validate`, la aplicación mostrará en la terminal la ruta donde se encuentran los links del los archivos `.md` `(file)` , los links encontrados `( href )`, el texto `( text )` y a su vez validará cada link proporcionandonos un `(status)` y un `( message )`.

  * `status`: Código de estado de respuesta HTTP.
  * `message`: Ok o Fail.

  - Ejemplo

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/validate.png)

* Cuando en la terminal se ingresa `--status `, la aplicación mostrará en la terminal el total de links encontrados 
`( Total )` y la cantidad de links que no se repiten ` ( Unique )`

  - Ejemplo

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/stats.png)

* Cuando en la terminal se ingresa `--validate --status `, la aplicación mostrará en la terminal el total de links encontrados `( Total )`, la cantidad de links que no se repiten ` ( Unique )` y adicionara los links rotos `( Broken )`.

  - Ejemplo

  ![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/validateAndStats.png)



## 5. Instalación

* La librería y aplicación `md-links` se pueden de dos maneras, para poder proceder con la instalación es importante que este instalado `npm` que viene por defecto al instalarse `node`.

  * instalación por Github

    * `npm install consuelogoche-1994/LIM013-fe-md-links`

    * Para hacer uso de la API es necesario importar con 
      ` const md = require('md-links-cg') `.
    
  * instalación por `NPM`

    * `npm i md_links_cg`

      
