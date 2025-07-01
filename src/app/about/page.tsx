export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">About Lumique</h1>

      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            テクノロジーの力で、ビジネスの可能性を広げ、より良い未来を創造することを使命としています。
            クライアントの課題に寄り添い、最適なソリューションを提供することで、
            デジタル時代における企業の成長を支援します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="grid gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Webアプリケーション開発
              </h3>
              <p className="text-gray-700">
                モダンな技術スタックを活用し、スケーラブルで保守性の高いWebアプリケーションを開発します。
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">DX支援</h3>
              <p className="text-gray-700">
                企業のデジタルトランスフォーメーションを包括的に支援し、業務効率化とイノベーションを実現します。
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Web制作</h3>
              <p className="text-gray-700">
                ユーザー体験を重視した、モダンでレスポンシブなWebサイトを制作します。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
