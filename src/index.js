/**
 * Fetch API en RxJS
 * Operadores: fromFetch
 * https://rxjs.dev/api/fetch/fromFetch
 */
import { mergeMap, takeUntil, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";

// Petición HTTP con un retraso de 4 segundos.
const url = "https://httpbin.org/delay/4";
const ditto$ = fromFetch(url).pipe(
  mergeMap((response) => {
    return response.json();
  }),
  takeUntil(timer(6000)) // ⬅️ Puedes modificar la cantidad de milisegundos
                         //   para abortar una petición HTTP enviada.
);

ditto$.subscribe(console.log);
