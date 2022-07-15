import { gql, useQuery } from "@apollo/client"
import { Lesson } from "../Lesson"


const GET_LESSONS_QUERY = gql`
query {
  course(where: {id: "cl5mdo4919qn90blzacbfda3w"}) {
    lessons(orderBy: availableAt_ASC) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
}
`
type Lessons = {
    id: string;
    slug: string;
    title: string;
    availableAt: string;
    lessonType: 'live' | 'class';
}

interface IGetLessonsQueryResponse {
    course: {lessons: Lessons[]};
}

function Sidebar(){
    const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY)
    console.log(data);
    return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
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
                 />
            ))}
        </div>
    </aside>
    )
}

export { Sidebar }