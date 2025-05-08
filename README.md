# Country Info App

A simple Node.js + Express + TypeScript application that exposes an endpoint to fetch country information from the [Nager.Date API](https://date.nager.at).

## Features

- Fetch a list of available countries via an API endpoint
- Written in TypeScript for safety and scalability
- Unit tested with Jest and Supertest
- Auto-reloading and concurrent build/watch with Nodemon and TypeScript
- Production-ready build setup

## Tech Stack

- Node.js / Express
- TypeScript
- Axios (for HTTP requests)
- Jest / Supertest (for testing)
- Nodemon / Concurrently (for development)

## Installation and run

```bash
git clone https://github.com/your-username/country-info-app.git
cd country-info-app
docker compose up
```

## Scripts

| Script         | Description                            |
|----------------|----------------------------------------|
| `npm run build` | Compile TypeScript to `dist/`          |
| `npm start`     | Run the compiled app (`dist/index.js`) |
| `npm run serve` | Dev mode: watches and reloads on change |
| `npm test`      | Run tests with Jest                    |

## API

### `GET api/v1/countries/list`

Returns a list of countries from the Nager.Date API.

**Example Response:**
```json
[
  {
    "countryCode": "US",
    "name": "United States"
  },
  {
    "countryCode": "DE",
    "name": "Germany"
  }
]
```
### `GET api/v1/countries/item/:countryCode`

Returns information about the country.

### `POST api/v1/users`

Create new user with enpty calendar

### `POST api/v1/users/:userId/calendar/holidays`

Add new holidays to calendar

## Testing

Run all tests:

```bash
npm run test
```

