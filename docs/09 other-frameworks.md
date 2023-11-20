Other Frameworks/Tech/Approaches
================================

We've covered REST apis's and Single-Page-Webapps .. the world is a LOT bigger.

Objectives
* Understand a range of other tangentially related technologies (and frameworks)
    * why this is important ..
        * Interviews ..?
        * Future self learning ..?
    * What problem are these technologies trying to solve


Company TechStack
-----------------

* KaraKara tech stack
    *  python, typescript, sanic, react, mqtt, ffmpeg, docker compose
* [How to OVER Engineer a Website // What is a Tech Stack?](https://www.youtube.com/watch?v=Sxxw3qtb3_g) YouTube 11min FireShip
    * Talks though all the tech for client, server, ci, containers and then suggests a cutdown concept
    * [stackshare.io/stacks](https://stackshare.io/stacks) - Popular Tech Stacks: The open source tools and SaaS behind popular tech companies
        * todo: find another site - stackshare is an ad-ridden mess
* Companies often list their tech stack in job descriptions e.g:
    * > Elixir, React, LiveView, Typescript, PostgreSQL, GraphQL, RabbitMQ and genAI, hosted on AWS
        * [MultiVerse Careers](https://www.multiverse.io/en-GB/careers) 'Software Engineer - Remote (UK), Hybrid or Office Based' Nov 19th 2023
        

### Investigate companies tech stack (20min)
* TASK: Using https://stackshare.io/stacks, 
    * Find 3 companies
        * Identify 2 technologies you're aware of
        * Identify 1 technology you are not away of - find out about it - what is it for?
* Note: This site has a login-wall - let's get round that ...
    * Bring up browser development tools `F12` 
    * Set the modal to `display: none;`
    * Remove the `filter: blur` from the top level `div`
        * `<div data-testid="body" id="wrap" style="filter: blur(4px);">`


Server or Client?
----------------

This module has shown one paradigm: a REST api with single page webapp client (Single Page Application - SPA)
There are alternatives to the SPA pattern.
In fact - many people hate SPA's.
* [Why does everyone "suddenly" hate Single Page Apps?](https://begin.com/blog/posts/2023-02-21-why-does-everyone-suddenly-hate-single-page-apps)
But we have to know why the SPA pattern is problematic.
* [The case for frameworks](https://seldo.com/posts/the_case_for_frameworks)

* Mux.com: [Everything I wish I knew before moving 50,000 lines of code to React Server Components](https://www.mux.com/blog/what-are-react-server-components) July 2023 - Engineering Blog
    * > React Server Components is to understand what problem they’re solving. So let’s start there.
    * client-side rendering (CSR) or single-page applications (SPA)
    * server-side rendering (SSR) and static site generation (SSG)
    * (In a single file we can use) Server Components and Client Components, respectively. Because we can be explicit about where our code runs, we can send less JavaScript to the client
    * Server Components can fetch data directly from within the component (e.g. database, queue, file-store). When that fetch is complete, Server Components can stream that data to the client.
    * https://nextjs.org/


Question: What is the problem server side rendering (SSR) is trying to solve.


Serverless Architecture
-----------------------

Serverless architecture (also known as "serverless computing" or "function as a service", FaaS)

* Not a framework - more of a methodology
* You do not run/deploy a http server that runs 24/7 - you do not build/ship/run containers for your service. Means no deployment/hardware management
* a cloud function == container with ram and disk state ready to go - ready to be deployed/run to any edge in the world
    * aws lambda
* Pay per function execution
    * Investigate the cost of a aws lambda function in London https://aws.amazon.com/lambda/pricing/
* No visitors/users == no idle server costs
* Billions of visitors == fine (you just pay per function execution) Infinite(?) scaling!

* [Twilio Docs: (What is) Serverless Architecture](https://www.twilio.com/docs/glossary/what-is-serverless-architecture) 4min read
    * (definition)
    * Why Serverless Architecture?
    * How does Serverless or FaaS Differ from PaaS?
    * Who Should Use Serverless?
* AWS: Amazon API Gateway: [Tutorial: Build a Hello World REST API with Lambda proxy integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html)
    * Has examples of deployment and example `curl` GET/POST
    * I would encourage you to create an "AWS Account" and have a play with this. (small payment required - I would love to have done this as part of the module, but I think cloud services belongs in another module)


### Edge rendering

* vercel.com [Build your own web framework](https://vercel.com/blog/build-your-own-web-framework)
    * build your own web framework that also deploys to edge and serverless infrastructure? 
    * What features does a modern framework need to support, and how can we ensure that these features allow us to build a scalable, performant web application?
        * Static Files to statically render pages
        * Incremental Static Regeneration to automatically revalidate and regenerate pages after a specific timeout
        * Edge Functions to enable edge rendering and middleware
        * Automatic Image Optimization to efficiently serve the images using the latest format, enable lazy loading, and prevent layout shift
        * Serverless Functions to server-render dynamic pages and create data fetching endpoints
        * Edge Caching to quickly serve static files to users globally


Question: What problem is 'serverless' trying to solve?


NoSQL
-----

* https://www.guru99.com/nosql-tutorial.html
* https://www.freecodecamp.org/news/nosql-databases-5f6639ed9574/
* Fireship: [7 Database Paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw) YouTube 10min
* Traditional relational databases are ridged to maintain data consistency (all or nothing! locking transactions)
* The concept of 'eventual consistency'

Question: What problems is NoSQL trying to solve?


GraphQL
-------

* Not a _framework_ - it's a query language for api's
* https://www.howtographql.com/basics/1-graphql-is-the-better-rest/ page + (12min video)
    * REST API's cannot keep up with rapidly changing requirements
        * If you change your api - all your existing clients break and need updating at the same time - an utter utter pain
    * > GraphQL was created to cope with the need for more flexibility and efficiency in client-server communication
    * No more Over- and Under- fetching
    * Rapid Product Iterations on the Frontend
* A GraphQL Server could be configured/backed by multiple databases, rest APIs, or static files. One interface/endpoint is now explorable

Question 1: What problems is GraphQL tring to solve?
Question 2: When would you use GraphQL over REST? Is there a point in ever using REST?


You had to understand REST in order to understand what REST is trying to solve.


IPFS + Blockchain hosting
----

* ipfs.io [HTTP is obsolete. It's time for the distributed, permanent web](https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html)
    * HTTP has problems - this beautifully describes why
    * HTTP servers need to be kept on all the time. When they go, all their data is inaccessible. The Web is centralised because of HTTP.
    * How would you browse the web on the Moon or Mars?
* [Host your Website on the Blockchain, Permanently](https://medium.com/fullstacked/i-saved-60-per-year-forever-by-hosting-my-website-on-the-blockchain-6f7bf07d35d9) - How to host a simple website on Arweave’s perma-web
* [Decentralizing your Website](https://towardsdatascience.com/decentralizing-your-website-f5bca765f9ed) - IPFS + ENS

Question: What is the problem IPFS is trying to solve?



Static Site Generation
----------------------

Other approach: Static Site Generation

* [What is a Static Site Generator? And 3 ways to find the best one](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)
* Really scalable and performant (cacheable, use of existing simple performant systems, distributable)
* Frameworks
    * [hugo](https://gohugo.io/) Golang
    * [jekyll](https://jekyllrb.com/) Ruby
    * [hyde](https://hyde.github.io/) Python
    * [nikola](https://getnikola.com/) Python
    * [next.js](https://nextjs.org/) Typescript
        * hybrid static & server rendering
    * [gatsbyjs](https://www.gatsbyjs.com/) a static site generator with react?


### Nikola Demo (Python)
https://github.com/calaldees/TeachProgramming/tree/master/teachprogramming/static/projects/web/static_site_generation/nikola
`Makefile`
```Makefile
# Nikola in Docker - Inspired by https://getnikola.com/getting-started.html

DOCKER_IMAGE:=dragas/nikola:alpine
CONTAINER_WORKDIR:=/nikola/
USER=$(shell id -u):$(shell id -g)
DOCKER_RUN_PARMS:=docker run --rm -it --user ${USER} --volume ${PWD}:${CONTAINER_WORKDIR} --publish 8000:8000
DOCKER_RUN:=${DOCKER_RUN_PARMS} --workdir ${CONTAINER_WORKDIR}/demo ${DOCKER_IMAGE}


serve: demo/output
	${DOCKER_RUN} nikola auto --address 0.0.0.0
demo/output: demo
	${DOCKER_RUN} nikola build
demo:
	${DOCKER_RUN_PARMS} --workdir ${CONTAINER_WORKDIR} ${DOCKER_IMAGE} nikola init -q --demo ./demo
shell:
	${DOCKER_RUN} /bin/sh

# edit some of the text in (auto-reload? or start/stop server) + see changes
#	demo/posts/1.rst
#	demo/pages/listing-demo.rst
```
`.gitignore`
```
demo/
```
(please use the `.gitignore` don't commit all the demo generated files to your repo)


Question: When would you use static site generation?
Question: What problem is static-site-generation trying to solve?


Server State Frameworks
-----------------------

### svelte
* [Svelte](https://svelte.dev/)
    * Server database and frontend linked - changed to db/state -> automatic frontend event
    * [How to get rich as a solo software developer - The Ultimate Guide](https://youtu.be/A4_TFHzqAAg?si=Cib45aISEEEnGESl&t=243) 4min into the video, talks about tech stack and svelte example! WOW!
### Fusion
* [Stl.Fusion](https://github.com/servicetitan/Stl.Fusion)
    * > Fusion is a .NET library that implements Distributed REActive Memoization (DREAM) – a novel technique that gracefully solves a number of well-known problems
    * Fusion+Blazor Sample delivering real-time updates to 3 browser windows ... (see link above)
        * https://fusion-samples.servicetitan.com/consistency
    * [How Similar Is Fusion to SignalR?](https://medium.com/swlh/how-similar-is-stl-fusion-to-signalr-e751c14b70c3)
        * Modelling an application based on state changes that propagate to client
        * > the only end result of your actions is that the client-side state (of every client) becomes consistent with the server-side state!
### Phoenix LiveView (Elixir)
* [Phoenix.LiveView behaviour](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html) 
    * > LiveView provides rich, real-time user experiences with server-rendered HTML
### Dream
* [Dream](https://github.com/aantron/dream) [docs](https://aantron.github.io/dream/) - Tidy Web framework for OCaml and ReasonML 
    * > Easy-to-use, feature-complete Web framework without boilerplate.
    * SQL, WebSockets, Middleware, Streams, Cookies
### Pynecone
* [pynecone.io](https://pynecone.io/)
    * Frontend. Backend. Hosting. Pure Python. Build web apps in minutes. Deploy with a single command.
    * > In Pynecone, the frontend compiles down to a React/NextJS app
    * > The app state is just a class. State updates are functions in the class. And the UI is a reflection of the state
    * > We store user state on the backend, and use Websockets to send events and state updates
    * > You can easily integrate all your existing Python libraries into your app. In the future, we hope to leverage WebAssembly to offload many operations to the client.
    * [Launch HN: Pynecone (YC W23) – Web Apps in Pure Python](https://news.ycombinator.com/item?id=35136827)
        * > Our goal is for the user to never have to see JS. We try to catch most errors in Python during compile time. We're also not trying to reinvent things like CSS styles, just make them accessible in Python.

Question: What problem is the 'DREAM' pattern trying to solve?


Other - TODO:
------------

Google
https://flutter.dev/
> Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices.
> Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device.


Cloud First Frameworks?
-----

https://www.winglang.io/


Local First?
-----------

* [Offline Is Just Online With Extreme Latency](https://blog.jim-nielsen.com/2023/offline-is-online-with-extreme-latency/)
    * > You want to work with a co-worker on a piece of software? If you're in the same room, sitting at the same table, looking at screens side-by-side, any communication between those two computers is actually happening [by sending signals] across the ocean to some data center, to some other server and then coming back to you. One: that's crazy. But two, it's also very slow and expensive and it doesn't have to be that way.
    * YouTube [Local-first software - Peter Van Hardenberg](https://www.youtube.com/watch?v=KrPsyr8Ig6M) 45min
* [Yjs](https://docs.yjs.dev/)
    * Merging data framework

* [Push notifications are now supported cross-browser](https://web.dev/push-notifications-in-all-modern-browsers/)
    * > now available in all three browser engines! 
    * `serviceWorker` and `PushManager`



BlockChain Applications
-----------------------

### HyperLedger
* [introduction](https://hyperledger.github.io/composer/v0.19/introduction/introduction.html)
    * HyperLedger Composer is an extensive, open development toolset and framework to make developing blockchain applications easier.
    * [key-concepts]https://hyperledger.github.io/composer/v0.19/introduction/key-concepts.html

Question: What problems are blockchain applications trying to solve?


Summary?
--------

Question: What technology today was the most interesting and why?



Other Domains
=============


Mobile Frameworks
-----------------

Applications in other domains or ecosystems

### Android Activity Lifecycle
Not really a framework, but your app sites within a bigger ecosystem
* https://developer.android.com/guide/components/activities/activity-lifecycle


Game Frameworks
---------------

* If you are writing the `main` method and calling it - its a library
* If you are writing code that is called by other code - that is using a framework
* engines are bigger suites of tools

* [what-is-the-difference-between-a-game-framework-and-a-game-engine](https://gamedev.stackexchange.com/questions/31772/what-is-the-difference-between-a-game-framework-and-a-game-engine)
* Example
    * [LittleJS](https://killedbyapixel.github.io/LittleJS/docs/) - The Tiny JavaScript Game Engine That Can
        * notice how you place your code with a known object structure
        * [HelloWorld Example](https://github.com/calaldees/TeachProgramming/tree/master/teachprogramming/static/projects/game/frameworks/LittleJS)
            * copy `Makefile` and `index.html`
    * [PyGame](https://en.wikipedia.org/wiki/Pygame)
        * https://realpython.com/pygame-a-primer/#basic-pygame-program
        * A library not a framework - if you implement the game loop - its not a framework
    * [melonjs.org](https://melonjs.org/)


Other Frameworks
----------------

* [Introducing Darwin: A framework for evolving decentralized web apps](https://evolutionary.arweave.dev/)
    * An Evolutionary App is a decentralized web application that evolves using a process of incentivized forking and a market-based governance mechanism that fuels the selection process.