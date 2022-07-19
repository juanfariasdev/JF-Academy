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
            <div className="h-full w-full max-w-[1300px] max-h-[60vh] aspect-video">
                <Player>
                    <Youtube cookies={true} videoId={lessonFilter.videoId} />
                    <DefaultUi />
                </Player>                
            </div>
        </div>


        <div className="py-8 max-w-[1300px] mx-auto">
            <div className="flex items-start gap-8 flex-col xl:flex-row xl:gap-16">
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
                        <div className="flex gap-4 flex-col sm:flex-row">
                            {course?.teachers.map((teacher)=>(
                                <div key={teacher.id} className="flex items-center gap-4 mt-6">
                                    <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={teacher.avatarURL? teacher.avatarURL: "https://github.com/juanfariasdev.png"}
                                    alt="" 
                                    />

                                    <div className="leading-relaxed">
                                        <strong className="font-bold text-2xl block">{teacher.name}</strong>
                                        <span className="text-gray-200 text-sm block">{teacher.bio}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row xl:flex-col gap-4 w-full xl:w-auto">
                    <a href="" className="w-full p-4 text-sm bg-green-500 items-center rounded font-bold uppercase gap-2 flex justify-center hover:bg-green-700 transition-colors">
                        <DiscordLogo size={24}/>
                        Comunidade do discord
                    </a>
                    <a href="" className="w-full p-4 text-sm items-center rounded font-bold uppercase gap-2 flex justify-center border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                        <Lightning size={24}/>
                        Acesse o desafio
                    </a>
                </div>

            </div>
            <div className="gap-8 mt-20 grid lg:grid-cols-2">
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors justify-between">
                    <div className="flex h-auto gap-6 items-stretch">
                        <div className="bg-green-700 p-6 flex items-center h-auto">
                            <FileArrowDown size={40} />
                        </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Material Complementar
                        </strong>
                        <p className="text-sm text-gray-2oo mt-2">
                            Acesso o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    </div>
                    <div className="h-auto p-6 flex items-center">
                        <CaretRight size={24}/>
                    </div>
                </a>
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors justify-between">
                    <div className="flex h-auto gap-6 items-stretch">
                        <div className="bg-green-700 p-6 flex items-center h-auto">
                            <FileArrowDown size={40} />
                        </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Wallpapers exclusivos
                        </strong>
                        <p className="text-sm text-gray-2oo mt-2">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                    </div>
                    </div>
                    <div className="h-auto p-6 flex items-center">
                        <CaretRight size={24}/>
                    </div>
                </a>
            </div>
        </div>
    </div>
)
}

export { Video } 