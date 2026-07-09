import MainPage from "../components/MainPage/MainPage";
import ProjectFolder from "../components/ProjectsPage/ProjectFolder";
import SearchAndFilterHeader from "../components/ProjectsPage/SearchAndFilterHeader";
import type Project from "../types/Project";

const ProjectsPage: React.FC = () => {

    const projects: Project[] = [
        {
                id: 1,
                name: "Project 1",
                architecture: "Microservices",
                model: "GPT-5.5 + RAG",
                updated: "Yesterday",
                industry: "AI",
        },
        {
                id: 2,
                name: "Project 2",
                architecture: "Microservices",
                model: "GPT-5.5 + RAG",
                updated: "Yesterday",
                industry: "Healthcare",
        },
        {
                id: 3,
                name: "Project 3",
                architecture: "Microservices",
                model: "GPT-5.5 + RAG",
                updated: "Yesterday",
                industry: "AI",
        },
        {
                id: 4,
                name: "Project 4",
                architecture: "Microservices",
                model: "GPT-5.5 + RAG",
                updated: "Yesterday",
                industry: "Finance",
        },
    ];

    return (
        <MainPage>
            <div>
                <div>
                    <SearchAndFilterHeader />
                </div>
                <div>
                    {
                        projects.map(project => (
                            <ProjectFolder key={project.id} project={project} />
                        ))
                    }
                </div>
            </div>
        </MainPage>
    )
}

export default ProjectsPage;