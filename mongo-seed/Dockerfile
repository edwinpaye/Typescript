FROM mongo

COPY roles.json /roles.json

CMD mongoimport --host abcd_mongo_1 --db abcdb --collection Roles --type json --file /roles.json --jsonArray