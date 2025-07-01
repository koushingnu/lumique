import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Ideas into Digital Reality
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Webアプリケーション開発からDX支援まで、ビジネスの成長をテクノロジーで加速します。
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-8 mb-8">
          <Image
            src="/profile.jpg"
            alt="山田光信"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">山田光信</h2>
            <p className="text-gray-600">代表 / Webアプリケーション開発者</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          10年以上のWeb開発経験を活かし、クライアントのビジネス課題をテクノロジーで解決します。
          モダンな技術スタックを用いた開発から、企業のDX推進まで、幅広い支援を提供しています。
        </p>
      </section>
    </div>
  );
}
