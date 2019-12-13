# 03_Storage
This is the third lab for a course on backend web development using Node.

This is [Lab02](/lab02-part2) but with the metrics stored in a LevelDB database, and can be fetched, added and deleted through the `/metrics` route.

## Installation
Make sure you clone this repository first and `cd` into it
```
cd lab01
npm install
```
> You can also use `yarn`

## Usage
Just run
```
npm start
```
You can then access the server through [port 8096](http://127.0.0.1:8096/)
You can interract with the api through [`/metrics`](http://127.0.0.1:8096/metrics)
