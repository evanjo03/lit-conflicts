# lit-conflicts

The gist of the issue is, I have a package that is using lit 2.  That package has a custom element dependency that uses lit 1.  This legacy element also has a dependency on a package that is vending a CSS template that it is consuming as part of its styles.  Here's the dependency structure:

```bash
───root-component
    ├───lit-legacy-component
    │   ├───lit-element@^2.2.1
    │   ├───lit-html@^1.0.0
    |   └───lit-legacy-css-package
    |       ├───lit-html@^1.0.0
    │       └───lit-element@^2.2.1
    └───lit@^2.0.0
        ├───lit-element@^3.2.0
        └───lit-html@^2.2.0
```

When I serve the root-component, I receive the following error, which seems to suggest that the CSSResults are incompatible:

![image](https://user-images.githubusercontent.com/42701217/158411401-f6c9ba75-cbb4-4c15-92fa-c8b1e9f755ff.png)

# Steps to Recreate

```
git clone https://github.com/evanjo03/lit-conflicts.git

cd lit-conflicts/root-component

npm i

npm run tsc && npm run start
```
