const fs = require('fs');

const generatePage = require('./src/page-template.js');


const profileDataArgs =process.argv.slice(2);

const [name, github] = profileDataArgs;



  
fs.writeFile ('./index.html'), generatePage(name,github), console.error( => {
    if(err) throw new Error(err);

    console.log('Portfilio complete! Check out index.thml to see the output!');
    )
});