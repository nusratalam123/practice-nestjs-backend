import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
    },
  });

  await prisma.post.create({
    data: {
      title: 'My First Post',
      content: 'This is a test post',
      authorId: user.id,  // Use the ID of the user created above
      categories: ['tech'],
      tags: ['nestjs'],
      likes: 0,
      isPublished: true,
    },
  });

  console.log('Seeding complete');
}

main()
  .catch(e => {
    throw e
  })
  .finally(() => {
     prisma.$disconnect()
  });
