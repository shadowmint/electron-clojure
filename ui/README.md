# Electron app

## Run electron

    gulp watch

All the dependencies are install in the parent folder.

Notice you should also run `gulp watch` in the parent folder to watch for source changes.

## Package a distributable

     mkdir build
     cd build
     ./../../node_modules/.bin/electron-packager .. --platform=linux --arch=all --overwrite
