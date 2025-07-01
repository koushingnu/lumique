import Image from "next/image";

const works = [
  {
    title: "ECサイトリニューアル",
    description:
      "大手小売企業のECサイトを最新技術でリニューアル。売上30%増加を達成。",
    image: "/works/work1.jpg",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    title: "業務管理システム",
    description: "製造業向けの業務効率化システムを開発。工数を50%削減。",
    image: "/works/work2.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "コーポレートサイト制作",
    description:
      "スタートアップ企業のブランドイメージを体現するWebサイトを制作。",
    image: "/works/work3.jpg",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

export default function Works() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{work.title}</h2>
              <p className="text-gray-700 mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
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
