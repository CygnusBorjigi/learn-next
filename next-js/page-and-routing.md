page & routing
page & routing



# Pages & Routing

Routing in next.js framework is done s simply by putting the functional components representing each page in to the `pages` folder.  And nested rout in created simply by creating folders in the `page` folder. When creating any additional nested rout, the `index.js` file in each route directory is the default page of that route.

## Dynamic route

Consider creating web application for notes, it would be beneficial to be able to have a page route like `/notes/note-1` where the last part of the path is dynamic. in order to do this, we first create a folder named `notes` to next the routes in then with in that folder we create a file named `[slug].js`. 

Notice that the name in the square bracket does not necessarily need to be "slug" is can be anything that represent an id. However, it is convention to name the file `[slug].js`

Then in that file, we would have access to the `slug`. And we access it using the `useRouter` hook. 

```javascript
import { useRouter } from 'next/router';

export default function EachNote() {
	const router = useRouter();
	// access the path using
	const path = router.pathname;
	// access the slug defined in the file name
	const slug = router.query.slug;
}
```

When we have access to the rout from the `useRouter` hook, we can even change the current rout using the `push` function.

Example: (push the home route as the current route)

```javascript
<button onClick={ () => router.push("/") }> Click to go home</button>
```

## Page link

Even though the `<a>` would work, it causes the pages to render each time we move to another page. Therefore, the better option is to use the `<Link>` component from `next/link`. 

```javascript
import Link from 'next/link'
<Link href="/"></Link>
```
Pages & Routing
Routing in next.js framework is done s simply by putting the functional components representing each page in to the pages folder. And nested rout in created simply by creating folders in the page folder. When creating any additional nested rout, the index.js file in each route directory is the default page of that route.

Dynamic route
Consider creating web application for notes, it would be beneficial to be able to have a page route like /notes/note-1 where the last part of the path is dynamic. in order to do this, we first create a folder named notes to next the routes in then with in that folder we create a file named [slug].js.

Notice that the name in the square bracket does not necessarily need to be “slug” is can be anything that represent an id. However, it is convention to name the file [slug].js

Then in that file, we would have access to the slug. And we access it using the useRouter hook.

import { useRouter } from 'next/router';

export default function EachNote() {
	const router = useRouter();
	// access the path using
	const path = router.pathname;
	// access the slug defined in the file name
	const slug = router.query.slug;
}
When we have access to the rout from the useRouter hook, we can even change the current rout using the push function.

Example: (push the home route as the current route)

<button onClick={ () => router.push("/") }> Click to go home</button>
Page link
Even though the <a> would work, it causes the pages to render each time we move to another page. Therefore, the better option is to use the <Link> component from next/link.

import Link from 'next/link'
<Link href="/"></Link>
Markdown 1756 bytes 294 words 43 lines Ln 33, Col 69HTML 1356 characters 285 words 21 paragraphs
