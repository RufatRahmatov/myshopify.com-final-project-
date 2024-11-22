import { NextResponse } from 'next/server';

export function middleware(request) {

    const url = request.nextUrl.pathname;


    if (url.includes('//')) {
        return NextResponse.redirect(new URL('/', request.url));
    }


    return NextResponse.next();
}


export const config = {
    matcher: '/:path*',
};
