/**
 * Operadores: takeUntil
 * https://rxjs.dev/api/operators/takeUntil
 */

import { fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

const onMouseMove$ = fromEvent(document, "mousemove");
const onMouseDown$ = fromEvent(document, "mousedown");

// A través de takeUntil() definimos que cada vez que un evento es enviado por onMouseDown$
// el observable sourceCompleted$ será completado. Y por consiguiente no emitirá más valores (línea 15).
const sourceCompleted$ = onMouseMove$.pipe(takeUntil(onMouseDown$));
sourceCompleted$.subscribe(console.log);
