import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function InternetMarketingPage() {
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
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">HOME</Link>
            <Link href="/company" className="text-sm text-gray-400 hover:text-white transition-colors">COMPANY</Link>
            <Link href="/service" className="text-sm text-white">SERVICE</Link>
            <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">NEWS</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">CONTACT</Link>
          </div>
        </nav>
      </header>

      <div className="w-full bg-gray-900 py-4 mt-[72px]">
        <div className="max-w-7xl mx-auto px-6">
          <Button variant="outline" asChild>
            <Link href="/" className="text-blue-500 hover:text-white transition-colors">
              <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
              HOMEに戻る
            </Link>
          </Button>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-600 to-black py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">インターネットマーケティング</h1>
            <p className="text-xl text-blue-300 text-center">最新のデジタル戦略で、ビジネスの成長を加速</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-[#0070f3]">インターネットマーケティング最大の特長とは？</h2>
            
            <div className="flex flex-col lg:flex-row items-start gap-8 mt-6">
              <div className="lg:w-1/2 space-y-4">
                <p>
                  インターネットマーケティング最大の特長とは、「一人ひとりのお客さま」と「企業」とが One to One で繋がり、
                  個別な双方向からのコミュニケーションが可能なコトです。
                  「企業」は伝えたい情報を伝えたいターゲットにだけダイレクトに送り届け、情報をピックアップした「お客さま」は
                  能動的且つ気軽にレスポンスを返すことができます。
                </p>
                <p>
                  したがってインターネットマーケティングは最終商談成立率が非常に高く、現在のダイレクトマーケティング・アイテム群の中でも最も重要なポジションを担っています。
                </p>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3] w-full max-w-2xl mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pict_p1_01.jpg-iStv9x4TDeFdBuhEfcmNqQpKIRa3Kd.jpeg"
                  fill
                  alt="インターネットマーケティングの双方向コミュニケーション・フロー"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12 text-[#0070f3]">インターネットマーケティングのメディア</h2>
            <ul className="list-disc list-inside mb-6 text-red-500">
              <li>低コストでも展開が可能</li>
              <li>タイムリーなコミュニケーションが可能</li>
            </ul>
            <p className="mb-6">
              この２点もインターネットマーケティングの大きな魅力です。
              それは使用するインターネット・メディア－WebサイトやメールＤＭなど－が、格安且つ即時・適時に制作／構築／
              リニューアル／発信できるコト。また、莫大な情報量を掲載可能なコトに起因しており、マスメディアや印刷媒体に
              比べ工夫次第で費用対効果の高い効率的なマーケティング展開を実現できます。
            </p>

            <h3 className="text-xl font-bold mb-4">
              それでは、実際にはどうやって自社のビジネスにインターネットマーケティングを導入すればいいのでしょうか？
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#0070f3]">お客さまとの出会いに、、、</h4>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/creative" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      クリエイティブ
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/marketing-research" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      マーケティングリサーチ
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/campaign" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      キャンペーン構築＆運用
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/event" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      イベント企画＆運営
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#0070f3]">見込み客との対話に、、、</h4>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/telemarketing" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      テレマーケティング
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/human-resource" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      人材サポート
                    </Link>
                  </Button>
                </div>
                <h4 className="text-lg font-semibold mb-4 mt-8 text-[#0070f3]">ＣＲＭ展開には必須です、、、</h4>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/data-mining" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      データマイニング
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/service/direct-mail" className="text-blue-500 hover:text-white transition-colors">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      ダイレクトメールマーケティング
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

