import { Link } from "react-router-dom";
import { Header } from "../components/Header"
import { useGetCoursesQuery } from "../graphql/generated";

function Courses(){
    const { data } = useGetCoursesQuery();
    return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 flex-col align-center
            [&>*]:pt-24 xl:[&>*]:pt-4">
            <div className="flex flex-1 p-4 justify-center">
                <div className="w-full h-full max-w-[1300px] max-h-[60vh] flex-1">      
                    <h2 className="text-2xl font-bold">Cursos</h2>
                    {data?.courses && (
                        <div className={`mt-4 grid  gap-3 grid-cols ${(data.courses.length >= 4? " sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": `sm:grid-cols-2`)}`}>
                        {data?.courses.map((course)=>(
                            <Link to={`/course/${course.slug}`}>
                                <div className="flex flex-1 flex-col justify-center items-center cursor-pointer border border-transparent transition-all rounded hover:border-green-400">
                                <img
                                className="w-full rounded overflow-hidden" 
                                src={course.tumbnailUrl} alt=""/>
                                
                                <div className="flex flex-1 w-full  px-2 my-4 items-center">
                                    <img className="w-10 h-10 rounded-full" src={course.teachers[0]?.avatarURL} alt="" />
                                    <div className="px-2">
                                        <h4 className="text-lg font-bold text-left h-14 overflow-ellipsis line-clamp-2">{course.title}</h4>
                                        <span className="text-gray-400">{course.teachers[0]?.name}</span>
                                    </div>

                                </div>
                                
                            </div>
                        </Link>
                        ))}
                    </div>
                    ) }

                </div>
            </div>

            </main>
    </div>
    )
}


export { Courses }