import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";

export default function MainLayout({children} : {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
            <main className="w-full max-w-7xl px-4 mx-auto flex-1">
                {children}
            </main>
            
        <Footer />
    </div>
  )
}