import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

interface AboutMeSectionProps {
  id?: string;
}

export function AboutMeSection({ id }: AboutMeSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-500 py-16"
    >
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl text-white font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          {/* プロフィール写真とヘッダー */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            {/* アイコン */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0">
              <Image
                src="/icon.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 名前と肩書き */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Yasu</h3>
              <p className="text-xl text-blue-400 mb-4">
                iOS Developer / Full Stack Engineer
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/YasuNoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://zenn.dev/noayasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zm17.181 0h6.535c.352 0 .616-.322.499-.645l-6.535-14.584c-.088-.205-.293-.323-.528-.323h-6.506c-.352 0-.616.322-.499.645l6.506 14.584c.088.205.293.323.528.323z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/yasu03_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 自己紹介文 */}
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              はじめまして、Yasuです。現在、大学生をしながらiOSアプリ開発とフルスタックエンジニアとして活動しています。
              個人開発で複数のiOSアプリをリリースし、長期インターンでは実務経験を積んでいます。
            </p>
            <p className="leading-relaxed">
              SwiftやFirebaseを使ったモバイルアプリ開発から、Next.jsやNode.jsを使ったWebアプリケーション開発、
              GCPを使ったクラウドインフラ構築まで、幅広い技術スタックでの開発経験があります。
              特に、ユーザーの課題を解決するためのプロダクト開発に情熱を注いでいます。
            </p>
            <p className="leading-relaxed">
              趣味はプログラミングと新しい技術の学習です。最近はAWS、Terraform、Dockerなどのインフラ技術や、
              LLMを活用したアプリケーション開発に興味を持っています。
              常に新しいことにチャレンジし、成長し続けることを大切にしています。
            </p>
          </div>

          {/* 趣味・興味 */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-bold text-white mb-4">興味・関心</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                モバイルアプリ開発
              </span>
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                Webアプリ開発
              </span>
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                クラウドインフラ
              </span>
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                AI/機械学習
              </span>
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                個人開発
              </span>
              <span className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm">
                技術ブログ執筆
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
