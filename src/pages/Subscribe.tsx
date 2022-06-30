import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import codeMockup from '../assets/code-mockup.png';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/genereted';

export function Subscribe() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event');        
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex flex-col items-center justify-center md:flex-row md:justify-between mt-10 md:mt-20 mx-auto">
                <div className="p-6 md:p-0 max-w-[640px] flex flex-col items-center md:items-start">
                    <Logo />

                    <h1 className='mt-6 md:mt-8 text-3xl text-center md:text-left md:text-[2.5rem] leading-tight'>
                        Um conteúdo completo que irá fazer você subir de nível com <strong className='text-blue-500'>React</strong>
                    </h1>
                    <p className='mt-6 md:mt-4 text-center md:text-left text-gray-200 leading-relaxed'>
                        Você vai dominar na prática uma das tecnologias mais utilizadas e com
                        alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="px-6 py-8 md:p-8 w-full md:w-auto bg-gray-700 border border-gray-500 rounded">
                    <strong className='text-lg md:text-2xl mb-6 block'>Insceva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>
                        <input 
                            className='bg-gray-900 rounded px-5 h-14'
                            type="text" 
                            placeholder='Seu nome completo'
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className='bg-gray-900 rounded px-5 h-14'
                            type="email" 
                            placeholder='Digite seu e-mail'
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type='submit'
                            disabled={loading}
                            className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:hover:bg-green-500'
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={codeMockup} alt="" className='mt-10' />
        </div>
    )
}