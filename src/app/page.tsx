import { QuoteCard } from '@/components/QuoteCard'
import { Footer } from '@/Footer'
import TimeCard from '@/TimeCard'


export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between py-12">
      <TimeCard />
      <QuoteCard />
      <Footer />
    </main>
  )
}
