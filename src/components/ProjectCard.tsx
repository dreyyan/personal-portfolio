interface ProjectCardProps {
    imgSrc?: string;
    title: string;
    description: string;
    previewLink: string;
    codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, title, description, previewLink, codeLink }) => {
    return (
        <div className="rounded-xl shadow-lg overflow-hidden bg-[var(--secondary-background)] flex flex-col">
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-t-[14px] flex justify-center items-center" />

            <div className="bg-[var(--card)] pt-4 rounded-b-[14px]">
                <div className="px-4">
                    <h3 className="font-heading font-bold text-lg">{title}</h3>
                    <p className="font-body text-sm mt-3 mb-4">{description}</p>
                </div>

                <div className="flex">
                <a
                    href={previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center text-center text-sm font-bold text-[var(--text-primary)] bg-[var(--accent)] py-1 rounded-bl-xl
                    transition-colors
                    duration-300
                    hover:bg-[var(--accent)]/80
                    focus:outline-none
                    "
                >
                    PREVIEW
                </a>

                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center text-center text-sm font-bold text-[var(--color-accent)] py-1 rounded-br-xl border border-[var(--color-accent)]
                    transition-colors
                    duration-300
                    hover:border-t-[var(--text-primary)]/80
                    hover:border-b-[var(--text-primary)]/80
                    hover:border-r-[var(--text-primary)]/80
                    hover:text-[var(--text-primary)]/80
                    focus:outline-none
                    "
                >
                    View Code →
                </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;