db.scoreBoard.drop(); //drop table if exists

//sample data here
db.scoreBoard.insertMany([
      {
        username: 'Sean',
        score: "33",
    },
    {
      username: 'Joshua',
      score: '55',
    },
    {
      username: 'Stefan',
      score: '30',
    },
    {
      username: 'Aditi',
      score: 'over 9000',
    },
    {
      username: 'Sally',
      score: 'yes'
    }

])
