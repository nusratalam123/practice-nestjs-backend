"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
            authorId: user.id,
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
    throw e;
})
    .finally(() => {
    prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map