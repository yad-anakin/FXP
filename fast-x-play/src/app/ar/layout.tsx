import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ArLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale="ar" />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale="ar" />
    </div>
  );
}
