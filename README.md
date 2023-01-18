# How to
This tool uses Cypress and is optimized to work with Hilanet which looks like this:

<img width="300" alt="Screen Shot 2023-01-17 at 23 32 11" src="https://user-images.githubusercontent.com/588916/213016888-63f65919-9a15-4fe1-ac47-f5a3181adf2f.png">

1. Pull this repo
2. install Node
3. run `npm i`
4. rename `.env.example`=>`.env`
5. put inside of it your credentials
6. fill `startTime` and `endTime` settings in `cypress.config.js`
7. run `npm start`
8. That's it!

## Or
1. Fork this repo
2. fill `startTime` and `endTime` settings in `cypress.config.js`
3. Fix cron if you need(use https://crontab.guru/)
4. Put your credentials in your repo Actions secrets using same names
5. Your attendance would be filled automatically every day!
