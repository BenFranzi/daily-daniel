import './globals.css'
import NavMenu from "@/app/NavMenu";
import AuthProvider from "@/app/AuthProvider";

export const metadata = {
    title: 'Daily Daniel',
    description: 'Get your daily dose of Daniel',
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
        <html lang="en">
            <body>
                <NavMenu />
                {children}
            </body>
        </html>
        </AuthProvider>
    )
}
