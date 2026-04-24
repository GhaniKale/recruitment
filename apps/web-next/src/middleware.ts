import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Admin route protection
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Allow access to login page
        if (request.nextUrl.pathname === '/admin/login') {
            if (user) {
                // Check if user is admin (optional optimization, otherwise let the page redirect)
                return NextResponse.redirect(new URL('/admin/dashboard', request.url))
            }
            return response
        }

        if (!user) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }

        // Role check - fetching profile
        // Note: In middleware, avoid complex DB queries if possible, but for admin guard it's needed
        // However, supabase.auth.getUser() returns the user object.
        // If role is in metadata, we can check it.
        // Else we might need to query the profiles table.
        // For performance, usually role is better stored in jwt custom claim.
        // But per requirements: "cek profiles.role dari user id, harus 'admin'"
        // We can do this in the layout or page to avoid DB call in middleware for every request, 
        // OR do it here. Doing it here ensures security.

        // For now, let's assume basic auth check in middleware, and role check in layout/page 
        // to avoid "Middleware cannot return response body" issues or timeouts.
        // BUT the requirement says "Proteksi /admin/**: middleware atau server-side guard".

        // We will defer strict role check to layout/page for simplicity in middleware, 
        // but we MUST ensure it's done. 
        // Or we can query it here using the supabase client.

        // Let's stick to auth check here.
    }

    return response
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
