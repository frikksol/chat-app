# Realtime chat app with rust and rocket backend
This realtime chat app is personal test project to test out rust and rocket. It is hosted on CloudRun.

It's currently uses a static javascript front-end which does not look all that great that I want to update, but it works.

Huge thanks to Sergio Benitez for making [this](https://github.com/SergioBenitez/Rocket/tree/v0.5-rc/examples/chat) repo,
laying the groundwork for this project, and Luke Pighetti for making [this](https://github.com/lukepighetti/rust_faas_challenge) repo, that made deploying on CloudRun a breeze.

## Running
To run the development server, run the following command:
```bash
cargo run
```
Then visit `http://localhost:8000`.

To run it on CloudRun, you need to update the `deploy.sh` file with your config. Swap the email address with yours, and swap out my project name `chat-app-353012` with yours. Then run the command:
```bash
chmod +x deploy.sh # If you haven't already
./deploy.sh
```