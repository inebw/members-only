require("dotenv");
const { Client } = require("pg");

const SQL = `
create table if not exists users (
 id integer primary key generated always as identity,
 username varchar(255) unique not null,
 password varchar (255) not null,
 admin boolean default false
);

create table if not exists posts (
  id integer primary key generated always as identity,
  title text not null,
  message text not null,
  added_on text not null,
  user_id integer,
  constraint fk_key
    foreign key (user_id)
    references users (id)
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DBURL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
