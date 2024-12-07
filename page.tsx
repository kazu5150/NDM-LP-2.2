import Link from "next/link"
import dynamic from 'next/dynamic'
import { ServiceCategoryCard } from './components/service-category-card'
import { TeamMemberCard } from './components/team-member-card'
import { ChevronRight } from 'lucide-react'

const DynamicCanvas = dynamic(() => import('./components/DynamicCanvas'), { ssr: false })

const serviceCategories = [
  {
    title: "プロモーション事業",
    description: "効果的なプロモーション戦略で、ビジネスの成長を加速",
    items: [
      { title: "DMマーケティング", href: "/services/dm-marketing" },
      { title: "テレマーケティング", href: "/services/telemarketing" },
      { title: "Fax-DMプロモーション", href: "/services/fax-dm" },
    ]
  },
  {
    title: "データベース事業",
    description: "高品質なデータベースで、精度の高いマーケティングを実現",
    items: [
      { title: "BtoBマーケティング", href: "/services/btob" },
      { title: "BtoCマーケティング", href: "/services/btoc" },
      { title: "個人データ保護マーク活用", href: "/services/data-protection" },
    ]
  },
  {
    title: "顧客データ管理・収集・活用支援事業",
    description: "顧客データを最大限に活用し、ビジネスの成功を支援",
    items: [
      { title: "データベース管理サポート", href: "/services/db-support" },
      { title: "データクレンジング", href: "/services/data-cleansing" },
      { title: "Webデータ抽出", href: "/services/web-data" },
    ]
  },
  {
    title: "メディア事業",
    description: "多様なメディアを活用し、効果的な情報発信を実現",
    items: [
      { title: "メディアミックス", href: "/services/media-mix" },
      { title: "映像メディアの特徴", href: "/services/video-media" },
      { title: "ターゲット番組紹介", href: "/services/target-programs" },
    ]
  }
]

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
          <Link href="/" className="text-[1.44rem] font-bold text-blue-400">
            NDM
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">HOME</Link>
            <Link href="/company" className="text-sm text-gray-400 hover:text-white transition-colors">COMPANY</Link>
            <Link href="/service" className="text-sm text-white">SERVICE</Link>
            <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">NEWS</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">CONTACT</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen w-full bg-gradient-to-b from-blue-900 to-black">
        <DynamicCanvas />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              データのつながりが未来を創る
            </h1>
            <p className="text-xl text-blue-300">NDMの顧客データ活用で、あなたのビジネスを最大化</p>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <main className="flex-1 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">サービス一覧</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Team Introduction */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">私たちのチーム</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

