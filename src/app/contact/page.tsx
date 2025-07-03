import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-700 mb-8">
          プロジェクトのご相談、お問い合わせは下記メールアドレスまでお気軽にご連絡ください。
        </p>

        <Link
          href="mailto:koushin1022apple@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
        >
          koushin1022apple@gmail.com
        </Link>
      </div>
    </div>
  );
}
