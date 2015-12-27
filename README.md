# smarttv-webremote
## Control your Samsung Smart TV from the web!

**smarttv-webremote** is a Javascript/NodeJS app for remotely control your Samsung Smart TV connected on your local network.

This repo hosts the server-side (NodeJS) of the app, based on the [samsung-remote](https://www.github.com/natalan/samsung-remote) package by [Natalan](https://www.github.com/natalan/). Check the client-side [here](https://www.github.com/MathieuDebit/smarttv-webremote-client).

## Getting started

> You will need Node.js to run this server. Install and configure it first: [http://nodejs.org/](http://nodejs.org/)

Clone the repo and install dependencies:

```javascript
git clone https://github.com/MathieuDebit/smarttv-webremote.git
cd smarttv-webremote
npm install
```

> And of course, a Samsung Smart TV is needed. Tested on model LED46.

## Usage

Start the server by running the following command:
```javascript
node server.js
```

then connect a client with `socket.io` on http://localhost:8080/.

 > Check the **official client of this app [here](https://www.github.com/MathieuDebit/smarttv-webremote-client)**.

![smarttv-webremote-client interface](http://i.imgur.com/ltkDR9b.jpg)

## Contributing

> This project is licensed under the terms of the MIT license.

Feel free to contribute to the project by reporting and/or fixing bugs, improving code quality and adding new features.

1. Fork repository
2. Create a branch following a [successfull branching model](http://nvie.com/posts/a-successful-git-branching-model/)
3. Write your feature/fix
4. Pull request

---
Made with ♥ by [Mathieu Débit](http://www.twitter.com/MathieuDebit).
