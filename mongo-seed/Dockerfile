FROM mongo

COPY roles.json /roles.json
COPY usuarios.json /usuarios.json
COPY universidades.json /universidades.json
CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Roles --type json --file /roles.json --jsonArray
CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Usuario --type json --file /usuarios.json --jsonArray
CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Universidades --type json --file /universidades.json --jsonArray
