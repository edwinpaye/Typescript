FROM mongo

COPY usuarios.json /usuarios.json

CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Usuario --type json --file /usuarios.json --jsonArray
