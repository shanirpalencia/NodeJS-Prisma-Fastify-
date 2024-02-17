NodeJs, Fastify, Prisma and SQL Server "You can use PostgreSQL!"
Basic example

.env
DATABASE_URL="sqlserver://localhost:1433;database=mydb;user=sa;password=youpassword;trustServerCertificate=true"

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
