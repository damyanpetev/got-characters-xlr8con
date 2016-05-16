# GoT Characters Helper Demo

> Purely for educational purposes but mostly for the entertainment value. 

Simple Angular 2 demo project, based on the [QuickStart](https://github.com/angular/quickstart) project and 
used for my "Angular 102" session at [XLR8 Conference 2016](http://xlr8con.com/#tracks).

Demo `@Component` renders a fairly short list of main characters allowing to swap to 
alternative/popular names (sometimes the only ones I can remember) and of course you can
off a character using a truly killer `@Directive` functionality :)
![](http://s2.quickmeme.com/img/63/63c0b7ea44b06f594ea182c6e10aa1a3fa23a7ed5a894eeb3957b481f00cd2fb.jpg)

Below is an excerpt from the original [README](https://github.com/angular/quickstart/blob/a93c713afafb8838ac5f9f87211a00effe2b2d99/README.md) for quick setup reference:

---

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run webdriver:update` - ONE TIME update for protractor end-to-end (e2e) tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)