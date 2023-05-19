### Babel

    Transpiler which converts jsx code to javascript newer version to standard older one..

    To use babel cdn link-->

    	<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    	<script type="text/babel"></script>  write jsx code here to convert into js...

### Jsx

    write html in javascript

### React

    js library to work with ui..Only have set of packages..

    we have to install third party packages to work around..


    Framework has everything inside it.we need not to install any outside packages...


    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    cdns for react and react dom... react dom for handling dom gracefully

_Every component name starts with capital letter_

```javascript
let jsxel = <p style={{ color: "white" }}>hello world</p>;
```

_we need to write 2 {}.. first one for jsx expression second one for key value.._

```javascript
let div = document.getElementById("root")

ReactDOM.render(<jsxel>, div);
```

First parameter in render = what to render,Second parameter = where to render

**Entire react app only have one html page.**

| npm                                                                                                                                     | npx                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you wish to run package through npm then you have to specify that package in your package.json and install it locally.               | A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically. |
| To use `create-react-app` in npm the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required). | In npx you can create a react app without installing the package: `npx create-react-app myApp`. This command is required in every app’s life cycle only once.           |
| Npm is a tool that use to install packages.                                                                                             | Npx is a tool that use to execute packages.                                                                                                                             |
| Packages used by npm are installed globally. You have to care about pollution in the long term.                                         | Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.                                                          |

**Recommended to use npx while creating react app**

```
mkdir project1
cd project1
npx create-react-app myApp
```

It will create multiple files in the myApp folder..

1. _public folder_

   We have index.html,manifest.json and robots.txt

   A robots.tx t file is a web standard file that tells search engine crawlers, like Google bots, which pages they can or cannot crawl (web scraping).

   manifest.json which contains the necessary metadata for your PWA. Web app manifests can be automatically generated using PWA manifest generator.

   ### SPA VS PWA

   **SPA (Single Page Application) is a website whose current page is updated dynamically rather than being entirely downloaded from a server. In other words, all the necessary application code for your web application (HTML, CSS, JavaScript) needs to be loaded only once. As the user navigates through the web application, all contents and elements that need updating are fetched and re-rendered without requiring the user to reload the browser.**

   **Progressive Web Application (PWA) is a type of web app that can operate both as a web page and mobile app on any device. It is a great solution for poor mobile UX and low conversion rates in your online store.
   Ex- Youtube, Twitter we can install them... When we open these sites there is an icon in url bar to install..**

2. _src folder_

   Contains App.js,App.css, index.js, index.css and some testing files.

3. _package.json_

   The “package. json” file defines the rules required to run your application and install dependencies.

4. _package-lock.json_

   On the other hand, the “package-lock.json” file holds detailed information on all the dependencies installed based on the package.

5. _node_modules folder_

6. _.gitignore_ file

7. _Readme.md_ file

### what is noscript in index.html

    We can disable html,css,js in our web browsers using disable html chrome extension..

    So if any web browsers disbaled js then the content in noscript tag will display..

    <noscript>Enable Javascript to run</noscript>

### Commenting in React

Method 1: //

Method 2: /\* \*/

Method 3: If above both doesn't work in render block we use {/\* React Fragment Comment\*/}
