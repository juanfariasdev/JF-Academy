import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import { LessonType } from "../../graphql/generated";

interface ILessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    courseSlug?: string;
    type: LessonType;
}

function Lesson(props: ILessonProps){
    const { lessonSlug } = useParams<{ lessonSlug: string }>()
    const { title, slug, availableAt, courseSlug, type } = props;
    const isLessonAvaliable = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === lessonSlug;

    console.log(slug, lessonSlug);
    return(
        <Link to={`/course/${courseSlug}/${slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-all ${isActiveLesson && 'bg-green-500'}`}>
                <header className="flex items-center justify-between">
                    {isLessonAvaliable ? (
                    <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 $ ${(isActiveLesson && 'text-white')}`}>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} />
                        Em breve
                    </span>
                    )}
                    
                    <span className={`text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ${(isActiveLesson && 'border-white')}`}>
                        {type === 'live'? 'AO VIVO': 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={` mt-5 block ${(isActiveLesson && 'text-white')} ${(!isActiveLesson && 'text-gray-200')}`}>
                    {title}
                </strong>
            </div>
        </Link>
    ) 
}

export { Lesson }