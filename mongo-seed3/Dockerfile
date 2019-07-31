FROM mongo

COPY universidades.json /universidades.json

CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Universidades --type json --file /universidades.json --jsonArray
