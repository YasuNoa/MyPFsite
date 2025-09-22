export default function Home(){

const iosApps = [
  {
    id:1,
    name:"StudyArena",
    description: `勉強時間を他人と競い合うスマホアプリ「StudyArena」の開発を行っています。

  勉強モチベーション低下に悩むユーザーはこのアプリを通じて、
  他人との勉強時間による競争を行い、
  勉強に対するモチベーションを上げることができます。`,
    icon:"/images/apps/studyarena-icon.png",
    techStack:["Swift","UIkit"],
    appStoreUrl:"https://apps.apple.com/jp/app/studyarena/id6748235227?l=en-US",
    features:[""]

    
  

  }
]

  return(
    <div className="scroll-smooth">
      <nav className="fixed top-0 right-0 p-6 z-50">
        <div className="flex gap-6">
         <a href="#work" className="text-white hover:text-gray-300 transition-colors">work</a>
         <a href="#about" className="text-white hover:text-gray-300 transition-colors">about</a>
         <a href="#contact" className="text-white hover:text-gray-300 transition-colors">contact</a>
        </div>
      </nav>


      <section className="h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      
      <div className="h-full flex items-center justify-center">
        <h1 className="text-5xl text-white">Yasu\'s portfolio</h1>
        </div>
      </section>

      <section id="work" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="p-8">
          <h2 className="text-3xl text-white mb-8">MyApp</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {iosApps.map(app => (
          <div key={app.id} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
            <div className="w-20 h-20 bg-gray-700 rounded-2xl mb-4 overflow-hidden">
               <img 
               src={app.icon} 
               alt={app.name} 
               className="w-full h-full object-cover rounded-2xl" /> 
            </div> 
            <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
             <p className="text-gray-400 mb-4 whitespace-pre-line">{app.description}</p>
             <div className="flex gap-2 mb-4">
              {app.techStack.map(tech =>(
                <span key={tech}className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={app.appStoreUrl} className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              View on App Store
            </a>
            </div>
            ))}

          </div>
         </div>
 </section>
     <section className="min-h-[50vh] bg-gradient-to-b from-gray-700 to-gray-600">
        <div className="p-8">
          <h2 className="text-3xl text-white">Skills</h2>
          <div className="border p-4 rounded">Terraform</div>
        </div>
        </section>
      
     </div>
  )
}