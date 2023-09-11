# RUN API
json-server --watch utils/db.json --port 3333

# RUN PROJECT
yarn start

# INSTALL DEPENDENCIES
yarn install OR yarn

# URLS (See exemples in App.tsx)
*get all:* `/country/`
*get by id:* `/country/${id}`
*get by name:* `/country?name=${name}`
*get by capital:* `/country?capital=${capital}`
*get by continent:* `/country?continent=${continent}`
