const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (nameAns) => {
  console.log(`Thank you for your valuable feedback: ${nameAns}`);

  rl.question('How old are you? ', (ageAns) => {
    console.log(`Thank you for your valuable feedback: ${ageAns}`);

    rl.question('Where do you live? ', (locationAns) => {
      console.log(`Thank you for your valuable feedback: ${locationAns}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealtimeAns) => {
        console.log(`Thank you for your valuable feedback: ${mealtimeAns}`);

        rl.question('What\'s your favourite thing to eat for that meal?', (mealAns) => {
          console.log(`Thank you for your valuable feedback: ${mealAns}`);

          rl.question('Are you a dog person or a cat person? ', (dogcatAns) => {
            console.log(`Thank you for your valuable feedback: ${dogcatAns}`);

            rl.question('How many pets do you have? ',  (petAns) => {
              console.log(`Thank you for your valuable feedback: ${petAns}`);

              rl.question('Have you ever been to prison? :)))', (notJudgingYou) => {
                console.log(`Thank you for your valuable feedback: ${notJudgingYou}`);
      
                console.log(`Your name is ${nameAns}, you're ${ageAns} years young and live in ${locationAns}. You love to eat ${mealAns} for ${mealtimeAns} and you're a ${dogcatAns} person, who has ${petAns}!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});