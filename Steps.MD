#THE PROCEDURE FROM START TO FINISH

####first we need to setup express hbs
- $ npx express-generator
- then if not setup then type
            (-express --hbs)
- now the initial fils are setup... next we need to install nodemon if needed.

####settinbg the layouts
- first in views > layout.hbs give the html structure
- index.js will be the body
- make partials for header and footer
- To work we need to connect it in the server side
code that add these code in app.js
----
--> var hbs= require('express-handlebars');
--> app.engine('hbs' ,hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',partialsDir:__dirname+'/views/partials/'}))

---

####Sending data from backend to frnend
- set that routes > index.js

- that file will be recieved in the view in index.hbs
-- output that using loop