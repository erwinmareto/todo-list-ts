const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { id: 1000 },
    update: {},
    create: {
      id: 1000,
      username: 'Alice',
      password: 'TWWWWWWW'
    },
  })

  const bob = await prisma.user.upsert({
    where: { id: 2000 },
    update: {},
    create: {
      id: 2000,
      username: 'Bob',
      password: 'kjkjkjkk'
    },
  })

  const chores = await prisma.category.upsert({
    where: { id: 1000 },
    update: {},
    create: {
      id: 1000,
      userId: 1000,
      title: 'Chores',
    },
  })

  const work = await prisma.category.upsert({
    where: { id: 2000 },
    update: {},
    create: {
      id: 2000,
      userId: 2000,
      title: 'Work',
    },
  })

  const task1 = await prisma.task.upsert({
    where: { id: 1000 },
    update: {},
    create: {
      id: 1000,
      title: 'Mowing the lawn',
      categoryId: 1000,
      status: 'PENDING',
      priority: 'MODERATE',
      dueTime: '2023-11-29T16:28:53.801Z'
    },
  })
  const task2 = await prisma.task.upsert({
    where: { id: 2000 },
    update: {},
    create: {
      id: 2000,
      title: 'Sweep the floor',
      categoryId: 1000,
      status: 'DONE',
      priority: 'MINOR',
      dueTime: '2023-11-29T16:28:53.801Z'
    },
  })
  const task3 = await prisma.task.upsert({
    where: { id: 3000 },
    update: {},
    create: {
      id: 3000,
      title: 'Do the work',
      categoryId: 2000,
      status: 'STARTED',
      priority: 'URGENT',
      dueTime: '2023-11-29T16:28:53.801Z'
    },
  })
  console.log({ alice, bob })
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

