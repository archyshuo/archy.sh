stack exec site build
rsync --checksum --progress -r -u _site/* ../archy.sh-raw
cd ../archy.sh-raw
git add .
git commit -am "update"
git push
