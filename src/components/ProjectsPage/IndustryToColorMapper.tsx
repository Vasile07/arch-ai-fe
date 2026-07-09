import type { Industry } from "../../types/Industry";

export default function mapIndustryToColor(industry: Industry) {
    const industryColors = {
        Healthcare: {color: "#D4ECD2", darkColor: "#BFD4BD"},
        Finance:{color: "#D2E1EC", darkColor: "#BDCBD4"},
        AI: {color: "#EBE2EB", darkColor: "#CCB7CC"},
        Education: {color: "#ECEAD2", darkColor: "#D4D3BD"},
        ECommerce: {color: "#EDD3D3", darkColor: "#D4BCBC"},
    };

    return industryColors[industry]
}
