# Realtime chat app with rust and rocket backend
This realtime chat app is personal test project to test out rust and rocket.
The backend runs on CloudRun, while the frontend is hosted on vercel.

The backend is written in rust, using rocket for building the API, while
the frontend is written in typescript using SvelteKit and Tailwind CSS

Huge thanks to Sergio Benitez for making [this](https://github.com/SergioBenitez/Rocket/tree/v0.5-rc/examples/chat) repo,
laying the groundwork for this project, and Luke Pighetti for making [this](https://github.com/lukepighetti/rust_faas_challenge) repo, that made deploying on CloudRun a breeze.

## Running in development
### Backend
To run the development backend, run the following command:
```bash
cargo run
```

### Frontend
To run the development frontend, first switch to using the development URI's in `message-store.svelte`, then run
```bash
npm run dev
```

## Running in production
### Backend
To run it on CloudRun, you need to update the `deploy.sh` file with your config. Swap the email address with yours, and swap out my project name `chat-app-353012` with yours. Then run the command:
```bash
chmod +x deploy.sh # If you haven't already
./deploy.sh
```

PS: The production backend is not yet built for production, so its probably less performant than it could be.

### Frontend
Hosting on Vercel is super easy: 
- Push your fork of the repo to github
- Go to vercel.com
- Create a user
- Create a new project
- Connect the new project to your repo
- Give it a couple of minutes, then your live