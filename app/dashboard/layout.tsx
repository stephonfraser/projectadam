

export default function dashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#FFF7DB] h-full">
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    )
  }