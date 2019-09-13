JWT Node
======

## Install

```bash
yarn install
yarn start
```

## Examples


#### Get /home without an authenticated user

```bash
curl -X GET http://localhost:3000/home -vvv 
```

#### Post /login authenticated user

```bash
curl -X POST \
  http://localhost:3000/login \
  -H 'Content-Type: application/json' \
  -d '{
	"user": "root",
	"pass": "toor"
}' -vvv
```

> Note: To perfom the others request, grab the Set-Cookie value and replace it in each cookie value.

> Example of Set-Cookie value: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicm9vdCIsImlhdCI6MTU2ODM5NTE1NSwiZXhwIjoxNTY4Mzk2MDU1fQ.PBuzOCx0DJvnK5ZXZfUPvg-1rZt7t3UrgyBQouvNNPc; Max-Age=900; Path=/; Expires=Fri, 13 Sep 2019 17:34:15 GMT

#### Get /home with an authenticated user

```bash
curl -X GET http://localhost:3000/home --cookie "cookie-grabbed" -vvv 
```

#### Get /refresh with an authenticated user

```bash
curl -X GET http://localhost:3000/refresh --cookie "cookie-grabbed" -vvv 
```

This repository was based in this [post](https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication).