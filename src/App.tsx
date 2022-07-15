import { gql, useQuery } from "@apollo/client"
import { Course } from "./pages/Course";


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
    <Course />
  )
}

export default App
