import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface IProps{
    lessonSlug?: string;
}

function Video(props: IProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
          slug: props.lessonSlug
        }
      })
      if(!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
      }

      const {title, description, videoId, availableAt, course} = data.lesson;

      let avaliableDate = new Date(availableAt)
      let newDate = new Date();
      let verifyDate = avaliableDate.getTime() < newDate.getTime();
    
      const lessonFilter = {
        videoId: verifyDate? videoId : "FgdBfT-NMF0",
        title: verifyDate? title : "Volte na data correta...",
        description: description? description : ""
      }

    return (
    <div className="flex-1 p-4" key={lessonFilter.videoId}>
        <div className="bg-black flex justify-center">
            <div className="w-full h-full max-w-[1300px] max-h-[60vh] aspect-video">
                <Player>
                    <Youtube cookies={true} videoId={lessonFilter.videoId} />
                    <DefaultUi />
                </Player>                
            </div>
        </div>


        <div className="max-w-[1300px] mx-auto py-8">
            <div className="flex flex-col items-start gap-8 
            xl:flex-row xl:gap-16"
            >
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                       {lessonFilter.title}
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        {lessonFilter.description}
                    </p>
                    {course?.teachers && (
                    <>
                        <p className="mt-6 text-xl font-bold">{course.teachers.length > 1? "Professores" : "Professor"}</p>
                        <div className="flex gap-4 flex-col 
                        sm:flex-row"
                        >
                            {course?.teachers.map((teacher)=>(
                                <div key={teacher.id} className="flex items-center gap-4 mt-6">
                                    <img 
                                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                                    src={teacher.avatarURL? teacher.avatarURL: "https://github.com/juanfariasdev.png"}
                                    alt="" 
                                    />

                                    <div className="leading-relaxed">
                                        <strong className="block text-2xl font-bold">{teacher.name}</strong>
                                        <span className="block text-sm text-gray-200">{teacher.bio}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    )}
                </div>
                <div className="flex flex-col gap-4 w-full sm:flex-row xl:flex-col xl:w-auto">
                    <a href="" className="flex justify-center items-center gap-2 w-full p-4 bg-green-500 text-sm font-bold uppercase rounded transition-colors 
                    hover:bg-green-700">
                        <DiscordLogo size={24}/>
                        Comunidade do discord
                    </a>
                    <a href="" className="flex justify-center items-center gap-2 w-full p-4 text-blue-500 text-sm font-bold uppercase rounded transition-colors border border-blue-500 
                    hover:bg-blue-500 hover:text-gray-900">
                        <Lightning size={24}/>
                        Acesse o desafio
                    </a>
                </div>

            </div>
            <div className="grid gap-8 mt-20  
            lg:grid-cols-2">
                <a href="" className="flex items-stretch justify-between gap-6 bg-gray-700 rounded overflow-hidden transition-colors hover:bg-gray-600">
                    <div className="flex items-stretch gap-6 h-auto">
                        <div className="flex items-center h-auto p-6 bg-green-700">
                            <FileArrowDown size={40} />
                        </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Material Complementar
                        </strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Acesso o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center h-auto p-6">
                        <CaretRight size={24}/>
                    </div>
                </a>
                <a href="" className="flex items-stretch justify-between gap-6 bg-gray-700 rounded overflow-hidden transition-colors hover:bg-gray-600">
                    <div className="flex items-stretch gap-6 h-auto">
                        <div className="flex items-center h-auto p-6 bg-green-700">
                            <FileArrowDown size={40} />
                        </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Wallpapers exclusivos
                        </strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center h-auto p-6">
                        <CaretRight size={24}/>
                    </div>
                </a>
            </div>
        </div>
    </div>
)
}

export { Video } 