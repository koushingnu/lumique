import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="section relative overflow-hidden min-h-[90vh] sm:min-h-[80vh] flex items-center bg-neutral-50">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 sm:mb-16">
              <AnimatedText
                text="Lumique"
                baseDelay={0.8}
                className="text-7xl md:text-7xl lg:text-8xl text-neutral-900 tracking-wider"
                style={{
                  fontFamily: "var(--font-noto-serif-jp)",
                  fontWeight: "300",
                  letterSpacing: "0.05em",
                }}
              />
            </div>
            <h2 className="heading-xl mb-6 sm:mb-8 jp-text">
              <AnimatedText
                text="アイデアを"
                baseDelay={0.4}
                className="inline-block"
                randomness={0.8}
              />{" "}
              <AnimatedText
                text="デジタルの世界へ"
                baseDelay={0.4}
                className="inline-block"
                letterClassName="text-gradient animate-pulse-slow"
                randomness={0.8}
              />
            </h2>
            <p className="text-body mb-10 sm:mb-12 max-w-2xl mx-auto text-center text-[min(4vw,1.125rem)] sm:text-lg">
              <AnimatedText
                text="Webアプリケーション開発からDX支援まで、"
                baseDelay={0.4}
                className="inline-block"
                randomness={0.8}
              />
              <br className="my-2 sm:my-4" />
              <AnimatedText
                text="ビジネスの成長をテクノロジーで加速します。"
                baseDelay={0.4}
                className="inline-block"
                randomness={0.8}
              />
              <br className="my-2 sm:my-4" />
              <AnimatedText
                text="最新のテクノロジーと洗練されたデザインで、あなたのビジョンを実現します。"
                baseDelay={0.4}
                className="inline-block"
                randomness={0.8}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary hover-scale text-lg py-4 px-8"
              >
                <AnimatedText
                  text="お問い合わせ"
                  baseDelay={0.4}
                  className="inline-block"
                  randomness={0.8}
                />
              </Link>
              <Link
                href="/works"
                className="btn-outline hover-scale text-lg py-4 px-8"
              >
                <AnimatedText
                  text="実績を見る"
                  baseDelay={0.4}
                  className="inline-block"
                  randomness={0.8}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5f5f5,transparent_70%)] opacity-70"></div>
        <div className="absolute inset-0 animated-dots opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Profile Section */}
      <section className="section py-16 sm:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 fade-in-up">
              <h2 className="heading-lg mb-4">About Us</h2>
              <p className="text-body text-[min(4vw,1rem)] sm:text-lg">
                クライアントの課題に寄り添い、
                <br className="sm:hidden" />
                最適なソリューションを提供します。
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-4 -left-4 w-full h-full bg-neutral-100 rounded-2xl transform rotate-[-3deg]"></div>
              <div className="absolute top-2 -right-4 w-full h-full bg-neutral-50 rounded-2xl transform rotate-[2deg]"></div>
              <div className="card p-6 sm:p-8 relative bg-white">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0">
                    <div className="absolute inset-0 bg-neutral-900 rounded-full opacity-10 blur-2xl"></div>
                    <Image
                      src="/logo.png"
                      alt="山田光信"
                      width={192}
                      height={192}
                      className="rounded-full relative z-10"
                    />
                  </div>
                  <div>
                    <h3 className="heading-md mb-2 text-center md:text-left">
                      山田 光信
                    </h3>
                    <p className="text-neutral-500 mb-4 text-center md:text-left">
                      代表 / Webアプリケーション開発者
                    </p>
                    <p className="text-body text-[min(4vw,1rem)] sm:text-base">
                      10年以上のWeb開発経験を活かし、
                      <br className="sm:hidden" />
                      クライアントのビジネス課題を
                      <br className="sm:hidden" />
                      テクノロジーで解決します。
                      <br className="hidden sm:block" />
                      モダンな技術スタックを用いた開発から、
                      <br className="sm:hidden" />
                      企業のDX推進まで、
                      <br className="sm:hidden" />
                      幅広い支援を提供しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt relative overflow-hidden py-16 sm:py-24">
        <div className="container relative z-10">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <span className="inline-block text-sm font-medium text-neutral-500 tracking-wider uppercase mb-3">
              Our Services
            </span>
            <h2 className="heading-lg mb-4 text-gradient">
              Comprehensive Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-3d p-6 sm:p-8 group fade-in-up bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="card-3d-content flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-110 animate-bounce-slow mx-auto sm:mx-0"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="w-8 h-8">{service.icon}</div>
                    </div>
                    <h3 className="heading-md mb-2 text-xl sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-body text-[min(4vw,1rem)] sm:text-base text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 animated-background opacity-30"></div>
        <div className="absolute inset-0 animated-dots"></div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-900 text-white relative overflow-hidden py-16 sm:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h2 className="heading-lg mb-6">プロジェクトのご相談</h2>
            <p className="text-neutral-300 text-[min(4vw,1.125rem)] sm:text-lg mb-8 max-w-2xl mx-auto">
              お客様のプロジェクトについて、
              <br className="sm:hidden" />
              お気軽にご相談ください。
              <br />
              初期相談は無料で承ります。
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-neutral-900 hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/10 hover-scale text-lg py-4 px-8"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#262626,transparent)]"></div>
        <div className="absolute inset-0 animated-dots opacity-10"></div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Webアプリ開発",
    description:
      "モダンな技術スタックを活用し、スケーラブルで保守性の高いWebアプリケーションを開発します。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "DX支援",
    description:
      "企業のデジタルトランスフォーメーションを包括的に支援し、業務効率化とイノベーションを実現します。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Web制作",
    description:
      "ユーザー体験を重視した、モダンでレスポンシブなWebサイトを制作します。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
];
