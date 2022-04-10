setups & file structure
setups & file structure



# Setups & File structure

## Setup

In order to create a `next.js` app with tailwind css attached use the following command

```
npx create-next-app -e with-tailwindcss <directory-name>
```

The development server can be started using `npm run dev` command

## File Structure

When a new next.js app is created, it has the following main directories. 

#### package.json

This file contains all the dependencies of the project. And the scripts to speed up developments.

#### public folder

This folder contains everything that directly accessible by the browser.

#### pages folder 

The pages folder contains both the `api` and the `pages` route. This is the directory where most of the works will be done.

The `index.js` file in the pages folder is the home page of the web application. As in react, the `index.js` is a react functional component. 

The `_app.js` file is where the rendering starts. When the project is initialized, there will be a default line

```javascript
function MyApp ({ Components, pageProps }) {
	return <Component {...pagesProps}>
}
```

The `pageProps` in the code above is the whichever page is currently being rendered.



Setups & File structure
Setup
In order to create a next.js app with tailwind css attached use the following command

npx create-next-app -e with-tailwindcss <directory-name>
The development server can be started using npm run dev command

File Structure
When a new next.js app is created, it has the following main directories.

package.json
This file contains all the dependencies of the project. And the scripts to speed up developments.

public folder
This folder contains everything that directly accessible by the browser.

pages folder
The pages folder contains both the api and the pages route. This is the directory where most of the works will be done.

The index.js file in the pages folder is the home page of the web application. As in react, the index.js is a react functional component.

The _app.js file is where the rendering starts. When the project is initialized, there will be a default line

function MyApp ({ Components, pageProps }) {
	return <Component {...pagesProps}>
}
The pageProps in the code above is the whichever page is currently being rendered.

Markdown 1161 bytes 184 words 45 lines Ln 35, Col 0HTML 896 characters 174 words 19 paragraphs
