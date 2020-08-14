# imagine-in 🤔💭

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![Current Year](https://img.shields.io/badge/current%20year-2020-red)

A simple package for when you need a little help expressing yourself.

## Installation

**_Please follow these steps exactly._** Failure to complete every step of this
installation guide _exactly as it is written_ could result in imagine-in not
working! If you run in to issues, I _guarantee_ that installing `imagine-in` is
where you went wrong.

Step 1:

```
npm i imagine-in
```

## Recommended Usage

According to Senior Software Engineer(s) working at FAANG companies (whose
identities will remain anonymous), "imagine" statements can often be employed
with great effect when trying to avoid performing tasks or using technologies
that are undesirable. Examples include (but are not limited to):

-   using Angular
-   using Redux
-   having standup

Similarly, you can _negate_ a statement to express preference:

-   not using TypeScript
-   not using Svelte

`imagine-in` makes expressing these sentiments easier than ever. To get started,
you'll want to import imagine-in's top-level API.

```js
import imagine from 'imagine-in';
```

Then, give it a value you want to transform.

```js
imagine('using Angular');
// -> "Imagine using Angular in 2020."

imagine('using Redux');
// -> "Imagine using Redux in 2020."

imagine('having stand-up');
// -> "Imagine having stand-up in 2020."

imagine('not using TypeScript');
// -> "Imagine not using TypeScript in 2020."

imagine('not using Svelte');
// -> "Imagine not using Svelte in 2020."
```

It is recommended (_although not required_) that the input string begin with the
present progressive form of a verb. Spaces surrounding the main content of your
string are added automatically by the exposed `imagine()` function, so you need
not add them yourself!

Additionally, `imagine()` will coerce any input value to a string using
JavaScript's built-in `String()` function. If you don't like the result of that
coercion, do it yourself.

## Contributing

This package is considered complete in its current form, so no contributions
will be necessary. `imagine('contributing to open-source projects');`

If you want to contribute anyway, go ahead and make a PR.
