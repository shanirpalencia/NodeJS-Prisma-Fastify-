<h1>API NodeJs, Fastify, Prisma, TypeScript and SQL Server or PostgreSQL</h1>
Basic example

.env file:</br>
DATABASE_URL="sqlserver://localhost:1433;database=mydb;user=sa;password=youpassword;trustServerCertificate=true" </br>
<h4>or</h4></br>
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" </br> </br>

prisma/schema.prisma file:

datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
<h4>or</h4></br>
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
</br> </br>
Test with PostMan or https://www.usebruno.com

post {
  url: http://localhost:3000/api/users
  body: json
  auth: none
}

body:json {
  {
    "data": {
      "email": "JohnWick3@test.com",
      "name": "John Wick Third"
    }
  }
}

get {
  url: http://localhost:3000/api/users
  body: none
  auth: none
}

<h1>HOWTO</h1>

npm init -y </br>
npm i fastify </br>
npm i -D typescript @types/node </br>
</br>
npm i tsx -D </br>
</br>
</br>
<h3>add to package.json:</h3> </br>
"scripts": { </br>
    "dev": "tsx watch src/server.ts"</br>
  },</br></br>

npm i prisma -D</br>
npm i @prisma/client</br>

npx prisma init --datasource-provider sqlserver </br>
<h4>or</h4></br>
npx prisma init --datasource-provider postgresql</br>
</br>
npx prisma migrate dev --name init</br>

<h4>Prisma Studio</h4>
<p>
In order to manipulate data in the newly created database, open Prisma Studio with the following command:
npx prisma studio</p>
