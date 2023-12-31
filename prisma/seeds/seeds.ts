import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedProfiles() {
  await prisma.profile.createMany({
    data: [{ name: 'ADMINISTRADOR' }],
    skipDuplicates: true,
  })
}

async function seedUsers() {
  await prisma.user.createMany({
    data: [
      {
        name: 'USUARIO 1',
        profile_id: 1,
        email: 'usuario1@gmail.com',
        password: '202cb962ac59075b964b07152d234b70', // 123
      },
      {
        name: 'USUARIO 2',
        profile_id: 1,
        email: 'usuario2@gmail.com',
        password: '250cf8b51c773f3f8dc8b4be867a9a02', // 456
      },
    ],
    skipDuplicates: true,
  })
}

async function main() {
  await seedProfiles()
  await seedUsers()
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
