/**
 * Operadores: startWith y endWith
 * https://rxjs.dev/api/operators/startWith
 * https://rxjs.dev/api/operators/endWith
 */
import { of, from } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// const letters$ = of("A", "B", "C", "D").pipe(startWith("Z"));
const letters$ = of("A", "B", "C", "D").pipe(endWith("Z"));
letters$.subscribe(console.log);
