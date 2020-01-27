create table users (
    id serial primary key,
    email text unique not null,
    firstname text,
    lastname text,
    phonenumber varchar(20),
    permissions text,
    hash text

);

create table contractors (
    id serial primary key,
    id serial primary key,
    email text unique not null,
    firstname text,
    lastname text,
    phonenumber varchar(20),
    hash text
);

create table walks (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table sits (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table trains (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table futurewalks (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table futuresits (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table futuretrains (
    id serial primary key,
    contractorid integer references contractors(id),
    userid integer references users(id)

);

create table dogs (
    id serial primary key,
    ownerid integer references user(id),
    name text, 

);

create table userpayments (
    id serial primary key,

);

create table contractorpayments (
    id serial primary key,

);

