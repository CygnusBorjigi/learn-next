


# Data Fetching

There are three data fetching functions in next.js `getStaticProps`, `getStaticPaths`, and `getServerSideProps`.

### getServerSideProps

This function fetches data in real time on request. Therefore, it is used to build dynamic websites. The function is required to have a return value that is a json file. And to fetch data, we use the `fetch` function.

```javascript
export async function getServerSideProps ({ req, res }) {
	const res = await fetch("http://localhost:3000/api/notes");
	const notes = await res.json();

	return (
		{
			props: { notes }
		}
	)
}
```

Notice that this function have assess to the request and responds since it is run on the server. But we can catch the `props` in the return value directly in the component function.

```javascript
export default function HomePage({ notes }) {
	console.log(notes);
}
```

And this function is going to be rendered everything times a browser reaches this page.

### getStaticProps

This function fetches data on build time. Which means is fetches the data when the page is being build for the browser. Therefore, this function can be used for static website.

Something similar to the example above can be accomplished using this function

```javascript
export async function getStaticProps ({ req, res }) {
	const res = await fetch("http://localhost:3000/api/notes");
	const notes = await res.json();

	return (
		{
			props: { notes },
			revalidate: 1
		}
	)
}
```

Since the `getStaticProp` function only fetches data at build time, the page will remain static no matter the number of request. However, noticed that we've added the `revalidate` property in the return object. Therefore, the function will check for changes in the data every second and it will update the page it the data has been changed.

### getStaticPaths

This function is used to build dynamic path upon request. For example, the `api` route, we are able to receive slugs through the request, therefore, we can use those slugs to dynamically generate routes to access data.
