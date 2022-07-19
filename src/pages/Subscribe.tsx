import { Logo } from "../assets/logo"

function Subscribe(){
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1300px] px-10 flex items-center justify-between mt-20 mx-auto flex-col gap-5 lg:flex-row">
                <div className="max-w-[640px]">
                    <Logo/>

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Aprenda do zero a dominar as <strong className="text-blue-500">principais ferramentas</strong> do mercado com a <strong className="text-blue-500">JF&nbsp;Academy</strong>
                    </h1>
                     
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Dentro da plataforma possui diversos cursos para transformar você dominar na prática
                        diversas tecnologias e se transformar
                        na pessoa mais requisitada do mercado e preparado para acessar as melhores 
                        oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded max-w-[640px] w-full lg:w-auto">
                    <h2 className="text-2xl mb-6 black font-bold">Inscreva-se gratuitamente</h2>

                    <form action="" className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo"
                        required
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="tel"
                        placeholder="Digite seu telefone" 
                        required
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email"
                        placeholder="Digite seu e-mail" 
                        required
                        />

                        <button 
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                        type="submit"
                        >
                            Garantir vaga
                        </button>
                        

                    </form>
                </div>
            </div>
            <img className="mt-10" src="/src/assets/code-mokup.png" alt=""/>
        </div>
    )
}


export { Subscribe }