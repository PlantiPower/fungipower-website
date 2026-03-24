import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = 'maxom39_84!@'

export async function POST(request: NextRequest) {
    const { password } = await request.json()

    if (password === PASSWORD) {
        const response = NextResponse.json({ success: true })
        response.cookies.set('fp_access', 'granted', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        })
        return response
    }

    return NextResponse.json({ success: false }, { status: 401 })
}
