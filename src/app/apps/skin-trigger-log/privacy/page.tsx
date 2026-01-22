import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー（SKINLY） | Lumique Web",
  description: "SKINLYのプライバシーポリシー。本アプリは、ユーザーの個人情報を収集、保存、または第三者に送信することはありません。",
  openGraph: {
    title: "プライバシーポリシー（SKINLY） | Lumique Web",
    description: "SKINLYのプライバシーポリシー",
    url: "https://www.lumique-web.com/apps/skin-trigger-log/privacy/",
    siteName: "Lumique Web",
    locale: "ja_JP",
    type: "website",
  },
};

export default function SkinTriggerLogPrivacy() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          プライバシーポリシー
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SKINLY プライバシーポリシー</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              本アプリは、ユーザーの個人情報を収集、保存、または第三者に送信することはありません。
            </p>
            <p>
              記録されたデータはすべてユーザーの端末内に保存されます。外部サーバーへの通信、広告配信、解析ツールによるトラッキングは行いません。
            </p>
            <p>
              本ポリシーに関するお問い合わせは、以下までご連絡ください。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
          <a
            href="mailto:lumique1022@gmail.com"
            className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
          >
            lumique1022@gmail.com
          </a>
        </section>

        <section>
          <p className="text-neutral-600">制定日：2026-01-22</p>
        </section>
      </div>
    </div>
  );
}
