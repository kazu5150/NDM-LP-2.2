import Link from "next/link"
import { ServiceCategoryCard } from '../components/service-category-card'
import { TeamMemberCard } from '../components/team-member-card'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from "next/image"
import { cn } from "@/lib/utils"

const narrowerWidth = "w-full max-w-5xl"

const DynamicHeroSection = dynamic(() => import('../components/HeroSection'), { ssr: false })

const serviceCategories = [
  {
    title: "インターネットマーケティング",
    description: "効果的なオンライン戦略で、ビジネスの成長を加速",
    href: "/internet-marketing"
  },
  {
    title: "データマイニング",
    description: "大規模データから価値ある洞察を抽出し、意思決定をサポート",
  },
  {
    title: "テレマーケティング",
    description: "直接的なコミュニケーションで、顧客との関係を強化",
  },
  {
    title: "キャンペーン構築＆運用",
    description: "効果的なキャンペーンの企画から実施まで、総合的にサポート",
  },
  {
    title: "ダイレクトメールマーケティング",
    description: "ターゲットを絞った効果的なダイレクトメールで、顧客にリーチ",
  },
  {
    title: "マーケティングリサーチ",
    description: "市場動向や顧客ニーズを深く理解し、戦略立案をサポート",
  },
  {
    title: "クリエイティブ",
    description: "印象的なデザインと効果的なメッセージで、ブランド価値を高める",
  },
  {
    title: "イベント企画＆運営",
    description: "魅力的なイベントの企画から運営まで、トータルにサポート",
  },
  {
    title: "人材サポート",
    description: "マーケティング分野における適切な人材の紹介と育成をサポート",
  }
];

const teamMembers = [
  {
    name: "森田 浩司",
    position: "代表取締役社長",
    imageUrl: "/placeholder.svg?height=300&width=300",
    description: "20年以上のマーケティング経験を持つ。データ駆動型のアプローチで多くの企業の成長を支援。"
  },
  {
    name: "山田 桜子",
    position: "クリエイティブディレクター",
    imageUrl: "/placeholder.svg?height=300&width=300",
    description: "革新的なキャンペーン設計のプロフェッショナル。クライアントのビジョンを現実に。"
  },
  {
    name: "佐藤 太郎",
    position: "データアナリスト主任",
    imageUrl: "/placeholder.svg?height=300&width=300",
    description: "ビッグデータ解析のエキスパート。複雑なデータから有益な洞察を導き出す。"
  },
  {
    name: "高橋 優子",
    position: "マーケティング部門長",
    imageUrl: "/placeholder.svg?height=300&width=300",
    description: "デジタルマーケティングのスペシャリスト。最新のトレンドと技術を常に追求。"
  }
]

export default function ServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navigation */}
      <header className="w-full px-6 py-4 bg-gray-900/80 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NDM%20_logo-WU2GnoAfmB5XzClcFYm0dEtYkZeKda.png"
              width={160}
              height={60}
              alt="NDM - Next Direct Marketing"
              priority
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-[#0070f3]">HOME</Link>
            <Link href="/company" className="text-sm text-gray-400 hover:text-white transition-colors">COMPANY</Link>
            <Link href="/service" className="text-sm text-gray-400 hover:text-white transition-colors">SERVICE</Link>
            <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">NEWS</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">CONTACT</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-600 to-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <DynamicHeroSection />
        </div>
      </section>

      {/* Service Categories */}
      <main className="flex-1 py-16 bg-gray-900">
        <div className={cn("mx-auto px-16", narrowerWidth)}>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0070f3]">サービス一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.title}
                title={category.title || ''}
                description={category.description || ''}
                href={category.href || ''}
                color="#0070f3"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Team Introduction */}
      <section className="py-16 bg-gray-800">
        <div className={cn("mx-auto px-16", narrowerWidth)}>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0070f3]">私たちのチーム</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                description={member.description}
                color="#0070f3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-16">
        <div className={cn("mx-auto px-16", narrowerWidth)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link 
              href="/contact"
              className="block p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">お問い合わせ</h3>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <p className="text-gray-400">ご質問・ご相談はこちらから</p>
            </Link>

            <Link 
              href="/company"
              className="block p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">会社案内</h3>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <p className="text-gray-400">ネクストダイレクトマーケティングについて</p>
            </Link>

            <Link 
              href="/service"
              className="block p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">サービス</h3>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <p className="text-gray-400">当社のサービス一覧</p>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 株式会社ネクストダイレクトマーケティング</div>
            <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-white transition-colors">利用規約</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">サイトマップ</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

