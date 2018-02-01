
# mirror v0.0.1 

Forward a property to another object.

Functions are bound to the source object.

```js
const src = {
  foo: 0,
  bar: function() {
    return this.foo
  }
}

const dest = {}
mirror('bar', src, dest)

dest.bar() // => 0

dest.foo = 1
dest.bar() // => 0

src.foo = 1
dest.bar() // => 1

mirror('foo', src, dest)

dest.foo = 2
dest.bar() // => 2

src.foo = 3
dest.foo // => 3
```

