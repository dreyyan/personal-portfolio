import { useState } from "react";

const Home = () => {
    const [aboutLoaded, setAboutLoaded] = useState(false);
    const [whyLoaded, setWhyLoaded] = useState(false);
    const [specLoaded, setSpecLoaded] = useState(false);
    const [valuesLoaded, setValuesLoaded] = useState(false);

    return (
        <div className="flex-col w-auto h-auto py-16 px-10">

            {/* [IMAGE] About Me */}
            <div className="relative w-[280px] h-[374px] mb-12">
            {!aboutLoaded && (
                <div className="absolute inset-0 animate-pulse bg-[var(--accent)] rounded" />
            )}

            <img
                src="/about-me-image.jpg"
                alt="About Me - Picture"
                onLoad={() => setAboutLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                aboutLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
            </div>

            {/* About Me - Role & Education */}
            <div className="mb-20">
                <p className="font-heading font-black text-5xl text-center mb-12">ABOUT ME</p>
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

                <div className="space-y-2">
                    <p className="font-heading font-medium text-sm tracking-[6px] text-center">BS COMPUTER SCIENCE</p>
                    <p className="font-heading italic font-regular text-xs tracking-[2px] text-center">WEST VISAYAS STATE UNIVERSITY (2028)</p>
                </div>
            </div>

            {/* About Me - Description */}
            <div>
                <div className="mb-19 space-y-6">

                <div className="relative w-full h-56 rounded overflow-hidden">
                    {!whyLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-[var(--color-accent)]" />
                    )}
                    <img
                    src="/why-i-code.jpg"
                    alt="Why I Code"
                    onLoad={() => setWhyLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        whyLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    />
                </div>

                <header className="font-heading font-bold text-3xl">WHY I CODE</header>
                <p>
                    Hi, I’m Adrian — a full-stack web developer and technopreneur from the Philippines. I’ve always been fascinated by how technology can turn ideas into real solutions, and that curiosity has driven me to build software that makes life easier, more efficient, and more fun.
                </p>
                </div>

                <div className="mb-19 space-y-4">

                <div className="relative w-full h-56 rounded overflow-hidden">
                    {!specLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-[var(--color-accent)]" />
                    )}
                    <img
                    src="/specialization.jpg"
                    alt="Specialization"
                    onLoad={() => setSpecLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        specLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    />
                </div>

                <header className="font-heading font-bold text-3xl">SPECIALIZATION</header>
                <p>
                    I specialize in React, TypeScript, and Python, creating web apps that are scalable, responsive, and user-friendly. From concept to deployment, I enjoy solving problems with clean, maintainable code and seeing my projects come to life.
                </p>
                </div>

                <div className="mb-19 space-y-4">

                <div className="relative w-full h-56 rounded overflow-hidden">
                    {!valuesLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-[var(--color-accent)]" />
                    )}
                    <img
                    src="/values.jpg"
                    alt="Values and Mindset"
                    onLoad={() => setValuesLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        valuesLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    />
                </div>

                <header className="font-heading font-bold text-3xl">VALUES & MINDSET</header>
                <p>
                    Beyond coding, I value continuous learning, creativity, and impact. I approach every project with a growth mindset, embracing challenges as opportunities to improve and deliver meaningful results. I love collaborating with others, sharing knowledge, and finding innovative ways to bridge technology and everyday needs. When I’m not coding, you can find me exploring new tech trends, brainstorming new project ideas, or learning something new to sharpen my skills.
                </p>
                </div>
            </div>
        </div>
	);
};
export default Home;