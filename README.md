# Pub Sub app


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