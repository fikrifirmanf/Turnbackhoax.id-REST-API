# Documentation

This is a Restful API about football standings created using **NodeJS**. Data source <https://www.theguardian.com>.

## Demo

<http://footballstandings.siao.my.id/api/?league=query>

## Installation

```
git clone https://github.com/fikrifirmanf/Football-Standings-API.git
cd Football-Standings-API
npm install
```

### Running on Dev Mode

```
npm run devStart
```

### Status Code

#### Response Code

```
200: Success
500: Internal Server Error
```

## REST API

GET <http://localhost:3000/api/?league=query>

#### Query

```
Premier League : pl
La Liga : laliga
Serie A : seriea
Bundesliga : bundesliga
```

## Data Source

<https://www.theguardian.com/football/tables>

### NOT FOR COMMERCIAL
