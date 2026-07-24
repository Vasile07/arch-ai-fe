import type { Industry } from "./Industry";

export default interface Project {
    id: number,
    name: string;
    architecture: string;
    model: string;
    updated: string;
    industry: Industry;
}