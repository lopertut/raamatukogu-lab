# Raamatukogu

Small website where user can borrow books and give them back, search books by name or genre, log in, sign up

## Tehnoloogiad

Launguages: Js
Libs: express

## Käivitamine

clone repo
go into cloned repo
run: docker compose up --build

## Testikasutajad

<!-- TODO: Lisa testikasutajate andmed -->

## API endpointid

### Kasutajad

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/users/signup | Registers new user account |
| POST | /api/users/login | Logs in user and returns session/authentication token |
| POST | /api/users/logout | Logs out user and deletes active session |
| GET | /api/users/me | Returns user data such as username and name |

### Raamatud

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| GET | /api/books | Returns all books |
| GET | /api/books/:id | Returns book by id |
| GET | /api/books/search | Returns search result. Searches by name and author |
| GET | /api/books/genres | Returns all genres |
| GET | /api/books/genre/:genre | Returns book by genre |

### Laenud

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/loans | loan book for auth user. If there are 3 loans then user cannot take more books |
| POST | /api/loans/:id/return | Returns user loan |
| GET | /api/loans | Return all loans across all users |
| GET | /api/loans/me | Retruns loans for auth user |

## Testid

run test.js in src directory while app is runnig

## GitHub Actions

<!-- TODO: Kirjelda mis toimub automaatselt -->
