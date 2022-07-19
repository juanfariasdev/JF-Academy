import { useGetLessonByCourseSlugQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson"

import './Sidebar.css';

interface IProps {
  stateMenu: boolean,
  courseSlug?: string
}
function Sidebar(props: IProps){
  const { courseSlug, stateMenu } = props;
  if(stateMenu){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = ""
  }
    const { data } = useGetLessonByCourseSlugQuery({
      variables: {
        slug: props.courseSlug
      }
    })
    return (
    <aside className="xl:w-[348px] bg-gray-700 p-6 border-l border-gray-600 z-[99] transition-all lateralMenu" style={stateMenu? {right: 0, overflow: "hidden scroll"} : {}}>
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronograma das aulas
        </span>

        <div className="flex flex-col gap-8">
        {data?.course?.lessons?.map((lesson)=>(
                <Lesson 
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
                courseSlug={courseSlug}
                 />
            ))}
        </div>
    </aside>
    )
}

export { Sidebar }