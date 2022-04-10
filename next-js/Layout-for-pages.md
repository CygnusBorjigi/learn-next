


# Page Layout & HTML Head

A layout can be thought of as a template for pages. It is a structure that incorporate the rendered page component, where parameters can be passed in.

## Step 1: Create the layout

In the `component` folder we create a file named `Layout.js`. There, we can import the `Head` component. The head component is a way for us to edit the `<Head>` tag in the `HTML` file.

```javascript
import Head from 'next/head';

export default function Layout({ title, keyowrds, description, children }) {
	
}
```

Notice the `children` property we pass in to the function. The reason being, as mentioned above, we need the layout to wrap around the rendered page components and the `children` in this case are those renders.

```javascript
import Head from 'next/head';

export default function Layout({ title, keyowrds, description, children }) {
	return(
		<div>
			<Head>
				<title>{ title }</title>
				<meta name="description" content={ description } />
				<meta name="keywords" content={ keywords } />
			</Head>
			{ children }
		</div>
	)
}
```

After that, we can create some default values for those properties. To do that, we add the following code after the `Layout` function.

```javascript
Layout.defaultProps = {
	title: "notes",
	description: "Notes taken when learning next js",
	keyword: "learning, next.js"
}
```

## Step 2: Using the layout

To use the layout we simply import it into any page components we would like and instead of using a `div` to wrap around the content of that page, we use the layout component.

```javascript
import Layout from '../component/Layout";

export default function SomePage () {
	return (
		<Layout>
			// The contents of that page
		</Layout>
	)
}
```

