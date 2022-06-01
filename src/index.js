/**
 * Manejo de errores en RxJS
 * https://rxjs.dev/api/operators/catchError
 * https://rxjs.dev/api/operators/retry
 */
import { of, catchError, map, retry } from "rxjs";

const letters$ = of("A", "B", "C", "D", "E").pipe(
  map((letter) => {
    if (letter === "D") {
      x = 4;
    }
    return letter;
  }),
  retry(2),
  catchError((error) => of(error.message))
);

letters$.subscribe(console.log);
