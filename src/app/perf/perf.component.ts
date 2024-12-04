import { Component } from '@angular/core';
import memoizee from 'memoizee';

export function memoize(config?) {
  return function(target, key, descriptor) {
  const oldFunction = descriptor.value;
  const newFunction = memoizee(oldFunction, config);
  descriptor.value = function () {
  return newFunction.apply(this, arguments);
  };
  };
  };

@Component({
  selector: 'app-perf',
  standalone: true,
  imports: [],
  templateUrl: './perf.component.html',
  styleUrl: './perf.component.scss'
})
export class PerfComponent {
  constructor(){
    function add(a: number, b: number): number {
    console.log('add is called');
    return a + b;
    }

    const memoizedAddImplicitCaching = memoizeAdd();

console.log(memoizedAddImplicitCaching(3, 4));  // Computes and caches the result.
console.log(memoizedAddImplicitCaching(3, 4));  // Retrieves the result from cache.
console.log(memoizedAddImplicitCaching(5, 6));  // Computes and caches a new result.
console.log(memoizedAddImplicitCaching(3, 4));  // Still retrieves the result from cache.

const memoizedAddExpensiveFunction = memoizeDecoratorFunc(add);

console.log(memoizedAddExpensiveFunction(3, 4));  // Calculates and caches the result.
console.log(memoizedAddExpensiveFunction(3, 4));  // Returns the cached result.
console.log(memoizedAddExpensiveFunction(5, 6));  // Computes and caches a new result.
console.log(memoizedAddExpensiveFunction(3, 4));  // Still retrieves the result from cache

    const memoizedAdd = memoizee(add);

    memoizedAdd(1,2); // log "add is called"
    memoizedAdd(1,2); // cache hit, not logging
    memoizedAdd(1,3); // log "add is called"

    var fn = function(one, two, three) {
    /* ... */
    console.log(one, two, three);
    };

    const memoized = memoizee(fn);

    memoized("foo", 3, "bar");
    memoized("foo", 3, "bar"); // Cache hit

    memoized.delete("foo", true);
    memoized.clear();
    }
framework = 'Angular';
count = 0;

getTitle(framework: string): string {
console.log('getTitle is called');
return `I love ${framework.toUpperCase()}`;
}

changeFramework() {
if (this.framework === 'Angular') {
this.framework = 'React';
} else {
this.framework = 'Angular';
}
}

counterAdd() {
this.count += 1;
}


// with this library, we can achieve it like-

// getTitle = memoizee(function (framework: string) {
// console.log('getTitle is called');
// return `I love ${framework.toUpperCase()}`;
// });

// And all we need to do is just apply the decorator @memoize() :

// @memoize()
// getTitle(framework: string) {
// console.log('getTitle is called');
// return `I love ${framework.toUpperCase()}`;
// }
// We can also use TypeScript Decorator. create a decorator memoize:
}


function memoizeAdd() {
  const cache = {};

  return function memoizedAdd(a, b) {
    const key = `${a},${b}`;

    if (key in cache) {
      return cache[key];
    } else {
      const result = a + b;

      cache[key] = result;

      return result;
    }
  };
}

// support higher-order functions, you can use decorators to add memoization without changing the function's core logic.
function memoizeDecoratorFunc(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}





