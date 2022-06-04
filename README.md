<h1 align="center">💡 Curso RxJS 💻</h1>

<p align="center">
  Repositorio del Curso de Programación Reactiva con RxJS
</p>

👋 ¡Hola! Este repositorio contiene todos los ejercicios prácticos realizados con la librería RxJS.

## Ramas de las clases

| **Clase**                                                            | **Rama**                                                   |
| -------------------------------------------------------------------- | ---------------------------------------------------------- |
| Creación de un Observable                                            | `6-Creacion-de-un-Observable`                              |
| Observables: fromEvent                                               | `8-Observables-fromEvent`                                  |
| Observables: Subject                                                 | `10-Observables-Subject`                                   |
| Observables: from y of                                               | `12-Observables-from-of`                                   |
| Observables: interval y timer                                        | `13-Observables-interval-time`                             |
| Operadores: map, reduce y filter                                     | `17-Operadores-map-reduce-filter`                          |
| Operadores: distinct, distinctUntilChanged y distinctUntilKeyChanged | `19-distinct-distinctUntilChanged-distinctUntilKeyChanged` |
| Operadores: throttleTime, sampleTime, auditTime y sampleTime         | `20-debounce-throttle-audit-sample-time`                   |
| Operadores: mergeWith, mergeAll y mergeMap                           | `21-mergeWith-mergeAll-mergeMap`                           |
| Operadores: takeUntil                                                | `23-Operadores-takeUntil`                                  |
| Operadores: pluck                                                    | `25-Operadores-pluck`                                      |
| Operadores: startWith y endWith                                      | `26-Operadores-startWith-endWith`                          |
| Manejo de errores con RxJS                                           | `29-Manejo-de-errores-RxJS`                                |
| AJAX                                                                 | `30-ajax`                                                  |
| fromFetch                                                            | `31-fromFetch`                                             |

## Guía de instalación del proyecto

> 💡 Sigue los siguientes pasos para crear este proyecto desde cero.

> 🥽 Si sólo quieres revisar el código de alguna clase, pues clonar este repositorio y ejecutar `npm install` en la carpeta.

1. Instala las dependencias:

```console
npm i rxjs webpack webpack-dev-server
npm i -D webpack-cli
```

2. Genera un `webpack.config.js` dentro del proyecto:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
};
```

3. Genera las siguientes carpetas y archivos como se muestra en esta estructura:

```console
public/
    index.html
src/
    index.js
webpack.config.js
```

4. Añade la fuente JavaScript al `index.html`:

```html
<script src="./bundle.js"></script>
```
