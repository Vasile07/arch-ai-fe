import type { IconType } from "react-icons";

export default interface MenuOption {
    image: IconType,
    title: string,
    description: string,
    isMain: boolean
}