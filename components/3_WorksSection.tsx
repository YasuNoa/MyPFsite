import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

interface WorksSectionProps {
  id?: string;
}
interface Work {
  id: number;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  description: string;
  achievements: string[];
  category: string;
}



export function WorksSection({ id }: WorksSectionProps) {
  const works: Work[] = [
    {
      id: 1,
      title: "SFAアプリ",
      period: "制作期間：1ヶ月",
      role: "フルスタック開発",
      techStack: ["Next.js", "Tailwind CSS", "React", "Node.js", "Prisma", "MySQL", "Docker", "GCP"],
      description: "家具屋を想定して、Webアプリから顧客の会員情報を取得し、顧客情報をより管理しやすくするSFAツール。会員登録した顧客の媒体がバラバラのため一元管理しにくく、営業効率が悪いという課題を解決するために作成しました。",
      achievements: [
        "会員登録媒体がWebでもモバイルでも対面や書面でも対応できるように、全データをアプリ上で参照可能に",
        "IDとの紐づけを行い、顧客情報をIDに紐づけて取得・管理できるように実装",
        "電話番号と生年月日を複合キーにして重複を回避",
        "宅配伝票機能をアプリに組み込み、印刷や配送状況の確認が可能に"
      ],
      category: "長期インターン"
    },
    {
      id: 2,
      title: "インターン勤怠アプリ",
      period: "制作期間：4ヶ月",
      role: "フロントエンド開発・サーバーエラー修正",
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "Prisma", "MySQL", "Docker", "GCP"],
      description: "インターン向けの勤怠アプリを作成しました。元々スプレッドシートによって管理されており、先輩が作成したDBとバックエンドの骨子をベースに、主にサーバーエラーの修正とフロントエンドの作成に従事しました。",
      achievements: [
        "Supabaseに対して、コネクションプーリングを導入してサーバーエラーを解消",
        "直接接続ではなく、常時いくつかの接続をプールさせておくことでパフォーマンス向上",
        "フロントエンドのUI/UX設計と実装を担当"
      ],
      category: "長期インターン"
    },
    {
      id: 3,
      title: "大量データの移行ツール",
      period: "制作期間：2ヶ月",
      role: "バックエンド開発",
      techStack: ["Python", "Node.js", "Terraform", "GCP"],
      description: "Eloquaというマーケティングオートメーションツールで集計したJSONデータを用いて分析を行うために、データをEloquaからGCP上に送るパイプラインを作成しました。",
      achievements: [
        "初めて本格的なAPIを作成し、APIの概念を習得",
        "GCPの操作方法とサービス内容の理解を深めた",
        "大規模データの効率的な移行を実現"
      ],
      category: "長期インターン"
    },
    {
      id: 4,
      title: "個店販促ツール",
      period: "制作期間：1ヶ月",
      role: "バックエンド開発・要件定義",
      techStack: ["Python", "GCP", "Colab"],
      description: "広告の効果を可視化するために、POS上のデータから売上実績と客数データを取得し、広告施策についてのデータを紐づける統合処理を行う作業を自動化するパイプラインをGCP上で構築しました。",
      achievements: [
        "上流から下流まで基本的に自分で設計し実装",
        "クライアントと要件をすり合わせながら設計構築を実施",
        "データ統合処理の自動化を実現"
      ],
      category: "長期インターン"
    },
    {
      id: 5,
      title: "社内RAGアプリ",
      period: "制作期間：2ヶ月",
      role: "フルスタック開発",
      techStack: ["Python", "Node.js", "TypeScript", "Slack", "GCP", "Google Drive", "Gemini API"],
      description: "社内の情報がドライブ内に大量にあり、欲しい情報をすぐつかめないという課題を解決するため、上司に許可をもらい業務時間外で自主的に制作を行いました。",
      achievements: [
        "Cloud FunctionでGemini APIを取得してSlackと連携",
        "質問があると、Google Driveの情報をGeminiが検索し、Slack Botとして回答",
        "プロジェクトの引き継ぎ時間や既存情報に対する育成時間を短縮"
      ],
      category: "長期インターン"
    },
  ];




 return (
    <section
      id={id}
      className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-600 py-16"
    >
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl text-white font-bold mb-16 text-center">
          Works
        </h2>

        {/* タイムライン */}
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500"></div>

          {/* 各プロジェクト */}
          <div className="space-y-12">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* タイムラインのドット */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-700 z-10"></div>

                {/* コンテンツカード */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    {/* カテゴリバッジ */}
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-3">
                      {work.category}
                    </span>

                    {/* タイトルと期間 */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{work.period}</p>

                    {/* 役割 */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-400">
                        役割:
                      </span>
                      <span className="text-sm text-gray-300 ml-2">
                        {work.role}
                      </span>
                    </div>

                    {/* 技術スタック */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 概要 */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {work.description}
                    </p>

                    {/* 成果・学び */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        成果・学び
                      </h4>
                      <ul className="space-y-1">
                        {work.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 空白（タイムライン反対側） */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
