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

* [ ] Organization and creation of the flowchart
* [ ] Architecture and boilerplate
* [ ] Create API
* [ ] API publication and test
* [ ] Create CLI
* [ ] Cli publication
* [ ] Readme and project completion

![flowchartCli](https://github.com/consuelogoche-1994/LIM013-fe-md-links/blob/master/img/github.png)


## 4. Documentación técnica

### Api

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

## 5. Instalación

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

