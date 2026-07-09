import MainPage from "../components/MainPage/MainPage";
import { IoAddOutline } from "react-icons/io5";
import type MenuOption from "../types/MenuOption";
import OptionCard from "../components/HomePage/OptionCard";
import waves from "../assets/waves.svg"
import stars from "../assets/stars.svg"


const HomePage: React.FC = () => {

    const options: MenuOption[] = [
        {
            image: IoAddOutline,
            title: "New Project",
            description: "Start a new architecture design from scratch.",
            isMain: false,
        },
        {
            image: IoAddOutline,
            title: "Projects",
            description: "View and manage your existing architecture projects.",
            isMain: false,
        },
        {
            image: IoAddOutline,
            title: "Settings",
            description: "Configure preferences, models, and application settings.",
            isMain: false,
        },
    ]

    return (
        <MainPage>
            <div>
                <div>
                    <p>
                        Welcome back, <span>Vasile</span>!
                    </p>
                    <p>
                        How can i help you today?
                    </p>
                </div>
                <div>
                    <div>
                        <img src={waves} />
                        <img src={stars} />
                    </div>
                    <div>
                        {
                            options.map(option => (
                                <OptionCard key={option.title} option={option} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </MainPage>
    )
}

export default HomePage;