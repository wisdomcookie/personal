---
name: 'Two Forms of Pre-rendering'
date: '2023-03'
type: 'code'
link: 'https://github.com/wisdomcookie/fishbowl'
status: 'Completed'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
