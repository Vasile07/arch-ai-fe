import { useRef, useState, useLayoutEffect } from "react";
import type Project from "../../types/Project";
import FolderIcon from "./FolderIcon";
import { HiBuildingLibrary } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import mapIndustryToColor from "./IndustryToColorMapper";
import "./css/ProjectFolder.css"
import { FaPlus } from "react-icons/fa6";

const ProjectFolder: React.FC<{ project?: Project }> = ({ project }) => {

    const { color, darkColor } = mapIndustryToColor(project ? project.industry : null)

    const nameRef = useRef<HTMLHeadingElement>(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    useLayoutEffect(() => {
        if (nameRef.current) {
            const overflow = nameRef.current.scrollWidth - nameRef.current.clientWidth;
            setScrollDistance(overflow > 0 ? overflow : 0);
        }
    }, [project?.name]);

    return (
        <div className="project-folder-wrapper">
            <FolderIcon color={color} darkColor={darkColor} />
            {
                project ?
                    <div className="project-infomation-container">
                        <h1
                            ref={nameRef}
                            style={{ "--scroll-distance": `${scrollDistance}px` } as React.CSSProperties}
                        >
                            {project.name}
                        </h1>
                        <div className="project-details-container">
                            <div className="project-info-row">
                                <HiBuildingLibrary color="#000" size={16} />
                                <h2>{project.architecture}</h2>
                            </div>
                            <div className="project-info-row">
                                <BsRobot color="#000" size={16} />
                                <h2>{project.model}</h2>
                            </div>
                            <div className="project-info-row">
                                <BsFillClockFill color="#000" size={16} />
                                <h2>{project.updated}</h2>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="project-add-circle">
                        <FaPlus size={28} color="#000"/>
                    </div>
            }
        </div>
    );
}

export default ProjectFolder;