import type Project from "../../types/Project";
import FolderIcon from "./FolderIcon";
import { HiBuildingLibrary } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import mapIndustryToColor from "./IndustryToColorMapper";

const ProjectFolder: React.FC<{ project: Project }> = ({ project }) => {

    const {color, darkColor} = mapIndustryToColor(project.industry)

    return (
        <div>
            <FolderIcon color={color} darkColor={darkColor}/>
            <div>
                <h1>{project.name}</h1>
                <div>
                    <HiBuildingLibrary color="#000" size={16} />
                    <h2>{project.architecture}</h2>
                </div>
                <div>
                    <BsRobot color="#000" size={16} />
                    <h2>{project.model}</h2>
                </div>
                <div>
                    <BsFillClockFill color="#000" size={16} />
                    <h2>{project.updated}</h2>
                </div>
            </div>
        </div>
    );
}

export default ProjectFolder;