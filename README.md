# Example Layered Architecture for Next.js App with Prisma and tRPC

This is an attempt at creating a [domain-driven layered architecture](https://khalilstemmler.com/articles/domain-driven-design-intro/) using [trpc](https://trpc.io) and [Prisma](https://prisma.io) with [Next.js](https://nextjs.org).

I used [this repo](https://github.com/dyarleniber/typescript-ddd-forum) as heavy inspiration.

## Motivation

There are several issues with the existing Bushido architecture, mostly around the fact that it's not very clear where to put code and how to structure it. There's also a lot of coupling between things like tRPC and Prisma, which makes it hard to test and swap out.

For example, the business logic is spread out, but is mostly directly in the tRPC handlers, which interact directly with Prisma. This makes it hard to test and reuse. The business logic should be in the domain layer, and the tRPC handlers should be thin wrappers around the domain layer.

I also want to avoid using tRPC directly in UI components, and instead use a thin wrapper around tRPC that can be mocked in tests and allows us to swap out tRPC for something else if we want to.

## Layout

- `src/` - source code
  - `env/` - Environment variables
  - `modules/` - The big daddy of the app. This is where all the business logic lives.
    - `channels/` - Channel module
      - `application/` - Application layer
        - `dtos/` - Data transfer objects
        - `use-cases/` - Use cases
      - `domain/` - Domain layer
        - `models/` - Domain models
        - `repositories/` - Domain repositories
        - `value-objects/` - Domain value objects
      - `infrastructure/` - Infrastructure layer
        - `prisma/` - Implementations of domain repositories using Prisma, plus instances of use cases that use the Prisma implementations of domain repositories.
        - `trpc/` - Routers and procedures for tRPC that use the use cases from the application layer.
  - `pages/` - Next.js pages
  - `shared/` - Shared modules
    - `core/` - Core classes for constructing domain objects and use cases
    - `infrastructure/` - Infrastructure classes for constructing adapters and gateways
      - `prisma/client.ts` - Prisma client
      - `trpc/nextClient.ts` - trpc client for Next.js
    - `presentation/react` - Presentation classes for React (currently only hooks)
    - `utils/` - Utility functions
  - `styles/` - Global styles

## Benefits

- The business logic is all in the domain layer, which makes it easy to test and reuse.
- The value objects in the domain layer enforce invariants, which makes it harder to create invalid data and easy to test. In the existing Bushido architecture, such validation is done in the tRPC handlers, if at all, which makes it harder to test and reuse, and invalid data can be created.
- The directory structure, while somewhat verbose, gives everything a place. Also, by looking at the use cases, it's easy to see what functionality is available in a module.

## Issues / Concerns

- While this is a much stronger separation of concerns, it's also a lot more code to write and is fairly complex.
- Converting between domain objects, DTOs, and Prisma models is a bit of a pain. I'm not sure if there's a better way to do this.
- The last mile to the UI could be better. I'm unsure whether the thin wrappers around tRPC are the right way to go. Also, components which use the hooks directly are still tightly coupled to tRPC, which makes them hard to test.
- This is a very simple example. I'm not sure what the challenges will be when implementing things like relationships, authorization, external integrations, etc.