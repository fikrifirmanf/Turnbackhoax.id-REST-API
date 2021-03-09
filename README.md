# Documentation

This is a Restful API about hoax news or articles created using **NodeJS**. Data source <https://turnbackhoax.id/>.

## Demo

<#>
Comming Soon

## Installation

```
git clone https://github.com/fikrifirmanf/Turnbackhoax.id-REST-API.git
cd Turnbackhoax.id-REST-API
npm install
```

### Running on Dev Mode

```
npm run dev
```

### Status Code

#### Response Code

```
200: Success
500: Internal Server Error
```

## REST API

GET <http://localhost:3000/all> --> Getting artikel update or all artikel

GET <http://localhost:3000/all?page=1> --> Getting artikel with pagination

GET <http://localhost:3000/search?q=covid19&page=1> --> Getting artikel with query and pagination

GET <http://localhost:3000/artikel?slug=/2021/03/09/salah-video-terebongkarrrr-korupsi-100-miliar-miras-dki-ternyata-anis-baswedan-gunakan-untuk-hal-ini/> --> Getting artikel content

## Data Source

<https://turnbackhoax.id/>

### NOT FOR COMMERCIAL
