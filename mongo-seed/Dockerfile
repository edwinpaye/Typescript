FROM mongo

COPY roles.json /roles.json
COPY usuarios.json /usuarios.json
COPY universidades.json /universidades.json
CMD ls -1 *.json | while read jsonfile; do mongoimport --db abcdb --file $jsonfile --jsonArray --type json; done
