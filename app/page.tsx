export default function Home(){
  return (

  <div className="bg-gray-900">
    <div className="min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          こんにちは。やすです。
        </h1>
        <p className="text-xl text-gray-60">
          今日そと1日もでてないンゴ
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">これが私です。 </h2>
          <p className="text-blue-400">
            TypeScript、Next.js、AWS、Docker、Terraformを学習中です
            このサイトを通じてモダンな技術を身につけたい！
          </p>
        </section>
              <div className="grid grid-cols-2 md:grid-cols3 gap-4">
              <div className="border p-4 rounded">TypeScript</div>
              <div className="border p-4 rounded">Next.JS</div>
              <div className="border p-4 rounded">Node.JS</div>
              <div className="border p-4 rounded">AWS</div>   
              <div className="border p-4 rounded">Docker</div>
              <div className="border p-4 rounded">Terraform</div>
              <div className="border p-4 rounded">Linux</div>
            </div>           
          </main>
      
      </div>
    </div>
  );
}