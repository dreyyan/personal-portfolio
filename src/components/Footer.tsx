import FooterSection from "./FooterSection";

const Footer = () => {
    return (
        <footer className="py-6 text-center border-t border-[var(--text-primary)] bg-[var(--secondary-background)]">
            {/* Main Sections */}
            <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 text-[var(--text-primary)]">
                <FooterSection
                iconSrc="address-icon.svg"
                title="Address"
                description="Iloilo City, PH"
                onClick={() => {
                    const address = encodeURIComponent("Iloilo City, Philippines");
                    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
                }}
                />

                <FooterSection
                iconSrc="email-icon.svg"
                title="Email"
                description="adriandominic.tan@wvsu.edu.ph"
                onClick={() => (window.location.href = "mailto:adriandominic.tan@wvsu.edu.ph")}
                />
            </div>

            {/* Copyright */}
            <p className="poppins text-sm font-medium text-[var(--text-primary)] mt-8 opacity-80">
                © 2024–{new Date().getFullYear()} Adrian Tan. All rights reserved.
            </p>

            <p className="text-xs mt-1 opacity-80">• FULL-STACK WEB DEVELOPER •</p>
            <p className="text-xs mt-1 opacity-80">• TECHNOPRENEUR •</p>
        </footer>
    );
};

export default Footer;