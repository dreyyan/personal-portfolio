import ExperienceCard from "./components/ExperienceCard";
import SocialLink from "./components/SocialLink";

const Resume = () => {
    return (
        <div className="flex flex-col w-auto h-auto py-16 px-10">
            <p className="font-heading font-black text-5xl text-center mb-12">RESUME</p>

            <div className="flex flex-col gap-20">
                {/* Header */}
                <div>
                    {/* Header Information */}
                    <p className="font-heading font-bold text-3xl tracking-[10px] text-center">ADRIAN TAN</p>
                    <div className="space-y-2 my-3">
                        <div className="w-full border-b"></div>
                        <div className="w-full border-b"></div>
                    </div>
                    <div>
                        <p className="font-heading font-bold text-md tracking-[11px] text-center">WEB DEVELOPER</p>
                        <p className="font-heading font-bold text-md tracking-[10px] text-center">TECHNOPRENEUR</p>
                    </div>
                    <div className="w-full border-b my-2"></div>

                    {/* Social Links */}
                    <div className="flex flex-col items-start gap-3 my-6">
                        <SocialLink text="adriandominic.tan@wvsu.edu.ph" url="mailto:adriandominic.tan@wvsu.edu.ph" iconSrc="resume-email-icon.svg" />
                        <SocialLink text="github.com/dreyyan" url="https://github.com/dreyyan" iconSrc="resume-github-icon.svg" />
                        <SocialLink text="linkedin.com/dreyyan" url="https://linkedin.com/in/dreyyan" iconSrc="resume-linkedin-icon.svg" />
                        <SocialLink text="facebook.com/dreyyan0729" url="https://facebook.com/dreyyan0729" iconSrc="resume-facebook-icon.svg" />
                    </div>
                </div>

                {/* Experience Section */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold text-center">EXPERIENCE</h2>
                    <ExperienceCard
                        title="Freelance Web Developer"
                        iconUrl="/freelance-web-developer-icon.svg"
                        category="Self-Employed"
                        yearRange="2022 - Present"
                        description={[
                        "Developed and maintained websites for small businesses and personal projects using HTML, CSS, JavaScript, and React.",
                        "Collaborated with clients to gather requirements, provide updates, and ensure satisfaction with the final product.",
                        "Implemented responsive design principles to ensure optimal user experience across various devices."
                        ]}
                    />

                    <ExperienceCard
                        title="Web Development Intern"
                        iconUrl="/web-development-intern-icon.svg"
                        category="Tech Solutions Inc."
                        yearRange="2021 - 2022"
                        description={[
                        "Assisted in building client websites using React and Node.js.",
                        "Performed code reviews and testing to ensure high-quality deliverables.",
                        "Gained hands-on experience in version control with Git and collaborative workflows."
                        ]}
                    />

                    <ExperienceCard
                    title="Data Scientist"
                    iconUrl="/data-scientist-icon.svg"
                    category="AI / Analytics Team"
                    yearRange="2023 - Present"
                    description={[
                        "Built and evaluated machine learning models for prediction and classification tasks using Python and scikit-learn.",
                        "Performed data cleaning, feature engineering, and exploratory data analysis on structured datasets.",
                        "Created visualizations and reports to communicate model insights and performance metrics."
                    ]}
                    />
                </div>

                {/* Education Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-center">EDUCATION</h2>
                    <div className="space-y-2 mt-3 mb-8">
                        <p className="font-heading font-medium text-sm tracking-[6px] text-center">BS COMPUTER SCIENCE</p>
                        <p className="font-heading italic font-regular text-xs tracking-[2px] text-center">
                        WEST VISAYAS STATE UNIVERSITY (2028)
                        </p>
                    </div>

                    <h4 className="text-center">RELEVANT COURSES</h4>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Web Development</li>
                    <li>Human-Computer Interaction</li>
                    <li>Software Engineering</li>
                    <li>Systems Analysis & Design</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-12">
                    <h2 className="text-2xl font-bold text-center">SKILLS</h2>

                    <div className="flex flex-col space-y-2 mt-6">
                        <h4 className="text-center font-semibold">FRONTEND</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>React</li>
                        <li>React Native</li>
                        <li>JavaScript/TypeScript</li>
                        <li>HTML5/CSS3</li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h4 className="text-center font-semibold">BACKEND</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flask</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>SQLAlchemy</li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h4 className="text-center font-semibold">TOOLS & PLATFORMS</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Git/GitHub</li>
                        <li>VSCode</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                        <li>Postman</li>
                        <li>Figma</li>
                        <li>Canva</li>
                        </ul>
                    </div>
                </div>

                {/* Download CV */}
                <div className="flex justify-center items-center">
                    <a href="resume_web_development.pdf" download
                    className="relative text-[var(--text-secondary)] font-medium
                    after:content-[''] after:absolute after:bottom-0 after:h-[1px] 
                    after:bg-[var(--text-primary)] after:left-1/2 after:-translate-x-1/2 
                    after:w-0 hover:after:w-full after:transition-all after:duration-300"
                    >Download CV →</a>
                </div>
            </div>
        </div>
    );
};

export default Resume;