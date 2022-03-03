# lit-conflicts

This repo was created to demonstrate issues I am having with lit and legacy versions of lit dependencies getting wires crossed.

The gist of the issue is, I have a package that I am upgrading to lit 2.  That package has a custom element dependency that uses legacy lit-element/lit-html.  This legacy package also has a dependency on a package that is vending a CSS template.  Here's the dependency structure:

```bash
───root-component
    ├───lit-legacy-component
    │   ├───lit-element@^2.2.1
    │   └───lit-legacy-css-package
    │       └───lit-element@^2.2.1
    └───lit@^2.0.0
        ├───lit-element@^3.2.0
        └───lit-html@^2.2.0
```

# Steps to Recreate

```
git clone https://github.com/evanjo03/lit-conflicts.git

cd lit-conflicts/root-component

npm i

npm run tsc && npm run start
```