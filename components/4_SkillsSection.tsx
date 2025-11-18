import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

interface SkillsSectionProps {
  id?: string;
}
interface Skill {
  id: number;
  name: string;
  duration: string;  // "7ヶ月"
  description: string;
  category?: string;  // "言語", "フレームワーク", "インフラ" など（オプション）
}


export function SkillsSection({ id }: SkillsSectionProps) {

 const skills: Skill[] = [
    {
      id: 1,
      name: "Swift",
      duration: "7ヶ月",
      description: "個人開発でStudyArena、超タスク管理というアプリを作成しました。その２つの開発に主に用いています。",
      category: "言語"
    },
    {
      id: 2,
      name: "Python",
      duration: "4ヶ月",
      description: "主にインターンで、大規模なデータを持ってくるAPIの開発やGCP上のCloudRunでパイプライン作成をするために使いました。",
      category: "言語"
    },
    {
      id: 3,
      name: "Node.js",
      duration: "3ヶ月",
      description: "インターンで、インターン用の勤怠アプリを作成した際に、そのバックエンドでNode.jsを使用しました。",
      category: "ランタイム"
    },
    {
      id: 4,
      name: "TypeScript",
      duration: "4ヶ月",
      description: "インターンで自社SFAのUIを修正する際に用いていました。",
      category: "言語"
    },
    {
      id: 5,
      name: "Next.js",
      duration: "4ヶ月",
      description: "インターンで、自社SFAのUIコンポーネントを作成していました。個人開発でのポートフォリオサイトを作成する際にも使っていました。",
      category: "フレームワーク"
    },
    {
      id: 6,
      name: "Docker",
      duration: "4ヶ月",
      description: "インターン用の勤怠アプリを作成する際のパッケージ管理とデプロイの際コンテナを使用していました。",
      category: "インフラ"
    },
    {
      id: 7,
      name: "AWS",
      duration: "4ヶ月",
      description: "自主学習でUdemyにてAWSの学習をしつつハンズオンでサービスに軽く触れました。",
      category: "クラウド"
    },
    {
      id: 8,
      name: "GCP",
      duration: "4ヶ月",
      description: "主に個店販促ツールや、API作成などをする際に各サービスを使いました。",
      category: "クラウド"
    },
    {
      id: 9,
      name: "Prisma",
      duration: "4ヶ月",
      description: "長期インターンにおいてSQLを管理するツールとして使用していました。",
      category: "ORM"
    },
    {
      id: 10,
      name: "Linux",
      duration: "5ヶ月",
      description: "独学で、コマンドを習得するために学習していました。",
      category: "OS"
    },
    {
      id: 11,
      name: "Firebase",
      duration: "7ヶ月",
      description: "上のSwiftで作成したアプリのDBとして使いました。",
      category: "BaaS"
    }
  ];





  return(
  <section
    id={id}
    className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-600 py-16"  >
    <div className="max-w-6xl mx-auto p-8">
         <h2 className="text-4xl text-white font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors border border-gray-700"
            >
              {/* スキル名と期間 */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
                  {skill.duration}
                </span>
              </div>
              
              {/* カテゴリ（あれば） */}
              {skill.category && (
                <span className="inline-block text-xs text-blue-400 mb-3">
                  {skill.category}
                </span>
              )}
              
              {/* 説明 */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
          </div>
    </div>
  </section>
  );
}
