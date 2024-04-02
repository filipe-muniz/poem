# Study API Using Poems Data

This project aims to study and analyze poems data using a RESTful API. The API is built using Node.js, Express.js, Knex.js, and MySQL.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Getting Started

This section will guide you through setting up the project on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/filipe-muniz/poem.git
   ```
2. Navigate to the project directory:
   ```bash
   cd poem
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up the MySQL database:
   - Create a new database in MySQL.
   - Update the .env file with your database credentials.
   - Run the migrations to create the necessary tables:
     ```bash
     npx knex migrate:latest
     ```
5. Seed the database with poems data (optional):

## Usage

To start the server, run:

```bash
npm start
```

The API will be available at http://localhost:3000.

## API Endpoints

- GET /poems/all --> Retrieve a list of all poems.
- GET /poems?limit=10 --> Retrieve a list with 10 poems.
- GET /poems/:query --> Retrieve a specific poem by query.
- GET /poets --> Retrieve a list of all poets.
- GET /poets/:name --> Retrieve a specific poet by name.
- POST /poems --> Add a new poem.

## License

This project is licensed under the MIT License

## Source

- Poems data source: [Poetry Foundation Poems Dataset](https://www.kaggle.com/datasets/tgdivy/poetry-foundation-poems/code)

* [Poetry Foundation](https://www.poetryfoundation.org/)
