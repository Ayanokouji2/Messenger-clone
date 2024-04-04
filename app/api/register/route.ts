import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, name, password } = body;

        if (!name || !email || !password)
            return new NextResponse("Missing Credentials", { status: 400 })

        const hashPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create(
            {
                data: {
                    name,
                    email,
                    hashPassword
                }
            })

        return NextResponse.json(user)
    }
    catch (error) {
        console.error(error, 'REGISTERATION_ERROR❌')
        return new NextResponse('Internal Error', { status: 500 })
    }
}