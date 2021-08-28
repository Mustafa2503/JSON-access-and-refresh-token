# JSON-access-and-refresh-token
A simple express API for access and refresh token generation in web pages or OS applications. Made using PostgreSQL. MongoDB databases can also work with this API.

## Introduction
**Access token** carries the information required to access a protected resource directly. They normally have an expiration time or timeout and are preferrable short-lived. The resource server uses the access token to determine the eligibility of client to enter the system.
**Refresh token** carries the information necessary to get a new access token. The client uses the refresh token to get a new token issued by the authentication server if the access token has expired. Refresh token can also expire but they are rather long-lived. It’s worth understanding that refresh token must be stored securely, they can also be blacklisted by the authorization server, if a refresh token is leaked. It can be used to obtain a new access token until it’s either blacklisted or expires.

### Installation Requirements
- Node Installed https://nodejs.org/en/download/
- PostgreSQL required. I used my own remote server but since I stored the database reference in seperate environment variables and never committed the file containing them, you shall require your own data.

Download the code or clone the files in your machine and then run
- [ ] `npm install`
    
Then run
- [ ] `npm install -g npm-install-missing`
    
To Run the API or test it (Postman recommended)
- [ ] `npm run start:dev`
