import prisma from '@/app/libs/prismadb'

import getSession from './getSession'

const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if (session?.user && session?.user?.email)
            return null

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })

        return currentUser ? currentUser : null

    } catch (error: any) {
        return null  // we are not throwing any error because it will break the flow
    }
}

export default getCurrentUser