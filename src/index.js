/**
 * Observables: from y of
 * https://rxjs.dev/api/index/function/from
 * https://rxjs.dev/api/index/function/of
 */
import { from, of, asyncScheduler } from "rxjs";

// of genera un observable a partir de sus argumentos.
const vegetables$ = of("from", "eggplant", "onion", "corn");

// from genera un observable a partir de un arreglo de elementos.
// Scheduler *como argumento* en from() será obsoleto después de la RxJS v8.
const fruits$ = from(["apple", "tangerine", "pear", "banana"], asyncScheduler);

vegetables$.subscribe(console.log);
fruits$.subscribe(console.log);
