interface Section {
    id: string;
    name: string;
    opened: boolean;
}

export interface MyProfileSectionProps {
    section: Section;
    index: number;
    handlePressSection: (index: number)=> void;
}