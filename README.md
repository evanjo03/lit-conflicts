# lit-conflicts

The gist of the issue is, I have a package that I am upgrading to lit 2.  That package has a custom element dependency that uses legacy lit-element/lit-html.  This legacy package also has a dependency on a package that is vending a CSS template that it is consuming as part of its styles.  Here's the dependency structure:

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

When I serve the root-component, I receive the following error, which seems to suggest that the CSSResults are incompatible:

![lit_css_error](https://user-images.githubusercontent.com/42701217/156805278-f6ee5a06-b70b-4b28-93e0-661cd16f9758.JPG)

# Steps to Recreate

```
git clone https://github.com/evanjo03/lit-conflicts.git

cd lit-conflicts/root-component

npm i

npm run tsc && npm run start
```
