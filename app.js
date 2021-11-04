const fs = require('fs');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;




//   console.log('Ben', 'Plaindemon');
//   console.log(generatePage('Ben', 'Plaindemon'));

// fs is defined using a built in node  tool
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw  new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });