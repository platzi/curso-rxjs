/**
 * AJAX en RxJS
 * https://rxjs.dev/api/ajax/ajax
 */
import { ajax } from "rxjs/ajax";
import { of, map, catchError } from "rxjs";

// const ditto$ = ajax("https://pokeapi.co/api/v2/pokemon/itto").pipe(
//   map((data) => console.log(data.response)),
//   catchError((error) => {
//     console.log("Error: ", error.message);
//     return of(error);
//   })
// );

// ditto$.subscribe(console.log);

// https://pokeapi.co/api/v2/pokemon/ditto

const postRequest$ = ajax({
  url: "https://httpbin.org/delay/5",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    message: "¿Dónde está Ditto?",
  },
}).pipe(
  map((response) => {
    console.log(response);
    return response;
  }),
  catchError((error) => {
    console.log("Error: ", error.message);
    return of(error);
  })
);

postRequest$.subscribe(console.log);
