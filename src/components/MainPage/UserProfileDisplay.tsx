import { useEffect, useState } from "react"
import "./css/UserProfileDisplay.css"
import type UserInformation from "../../types/UserInformation"

const UserProfileDisplay : React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInformation>({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        setUserInfo({
            firstName: "Vasile",
            lastName: "Irimies"
        })
    },[])

    return (
        <div className="user-profile-container">
            <div className="user-icon">
                {userInfo.firstName.charAt(0)}{userInfo.lastName.charAt(0)}
            </div>
            <p>
                {userInfo.firstName}
            </p>
        </div>
    )
}

export default UserProfileDisplay