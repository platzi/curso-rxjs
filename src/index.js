/**
 * Observables: interval y timer
 * https://rxjs.dev/api/index/function/interval
 * https://rxjs.dev/api/index/function/timer
 */
import { interval, timer } from "rxjs";

const sequenceNumbers$ = interval(200); // Emite valores numéricos cada 200 milisegundos.
const delayedTimer$ = timer(5000); // Retrasa un valor numérico por 5000 milisegundos.

sequenceNumbers$.subscribe(console.log);
delayedTimer$.subscribe(console.log);
