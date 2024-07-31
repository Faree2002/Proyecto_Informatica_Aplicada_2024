import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const seba = await prisma.user.upsert({
    where: {
      email: 'sebaperezlavooy@gmail.com', // The unique identifier
    },
    update: {
      name: 'Sebastian',
      password: 'Sefapela2003',
      type: false,
      locals: {},
    },
    create: {
      email: 'sebaperezlavooy@gmail.com',
      name: 'Sebastian',
      password: 'Sefapela2003',
      type: false,
      locals: {},
    },
  });

  console.log(seba);

  // const dar = await prisma.local.upsert({
  //   where: {
  //     name: 'sebaperezlavooy@gmail.com', // The unique identifier
  //   },
  //   update: { },
  //   create: {
    
  //   },
  // })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })