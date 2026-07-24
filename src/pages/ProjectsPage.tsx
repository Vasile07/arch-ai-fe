import { useCallback, useState } from "react";
import MainPage from "../components/MainPage/MainPage";
import ProjectFolder from "../components/ProjectsPage/ProjectFolder";
import SearchAndFilterHeader from "../components/ProjectsPage/SearchAndFilterHeader";
import { Industry } from "../types/Industry";
import type Project from "../types/Project";
import "./css/ProjectsPage.css"
import { ProjectSortCriteria } from "../types/ProjectSortCryteria";

function sortProjects(
        projects: Project[],
        criterion: string
): Project[] {
        const sorted = [...projects];

        switch (criterion) {
                case "Project Name (A-Z)":
                        return sorted.sort((a, b) => a.name.localeCompare(b.name));

                case "Project Name (Z-A)":
                        return sorted.sort((a, b) => b.name.localeCompare(a.name));

                case "Industry (A-Z)":
                        return sorted.sort((a, b) => a.industry.localeCompare(b.industry));

                case "Industry (Z-A)":
                        return sorted.sort((a, b) => b.industry.localeCompare(a.industry));

                case "Architecture (A-Z)":
                        return sorted.sort((a, b) =>
                                a.architecture.localeCompare(b.architecture)
                        );

                case "Architecture (Z-A)":
                        return sorted.sort((a, b) =>
                                b.architecture.localeCompare(a.architecture)
                        );

                case "AI Model (A-Z)":
                        return sorted.sort((a, b) => a.model.localeCompare(b.model));

                case "AI Model (Z-A)":
                        return sorted.sort((a, b) => b.model.localeCompare(a.model));

                case "Last Updated":
                        // Example order for your sample data.
                        // Prefer using a Date in your Project type instead.
                        const order: Record<string, number> = {
                                Today: 0,
                                "2 hours ago": 1,
                                "5 hours ago": 2,
                                "6 hours ago": 3,
                                Yesterday: 4,
                                "2 days ago": 5,
                                "3 days ago": 6,
                                "4 days ago": 7,
                                "5 days ago": 8,
                                "1 week ago": 9,
                                "3 weeks ago": 10,
                        };

                        return sorted.sort(
                                (a, b) =>
                                        (order[a.updated] ?? Number.MAX_SAFE_INTEGER) -
                                        (order[b.updated] ?? Number.MAX_SAFE_INTEGER)
                        );

                default:
                        return sorted;
        }
}

const ProjectsPage: React.FC = () => {

        const projects: Project[] = [
                {
                        id: 1,
                        name: "Customer Support Assistant",
                        architecture: "Microservices",
                        model: "GPT-5.5 + RAG",
                        updated: "2 hours ago",
                        industry: Industry.ECommerce,
                },
                {
                        id: 2,
                        name: "Medical Report Analyzer",
                        architecture: "Event-Driven",
                        model: "GPT-5.5",
                        updated: "Yesterday",
                        industry: Industry.Healthcare,
                },
                {
                        id: 3,
                        name: "Financial Insights",
                        architecture: "Microservices",
                        model: "GPT-5.5 + RAG",
                        updated: "3 days ago",
                        industry: Industry.Finance,
                },
                {
                        id: 4,
                        name: "AI Research Copilot",
                        architecture: "Monolith",
                        model: "GPT-5.5",
                        updated: "Today",
                        industry: Industry.AI,
                },
                {
                        id: 5,
                        name: "Learning Companion",
                        architecture: "Serverless",
                        model: "GPT-4.1",
                        updated: "Yesterday",
                        industry: Industry.Education,
                },
                {
                        id: 6,
                        name: "Invoice Processor",
                        architecture: "Microservices",
                        model: "Claude 4 Sonnet",
                        updated: "5 hours ago",
                        industry: Industry.Finance,
                },
                {
                        id: 7,
                        name: "Clinical Notes Search",
                        architecture: "Microservices",
                        model: "GPT-5.5 + RAG",
                        updated: "1 week ago",
                        industry: Industry.Healthcare,
                },
                {
                        id: 8,
                        name: "Product Recommendation Engine",
                        architecture: "Serverless",
                        model: "Gemini 2.5 Pro",
                        updated: "Today",
                        industry: Industry.ECommerce,
                },
                {
                        id: 9,
                        name: "Lecture Summarizer",
                        architecture: "Monolith",
                        model: "GPT-4.1",
                        updated: "4 days ago",
                        industry: Industry.Education,
                },
                {
                        id: 10,
                        name: "Fraud Detection Assistant",
                        architecture: "Event-Driven",
                        model: "GPT-5.5 + RAG",
                        updated: "Yesterday",
                        industry: Industry.Finance,
                },
                {
                        id: 11,
                        name: "Document Intelligence",
                        architecture: "Microservices",
                        model: "Claude 4 Sonnet",
                        updated: "Today",
                        industry: Industry.AI,
                },
                {
                        id: 12,
                        name: "Virtual Teaching Assistant",
                        architecture: "Serverless",
                        model: "Gemini 2.5 Flash",
                        updated: "2 days ago",
                        industry: Industry.Education,
                },
                {
                        id: 13,
                        name: "Patient Triage Bot",
                        architecture: "Microservices",
                        model: "GPT-5.5",
                        updated: "6 hours ago",
                        industry: Industry.Healthcare,
                },
                {
                        id: 14,
                        name: "Inventory Optimizer",
                        architecture: "Microservices",
                        model: "GPT-5.5 + RAG",
                        updated: "3 weeks ago",
                        industry: Industry.ECommerce,
                },
                {
                        id: 15,
                        name: "Code Review Assistant",
                        architecture: "Monolith",
                        model: "Claude 4 Sonnet",
                        updated: "Today",
                        industry: Industry.AI,
                },
                {
                        id: 16,
                        name: "Investment Advisor",
                        architecture: "Event-Driven",
                        model: "Gemini 2.5 Pro",
                        updated: "Yesterday",
                        industry: Industry.Finance,
                },
                {
                        id: 17,
                        name: "Campus Knowledge Hub",
                        architecture: "Serverless",
                        model: "GPT-5.5 + RAG",
                        updated: "5 days ago",
                        industry: Industry.Education,
                },
        ];

        const industries: () => string[] = useCallback(() => {
                return projects.map(project => project.industry.toString()).concat("All industries")
        }, [projects])


        const [searchValue, setSearchValue] = useState("")
        const [filterIndustry, setFilterIndustry] = useState<string>("All industries")
        const [sortProjectsBy, setSortProjectsBy] = useState<string>(ProjectSortCriteria[0])

        const getProjects: () => Project[] = useCallback(() => {
                return sortProjects(projects.filter(p => p.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                        .filter(p => filterIndustry === "All industries" || p.industry === filterIndustry)
                        , sortProjectsBy
                )
        }, [projects, sortProjectsBy])

        return (
                <MainPage>
                        <div className="projects-page-body">
                                <div className="projects-page-body-header-container">
                                        <SearchAndFilterHeader
                                                searchValue={searchValue}
                                                onSearchValueChange={setSearchValue}
                                                industries={industries()}
                                                defaultIndustry={filterIndustry}
                                                onIndustryChange={setFilterIndustry}
                                                sortByOptions={ProjectSortCriteria}
                                                sortByDefaultValue={sortProjectsBy}
                                                onSortByChange={setSortProjectsBy}
                                        />
                                </div>
                                <div className="project-page-scroll-wrapper">
                                        <div className="projects-page-projects-container">
                                                {
                                                        getProjects().map(project => (
                                                                <ProjectFolder key={project.id} project={project} />
                                                        ))
                                                }
                                                <div>
                                                        <ProjectFolder key={"add"} />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </MainPage>
        )
}

export default ProjectsPage;