import { Component } from '@angular/core';

@Component({
  selector: 'app-perf',
  standalone: true,
  imports: [],
  templateUrl: './perf.component.html',
  styleUrl: './perf.component.scss'
})
export class PerfComponent {

}
Normal case:

Example-

@Component({
selector: 'my-app'
template: `
<h1>{{getTitle(framework)}}</h1>
<button (click)="changeFramework()">Change Framework</button>
<hr>
<h4>Number: {{count}}</h4>
<button (click)="counterAdd()">Add</button>
`,
})
export class AppComponent {
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
}

with this library, we can achieve it like-

getTitle = memoizee(function (framework: string) {
console.log('getTitle is called');
return `I love ${framework.toUpperCase()}`;
});

We can also use TypeScript Decorator-

Let create a decorator memoize:

import * as memoizee from 'memoizee';

export function memoize() {
return function(target, key, descriptor) {
const oldFunction = descriptor.value;
const newFunction = memoizee(oldFunction);
descriptor.value = function () {
return newFunction.apply(this, arguments);
};
};
};

And all we need to do is just apply the decorator @memoize() :

@memoize()
getTitle(framework: string) {
console.log('getTitle is called');
return `I love ${framework.toUpperCase()}`;
}

export function memoize(config?) {
  return function(target, key, descriptor) {
  const oldFunction = descriptor.value;
  const newFunction = memoizee(oldFunction, config);
  descriptor.value = function () {
  return newFunction.apply(this, arguments);
  };
  };
  };



  Example-

import * as memoizee from 'memoizee';

constructor(){
function add(a: number, b: number): number {
console.log('add is called');
return a + b;
}

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