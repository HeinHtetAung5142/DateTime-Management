const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const { DateTime } = require("luxon");

const prisma = new PrismaClient();

const generateToDos = () => {
  const name = faker.word.verb({
    length: { min: 5, max: 12 },
    strategy: "fail",
  });
  const started_at = DateTime.local()
    .plus({
      days: faker.datatype.number({ min: 0, max: 30 }),
    })
    .toISO();
  const ended_at = DateTime.local()
    .plus({
      days: faker.datatype.number({ min: 31, max: 60 }),
    })
    .toISO();

  return { name, started_at, ended_at };
};

const seedToDos = async () => {
  const todos = [];

  for (let i = 0; i < 5; i++) {
    todos.push(generateToDos());
  }

  return todos;
};

const resetTable = async () => {
  // Clear the table by deleting all rows
  await prisma.todos.deleteMany();

  const todos = await seedToDos();

  // Seed the table with data
  await prisma.todos.createMany({
    data: todos,
  });

  console.log("Data inserted successfully!");
};

resetTable()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
