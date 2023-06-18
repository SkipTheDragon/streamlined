#!/bin/sh

rootDir=$(pwd)
devilboxDataLocation=$rootDir/services/devilbox/data/www
insideDevilboxDatalocation=/shared/httpd

echo "Running script..."

# Start all docker services!
mkdir $devilboxDataLocation/streamlined/
for d in $rootDir/services/* ; do
    cd $d;

    docker-compose up -d

   
done

docker-compose exec -d devilbox_php_1 ln -s $insideDevilboxDataLocation/app/public $insideDevilboxDataLocation/streamlined/htdocs 

echo "Script finished..."

