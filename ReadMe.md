# Debugging and workarounds

1. I had to add type="modules" attribute within script tag to import modules
2. No need to import all the js files, just importing main file in html files is enough, as main.js is further importing other required js files
3. Use terminal window to open browser to avoid CORS errors `start msedge --allow-file-access-from-files`