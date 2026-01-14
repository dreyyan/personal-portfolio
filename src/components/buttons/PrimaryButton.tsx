interface PrimaryButtonProps {
    label: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
    return (
        <button className="
        bg-[var(--color-accent)]
        text-[var(--text-primary)]
        text-sm
        font-heading
        tracking-widest
        px-4 py-2
        rounded-md
        cursor-pointer
        transition-colors
        hover:bg-[var(--accent)]/80
        focus:outline-none
        ">
            {label}
        </button>
    );
};

export default PrimaryButton;