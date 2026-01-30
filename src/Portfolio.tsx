import ProjectCard from "./components/ProjectCard";

const Portfolio = () => {
    return (
        <div className="flex-col w-auto h-auto py-16 px-10">
            <p className="font-heading font-black text-5xl text-center mb-12">PORTFOLIO</p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
                <ProjectCard
                    imgSrc=""
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in  placerat risus."
                    previewLink=""
                    codeLink=""
                />
            </div>
        </div>
    );
};

export default Portfolio;