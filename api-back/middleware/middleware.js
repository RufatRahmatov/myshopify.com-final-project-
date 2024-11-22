import { NextResponse } from 'next/server';

export function middleware(req) {

    const url = req.nextUrl;


    if (url.pathname.includes('/')) {

        return new NextResponse(
            'Page-to-page navigation is blocked.',
            { status: 403 }
        );
    }


    return NextResponse.next();
}


export const config = {
    matcher: ['/:path*'],
};
