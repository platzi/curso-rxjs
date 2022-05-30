/**
 * Observables: fromEvent
 * El método fromEvent nos permite generar observables que capturan eventos del DOM.
 * https://rxjs.dev/api/index/function/fromEvent
 */
import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, "keydown");

const observadorMouse = {
  next: (event) => {
    console.log(event.key);
  },
};

onKeyDown$.subscribe(observadorMouse);
