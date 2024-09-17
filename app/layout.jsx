import Nav from '@components/Nav';
import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Next Js Project",
    descrption: "A Prompt app"
}
function RootLayout({children}) {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className=' main'>
                    <div className=' gradient'>
                    </div>
                </div>
                <main className=' app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;