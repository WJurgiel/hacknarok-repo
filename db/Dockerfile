FROM mysql:latest
COPY init.sql /docker-entrypoint-initdb.d/init.sql
COPY users.csv /docker-entrypoint-initdb.d/users.csv
COPY messages.csv /docker-entrypoint-initdb.d/messages.csv
COPY languages.csv /docker-entrypoint-initdb.d/languages.csv