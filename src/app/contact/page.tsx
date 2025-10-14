import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Contact
      </h1>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-700 mb-6 sm:mb-8 text-[min(4vw,1rem)] sm:text-base">
          プロジェクトのご相談、
          <br className="sm:hidden" />
          お問い合わせは
          <br className="sm:hidden" />
          下記メールアドレスまで
          <br className="sm:hidden" />
          お気軽にご連絡ください。
        </p>

        <Link
          href="mailto:lumique1022@gmail.com"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-transparent text-[min(4vw,1rem)] sm:text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
        >
          lumique1022@gmail.com
        </Link>
      </div>
    </div>
  );
}
