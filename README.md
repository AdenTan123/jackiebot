# TypeScript Bot with PostgreSQL

This project is a TypeScript bot that interacts with Discord and utilizes a PostgreSQL database hosted on Railway. The bot supports simple slash commands, including a `/ping` command that responds with a mention of the user.

## Features

- Slash command support
- PostgreSQL database integration
- Simple command handling
- Easy deployment with Railway

## Project Structure

```
mybot
├── .github
│   └── workflows
│       └── nodejs.yml
├── src
│   ├── index.ts
│   ├── deploy-commands.ts
│   ├── commands
│   │   ├── index.ts
│   │   └── ping.ts
│   ├── database
│   │   └── postgres.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/mybot.git
   cd mybot
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values, including your PostgreSQL connection string and Discord bot token.

4. **Run the bot:**
   ```
   npm start
   ```

## Usage

- To use the `/ping` command, mention a user in the command, like so:
  ```
  /ping @UserMention
  ```
  The bot will respond with:
  ```
  I am Pinging @UserMention.
  ```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.