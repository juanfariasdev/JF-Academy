import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


const GET_LESSONS_QUERY = gql`
  query {
    course(where: {id: "cl5mdo4919qn90blzacbfda3w"}) {
    lessons {
      id
      slug
      title
      description
      videoId
      availableAt
    }
  }
  }
`

interface ILesson{
  id: string;
  slug: string;
  title: string;
  description: string;
  videoId: string;
  availableAt: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <h1 className="text-2xl">
      <ul>
        {data?.course?.lessons?.map((lesson: ILesson)=>{

          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </h1>
  )
}

export default App
