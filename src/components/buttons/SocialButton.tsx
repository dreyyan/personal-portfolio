interface SocialButtonProps {
    href?: string;
    children?: React.ReactNode;
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, children }) => {
    return (
        <a
        href={href} target="_blank" rel="noopener noreferrer"
        className=" bg-[var(--secondary-background)] flex justify-center items-center size-10 rounded-full cursor-pointer
        duration-200 ease-in-out transition transform
        hover:bg-gray-500
        hover:scale-110 hover:rotate-4
        ">
            {children}
        </a>
    );
};

export default SocialButton;