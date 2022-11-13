# Pub Sub app

## [Demo](https://www.loom.com/share/e0ca406da15f4ef896b60623a2934ab7)

https://www.loom.com/share/e0ca406da15f4ef896b60623a2934ab7

## Installation

1. Install docker and docker compose https://docs.docker.com/engine/install/

2. Install node modules
   ```sh
   yarn install
   ```
3. Update env file

   ```sh
   cp env-example .env
   ```

4. Build the app

   ```sh
   yarn build
   ```

5. start the database

   ```sh
   yarn start:db
   ```

6. start the app
   ```sh
   yarn start:prod
   ```

## Subscribe to specific event.

Send `SUBSCRIBE` event to websocket with channel name.

example payload

```json
{
  "channel": "example-channel"
}
```

### Emmiting SUBSCRIBE event using socket.io

```javascript
const socket = io('http://localhost:3000');

const payload = {
  channel: 'example-channel',
};

socket.emit('SUBSCRIBE', payload);
```


## Capturing publish action from the server

```javascript

const socket = io('http://localhost:3000');

socket.on("RECORD_CREATED", (data) => {
    console.log(data)
})
```


## Publishing data to the server

Make a POST request to `/publish` to save the data in db and publish the data to subscribers.

Body Params

`channel`: The channel name for the server to publish the data.

`data`: Data that needs to be published for subscribers.

Below payload will publish the payload data for `example-channel` listners with the event `RECORD_CREATED`

```json
{
  "channel": "example-channel",
  "data": {
    "name": "User 1",
    "email": "user1@example.com"
  }
}
```
