## Skibookers MVP

Project contains 3 major components
* [Main API](./apps/api/src/main.ts) - NestJS application
* [Recommendation Engine](./apps/recommendation-engine/main.py) - FastAPI(LangChain) application
* [Frontend](./apps/skibookers-web/src/main.tsx) - React application SPA

## Getting Started
### Prerequisites
- Create .env file in the root directory for each project (Take a look at the .env.example file)

### Install dependencies
```bash
pnpm install
```

### Install recommendation engine dependencies
```bash
cd apps/recommendation-engine
uv install
```

### Run API
```bash
pnpm nx run api:serve
```

### Run Recommendation Engine
```bash
pnpm nx run recommendation-engine:serve
```

### Run Frontend
```bash
pnpm nx run skibookers-web:serve
```