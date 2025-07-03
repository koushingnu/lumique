import Image from "next/image";

export default function About() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight fade-in-up">
              Vision & Mission
            </h1>
            <p
              className="text-[min(4vw,1.25rem)] sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              テクノロジーの力で、
              <br className="sm:hidden" />
              ビジネスの可能性を広げ、
              <br className="sm:hidden" />
              より良い未来を創造することを
              <br className="sm:hidden" />
              使命としています。
            </p>
            <div
              className="w-24 h-1 bg-neutral-900 mx-auto rounded-full fade-in-up"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 animated-background opacity-30"></div>
        <div className="absolute inset-0 animated-dots"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square fade-in-left">
              <div className="absolute inset-0 bg-neutral-100 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl border border-neutral-200 -rotate-3 shadow-lg">
                <div className="relative h-full p-8 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Lumique Mission"
                    width={300}
                    height={300}
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 text-[min(4vw,1rem)] sm:text-base">
                クライアントの課題に寄り添い、
                <br className="sm:hidden" />
                最適なソリューションを提供することで、
                <br className="sm:hidden" />
                デジタル時代における
                <br className="sm:hidden" />
                企業の成長を支援します。
                <br className="hidden sm:block" />
                私たちは、技術とクリエイティビティを
                <br className="sm:hidden" />
                融合させ、革新的な
                <br className="sm:hidden" />
                デジタルソリューションを生み出します。
              </p>
              <div className="space-y-4">
                {[
                  "クライアントファースト",
                  "技術革新",
                  "持続可能な成長",
                  "品質へのこだわり",
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                  >
                    <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                    <span className="text-neutral-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-neutral-500 tracking-wider uppercase mb-3">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Services
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-[min(4vw,1rem)] sm:text-base">
              最新のテクノロジーと
              <br className="sm:hidden" />
              クリエイティブなアプローチで、
              <br className="sm:hidden" />
              お客様のビジネスの成長を支援します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Company Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Company Profile
            </h2>
            <div className="space-y-8">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:space-x-8 p-6 rounded-2xl hover:bg-neutral-50 transition-colors fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="font-bold text-neutral-900 md:w-32 mb-2 md:mb-0">
                    {info.label}
                  </div>
                  <div className="text-neutral-600 flex-1">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

const companyInfo = [
  {
    label: "社名",
    value: "Lumique",
  },
  {
    label: "代表",
    value: "山田光信",
  },
  {
    label: "設立",
    value: "2025年6月",
  },
  {
    label: "所在地",
    value: "〒115-0055 東京都北区赤羽西6-16-4",
  },
  {
    label: "事業内容",
    value: "Webアプリ開発、DX支援、Web制作",
  },
];
