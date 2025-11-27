import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

interface MyAppsSectionProps {
  id?: string;
}

interface IosApp {
  id: number;
  name: string;
  description: string;
  icon: string;
  techStack: string[];
  appStoreUrl: string;
  features: string[];
}

interface WebApp {
  id: number;
  name: string;
  description: string;
  icon: string;
  techStack: string[];
  webUrl: string;
  features: string[];
}

export function MyAppsSection({ id }: MyAppsSectionProps) {
  const iosApps: IosApp[] = [
    {
      id: 1,
      name: "StudyArena",
      description: `勉強時間を他人と競い合うスマホアプリ「StudyArena」の開発を行っています。

  勉強モチベーション低下に悩むユーザーはこのアプリを通じて、
  他人との勉強時間による競争を行い、
  勉強に対するモチベーションを上げることができます。`,
      icon: "/images/apps/studyarena-icon.png",
      techStack: ["Swift", "UIkit"],
      appStoreUrl:
        "https://apps.apple.com/jp/app/studyarena/id6748235227?l=en-US",
      features: [""],
    },
    {
      id: 2,
      name: "超タスク管理",
      description: `簡単なタスクを管理できます。

    みやすいUIとシンプルかつ簡単な操作で、ユーザーの生産性を向上させます。`,
      icon: "/images/apps/1.png",
      techStack: ["Swift", "UIkit"],
      appStoreUrl:
        "https://apps.apple.com/jp/app/%E8%B6%85%E3%82%BF%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86/id6747072667?l=en-US",
      features: [""],
    },
  ];

  const webApps: WebApp[] = [
    {
      id: 1,
      name: "自分AI",
      description: `自分の分身となるAIを作成できるWebアプリケーションです。

  ユーザーは自分の知識や考え方を学習させることで、
  自分らしい回答をするAIアシスタントを構築できます。`,
      icon: "/images/apps/jibun-ai-icon.png",
      techStack: ["Next.js", "TypeScript", "AI"],
      webUrl: "https://jibunai.vercel.app/",
      features: [""],
    },
  ];

  return (
    <section
      id={id}
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-700"
    >
      <div className="p-8">
        <h2 className="text-3xl text-white mb-8">MyApp</h2>

        {/* iOS Apps Section */}
        <div className="mb-12">
          <h3 className="text-2xl text-white mb-6">iOS Apps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {iosApps.map((app: IosApp) => (
              <div
                key={app.id}
                className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="w-20 h-20 bg-gray-700 rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-400 mb-4 whitespace-pre-line">
                  {app.description}
                </p>
                <div className="flex gap-2 mb-4">
                  {app.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View on App Store
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Web Apps Section */}
        <div>
          <h3 className="text-2xl text-white mb-6">Web Apps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {webApps.map((app: WebApp) => (
              <div
                key={app.id}
                className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="w-20 h-20 bg-gray-700 rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-400 mb-4 whitespace-pre-line">
                  {app.description}
                </p>
                <div className="flex gap-2 mb-4">
                  {app.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Visit Web App
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
