# Realtime chat app with rust and rocket backend
This realtime chat app is personal test project to test out Rust, Rocket, Diesel and Postgres.

Huge thanks to Sergio Benitez for making [this](https://github.com/SergioBenitez/Rocket/tree/v0.5-rc/examples/chat) repo,
laying the groundwork for this project

## Backend
The backend is written in rust, using rocket for building the API. It is hosted on Render 
as they have good support for rust and they have hosted Postgres.

In addition Diesel is used as ORM for the database.

## Frontend
The frontend is written in typescript using SvelteKit and Tailwind CSS. It is hosted on vercel.

# Running in development
You need to install Rust, Postgres, Node and Diesel locally before beginning.

## Database initial setup
You need to migrate the Postgres server to get up and running, by running the following command. 
This sets up all tables etc.
```bash
diesel migration run
```

You also need the find out the local url for your Postgres database, and create a .env file in the root
of you project and add the following in that file:
```
DATABASE_URL=<your-database-url>
```

## Starting the database
The local Postgres database runs in a docker container and can be started with the command
``` bash
docker compose up
```

## Backend
To run the development backend, run the following command:
```bash
cargo run
```
However I recommend installing cargo-watch, ad that gives hot reloading whenever you save a file
```bash
cargo install cargo-watch
```
And the you can run cargo in watch-mode
```bash
cargo watch -x run
```

## Frontend
To run the development frontend run
```bash
cd client
npm run dev
```

# Running in production
## Database
- Go to render.com
- Create a user
- Create a new Postgres instance
- Copy the external url to use in the next step
- In your repo run `diesel migration run --database-url <external-url>`
- Copy the internal url, to use in the next step
- Done!
## Backend
Hosting on Render is super easy: 
- Push your fork of the repo to github
- Go to render.com
- Create a user
- Create a new WebServer
- Add the internal postgres URL as an environment variable called DATABASE_URL
- Connect the new project to your repo
- Use all standard settings
- Go time!

PS: The production backend is not yet built for production, so its probably less performant than it could be.

## Frontend
Hosting on Vercel is super easy: 
- Push your fork of the repo to github
- Go to vercel.com
- Create a user
- Create a new project
- Connect the new project to your repo
- Give it a couple of minutes, then you are live