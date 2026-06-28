import "./css/TargetComponent.css";
import student from "../../assets/student.png"
import architect from "../../assets/architect.png"
import team from "../../assets/team.png"

interface CardItem {
    id: number;
    title: string;
    image: string;
}

interface Position {
    topCoeficient: number;
    leftCoeficient: number;
    rotationAngle: number;
}

const Card: React.FC<{ item: CardItem }> = ({ item }) => {
    return (
        <div className="card-container">
            <p>{item.title}</p>
            <img src={item.image} alt={`${item.title}`}/>
        </div>
    )
}

const START_POINT_X = 5;
const START_POINT_Y = 36;

const TargetComponent: React.FC = () => {

    const targets: { position: Position, item: CardItem }[] = [
        {
            item: {
                id: 1,
                title: "Student",
                image: student,
            },
            position: {
                topCoeficient: 0,
                leftCoeficient: 0,
                rotationAngle: -13,
            }
        },
        {
            item: {
                id: 2,
                title: "Architects",
                image: architect
            },
            position: {
                topCoeficient: 0.78,
                leftCoeficient: 0.85,
                rotationAngle: 20,
            }
        },
        {
            item: {
                id: 3,
                title: "Teams",
                image: team
            },
            position: {
                topCoeficient: 1.42,
                leftCoeficient: 0.03,
                rotationAngle: 6,
            }
        }
    ]



    return (
        <div className="target-main-container">
            {
                targets.map((target, index) => (
                    <div
                        key={target.item.id}
                        className="animated-wrapper"
                        style={{
                            top: `calc(${START_POINT_X}% + (var(--card-height) * ${target.position.topCoeficient}))`,
                            left: `calc(${START_POINT_Y}% + (var(--card-width) * ${target.position.leftCoeficient}))`,
                            "--rotation": `${target.position.rotationAngle}deg`,
                            animationDelay: `${index * 0.2}s`,
                        } as React.CSSProperties}
                                    >
                        <Card item={target.item} />
                    </div>
                ))
            }
        </div>
    )
}

export default TargetComponent