import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/logo"
import { useCreateSubscriberMutation } from "../graphql/generated";


import Banner from '../assets/code-mokup.png';

function Subscribe(){
    const navigate = useNavigate();
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');

    const [createSubscriber, {loading}] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent){
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                phone,
                email
            }
        }).then(() => navigate('/course/elementor-na-pratica/instalando-o-wordpress-localmente')).catch(()=> navigate('/course/elementor-na-pratica/instalando-o-wordpress-localmente'))

        

    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-blur bg-cover bg-no-repeat">
            <div className="flex items-center justify-between flex-col gap-5 w-full max-w-[1300px] px-8 mt-20 mx-auto 
            lg:flex-row">
                <div className="max-w-[640px]">
                    <Logo/>

                    <h1 className="mt-8 text-[2.5rem] text-center leading-tight 
                    lg:text-left">
                        Aprenda do zero a dominar as <strong className="text-blue-500">principais ferramentas</strong> do mercado com a <strong className="text-blue-500">JF&nbsp;Academy</strong>
                    </h1>
                     
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Dentro da plataforma possui diversos cursos para transformar você dominar na prática
                        diversas tecnologias e se transformar
                        na pessoa mais requisitada do mercado e preparado para acessar as melhores 
                        oportunidades do mercado.
                    </p>
                </div>
                <div className="w-full max-w-[640px] p-8 bg-gray-700 border border-gray-500 rounded 
                lg:w-auto">
                    <h2 className="mb-6 text-2xl font-bold">Inscreva-se gratuitamente</h2>

                    <form action="" className="flex flex-col gap-2 w-full" onSubmit={handleSubscribe}>
                        <input 
                        className="h-14 px-5 bg-gray-900 rounded"
                        type="text" 
                        placeholder="Seu nome completo"
                        onChange={event => setName(event.target.value)}
                        required
                        />
                        <input 
                        className="h-14 px-5 bg-gray-900 rounded"
                        type="tel"
                        placeholder="Digite seu telefone" 
                        onChange={event => setPhone(event.target.value)}
                        required
                        />
                        <input 
                        className="h-14 px-5 bg-gray-900 rounded"
                        type="email"
                        placeholder="Digite seu e-mail" 
                        onChange={event => setEmail(event.target.value)}
                        required
                        />

                        <button 
                        className="mt-4 py-4 bg-green-500 rounded text-sm font-bold uppercase transition-colors 
                        hover:bg-green-700 disabled:opacity-50"
                        disabled={loading}
                        type="submit"
                        >
                            Garantir vaga
                        </button>
                        

                    </form>
                </div>
            </div>
            <img className="mt-10" src={Banner} alt=""/>
        </div>
    )
}


export { Subscribe }