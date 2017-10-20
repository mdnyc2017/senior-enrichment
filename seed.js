const db = require('./db/main');
const Student = require('./db/models/Student')
const Campus = require('./db/models/Campus')
const Faker = require('faker');
//make sure path to models is correct
//bulk create students


// function seed() {
//   const students = [];
//   for (let i = 0; i < 60; i++) {
//     students.push(
//       Student.create({
//         name: Faker.name.findName(),
//         email: Faker.internet.email(),
//         github: Faker.internet.userName(),
//         image: Faker.image.avatar(),
//         content: Faker.lorem.paragraph(3),
//         campusId: Math.floor(Math.random() * 4) + 1
//       })
//     );
//   }
//   return students;
// }

db
  .sync({ force: true })
  .then(() => {
    console.log('Seeding database with Campuses');
    return Campus.bulkCreate([
      {
        name: 'Mars',
        image: '/img/Mars.jpg',
      },
      {
        name: 'Luna',
        image: '/img/Luna.jpg',
      },
      {
        name: 'Wolf 1061C',
        image: '/img/Wolf1061c.jpg',
      },
      {
        name: 'Trappist-1G',
        image: '/img/TRAPPIST-1g.png',
      },
      {
        name: 'Kepler-22b',
        image: '/img/Kepler22b.jpg',
      },
      {
        name: 'Ganyemede',
        image: '/img/Ganymede.jpg',
      },
      {
        name: 'Io',
        image: '/img/Io.jpg',
      },
      {
        name: 'Enceladus',
        image: '/img/Enceladus.jpg',
      },
      {
        name: 'Europa',
        image: '/img/Europa.jpg',
      },
      {
        name: 'Titan',
        image: '/img/Titan.jpg',
      },
      {
        name: 'Max\'s Rad Base on Endor',
        image: '/img/Endor.jpg',
      },
      {
        name: 'Michael\'s Rad Base on Hoth',
        image: '/img/Hoth.jpg',
      }
    ]);
  })
  .then(()=>{
    console.log('Seeding database with Campuses');
    return Student.bulkCreate([
      {
        name: 'Ellison Onizuka',
        email: 'kamaluhia@aol.com',
        campusId: 1
      },
      {
        name: 'Sharon McAuliffe',
        email: 'starryEyedTeacher@yahoo.com',
        campusId: 2        
      },
      {
        name: 'Greg Jarvis',
        email: 'spaceistheplace@gmail.com',
        campusId: 3       
      },
      {
        name: 'Judy Resnik',
        email: 'judyNasa@yahoo.com',
        campusId: 4       
      },
      {
        name: 'Michael Smith',
        email: 'flyingHigh@aol.com',
        campusId: 5       
      },
      {
        name: 'Dick Scobee',
        email: 'commanderScobee@gmail.com',
        campusId: 6        
      },
      {
        name: 'Ronald McNair',
        email: 'flyphysics@netscape.com',
        campusId: 7        
      },
      {
        name: 'Johnny Glenn',
        email: 'punchDrunk@gmail.com',
        campusId: 8        
      },
      {
        name: 'Alan Shepherd',
        email: 'mercury1of7@gmail.com',
        campusId: 9        
      },
      {
        name: 'Gus Grissom',
        email: 'mercury2of7@gmail.com',
        campusId: 10        
      },
      {
        name: 'Mae Jemison',
        email: 'flyMae@gmail.com',
        campusId: 4        
      },
      {
        name: 'Ellen Ochoa',
        email: 'bigBossEllen@gmail.com',
        campusId: 8        
      },
      {
        name: 'Michael Douglas',
        email: 'michaelIsRad@gmail.com',
        campusId: 12
      },
      {
        name: 'Max Peterson',
        email: 'maxIsAlsoRad@gmail.com',
        campusId: 11
      }
    ]);
  })
  .then(() => {
    console.log('Seeding successful');
    db.close();
    return null;
  });


 

 