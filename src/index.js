/**
 * Operadores: debounceTime, throttleTime, auditTime y sampleTime
 * https://rxjs.dev/api/operators/debounceTime
 * https://rxjs.dev/api/operators/throttleTime
 * https://rxjs.dev/api/operators/auditTime
 * https://rxjs.dev/api/operators/sampleTime
 */

import { fromEvent } from "rxjs";
import {
  debounceTime,
  throttleTime,
  auditTime,
  sampleTime,
} from "rxjs/operators";

const onClick$ = fromEvent(document, "click").pipe(
  // debounceTime(4000),
  // throttleTime(4000),
  // auditTime(4000),
  sampleTime(4000)
);

onClick$.subscribe(console.log);
