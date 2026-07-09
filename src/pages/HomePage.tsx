import MainPage from "../components/MainPage/MainPage";
import { BsPlusLg } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import type MenuOption from "../types/MenuOption";
import OptionCard from "../components/HomePage/OptionCard";
import waves from "../assets/waves.svg"
import stars from "../assets/stars.svg"
import "./css/HomePage.css"
import TypingText from "../components/HomePage/TypingText";


const HomePage: React.FC = () => {

    const options: MenuOption[] = [
        {
            image: BsPlusLg,
            title: "New Project",
            description: "Start a new architecture design from scratch.",
            isMain: true,
        },
        {
            image: BsFolder,
            title: "Projects",
            description: "View and manage your existing architecture projects.",
            isMain: false,
        },
        {
            image: IoSettingsOutline,
            title: "Settings",
            description: "Configure preferences, models, and application settings.",
            isMain: false,
        },
    ]

    return (
        <MainPage>
            <div className="home-page-content">
                {/* <div className="home-page-title-container"> */}
                <TypingText
                    speed={60}
                    pause={100}
                    className="home-page-title-container"
                    segments={[
                        { text: "Welcome back, ", className: "home-page-title-text" },
                        { text: "Vasile", className: "home-page-title-text highlight" },
                        { text: "!", className: "home-page-title-text" },
                        { break: true },
                        { text: "How can i help you today?", className: "home-page-subtitle-text" },
                    ]}
                />
                {/* </div> */}
                <div className="home-page-body">
                    <div className="home-page-decoration-container">
                        <img src={waves} className="waves" />
                        <img src={stars} className="stars" />
                    </div>
                    <div className="option-cards-container">
                        {options.map((option, index) => (
                            <OptionCard
                                key={option.title}
                                option={option}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainPage>
    )
}

export default HomePage;