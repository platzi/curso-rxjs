/**
 * Operadores: mergeWith, mergeAll y mergeMap
 * https://rxjs.dev/api/index/function/mergeWith
 * https://rxjs.dev/api/index/function/mergeAll
 * https://rxjs.dev/api/index/function/mergeMap
 */

import { from, fromEvent, interval } from "rxjs";
import { mergeWith, map, mergeAll, mergeMap } from "rxjs/operators";

// Aplicando mergeWith()
// const onClick$ = fromEvent(document, "click").pipe(map((event) => event.type));
// const onMouseMove$ = fromEvent(document, "mousemove").pipe(
//   map((event) => event.type)
// );

// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);
// const eventDocument$ = onMouseMove$.pipe(mergeWith(onClick$));

// Aplicando mergeAll()
// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrden$ = ordenSuperior$.pipe(mergeAll());

// primerOrden$.subscribe(console.log);

// Aplicando mergeMap()
const letras$ = from(["A", "B", "C"]);
const resultado$ = letras$.pipe(
  mergeMap((letter) => interval(1000).pipe(map((second) => letter + second)))
);

resultado$.subscribe(console.log);
