import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SKINLY（スキンリー） | Lumique Web",
  description: "肌の状態と原因を、毎日かんたんに記録。SKINLYは、肌の状態と日常の要因を記録し、振り返るためのシンプルな記録アプリです。",
  openGraph: {
    title: "SKINLY（スキンリー） | Lumique Web",
    description: "肌の状態と原因を、毎日かんたんに記録。",
    url: "https://www.lumique-web.com/apps/skin-trigger-log/",
    siteName: "Lumique Web",
    locale: "ja_JP",
    type: "website",
  },
};

export default function SkinTriggerLogSupport() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          SKINLY（スキンリー）
        </h1>

        <p className="text-xl sm:text-2xl text-center text-neutral-600 mb-8">
          肌の状態と原因を、毎日かんたんに記録。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">概要</h2>
          <p className="text-neutral-700 leading-relaxed">
            SKINLYは、肌の状態と日常の要因（トリガー）を記録し、振り返るためのシンプルな記録アプリです。医療目的ではなく、日々のセルフケアの気づきを支援します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">主な機能</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-700">
            <li>肌の状態を5段階で記録</li>
            <li>睡眠・食事・ストレスなどのトリガーをチェックで保存</li>
            <li>カレンダーで過去の記録を一覧表示</li>
            <li>肌の調子が悪い日に多いトリガーを簡易分析</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使い方</h2>
          <ol className="list-decimal list-inside space-y-2 text-neutral-700">
            <li>Todayで肌スコアを選択</li>
            <li>その日のトリガーをチェック</li>
            <li>Calendar/Insightsで振り返り</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">プライバシーについて</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            本アプリはアカウント登録不要で、記録は端末内に保存されます。外部サーバーへの送信は行いません。
          </p>
          <Link
            href="/apps/skin-trigger-log/privacy/"
            className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
          >
            プライバシーポリシーの詳細はこちら
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-neutral-700 leading-relaxed">
            アプリに関するご質問やご要望は、以下のメールアドレスまでお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:lumique1022@gmail.com"
            className="inline-block mt-4 px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
          >
            lumique1022@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
