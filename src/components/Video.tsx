import { Player, Youtube, DefaultUi } from '@vime/react'
import { DiscordLogo, Lightning, FileArrowDown, CaretRight, Image } from 'phosphor-react'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/genereted';

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if(!data || !data.lesson) {
        return (
            <p className='flex-1'>Carregando...</p>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-6 md:p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-lg md:text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                       {data.lesson.teachers && 
                            data.lesson.teachers.map((teacher, key) => (
                                <div key={key} className="flex items-center gap-4 mt-6">
                                    <img 
                                        className='h-16 w-16 rounded-full border-2 border-blue-500'
                                        src={teacher.avatarURL}
                                        alt=""
                                        />

                                    <div className="leading-relaxed">
                                        <strong className='font-bold text-lg md:text-2xl block'>
                                            {teacher.name}
                                        </strong>
                                        <span className='text-gray-200 text-sm block'>
                                            {teacher.bio}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <a href="#" className="p-4 text-sm font-bold uppercase bg-green-500 flex items-center justify-center gap-2 rounded hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-4 text-sm font-bold uppercase text-blue-500 border border-blue-500 flex items-center justify-center gap-2 rounded hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid md:grid-cols-2">
                    <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-green-700 h-full p-6 flex items-center'>
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className='text-lg md:text-2xl mb-2'>
                                Material Complementar
                            </strong>
                            <p className='text-xs md:text-sm text-gray-200'>
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className='h-full p-6 flex items-center text-blue-500'>
                            <CaretRight size={24}/>
                        </div>
                    </a>
                    <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-green-700 h-full p-6 flex items-center'>
                            <Image size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className='text-lg md:text-2xl mb-2'>
                                Wallpapers exclusivos
                            </strong>
                            <p className='text-xs md:text-sm text-gray-200'>
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className='h-full p-6 flex items-center text-blue-500'>
                            <CaretRight size={24}/>
                        </div>
                    </a>

                </div>
            </div>
        </div>


    )
}