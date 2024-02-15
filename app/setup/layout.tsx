import Navbar from "./components/Navbar"

export default function setupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#FFF7DB] h-screen">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
   
        {children}
      </section>
    )
  }