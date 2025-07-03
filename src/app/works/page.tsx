import Image from "next/image";

const works = [
  {
    title: "アイドルLP",
    description: "周年イベント用LP。雰囲気に合わせて的確にデザインを作成。",
    image: "/works/work1.webp",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Google口コミ分析",
    description: "Google口コミのデータを分析し、口コミの傾向を可視化。",
    image: "/works/work2.png",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "音声正規化アプリ",
    description: "音声を正規化し、テキストに変換する。",
    image: "/works/work3.png",
    tags: ["Next.js", "Tailwind CSS", "AWS", "React", "TypeScript"],
  },
];

export default function Works() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative h-40 sm:h-48">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {work.title}
              </h2>
              <p className="text-gray-700 text-[min(4vw,1rem)] sm:text-base mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 text-[min(3.5vw,0.875rem)] sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
