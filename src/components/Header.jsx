const Header = () => {
    return (
        <section className="w-full h-[200px] md:h-[300px]">
            <picture className="relative flex h-full w-full justify-center">
                <img className="w-[300px] absolute -top-36 animate-spin md:w-[400px] md:-top-48" src="/portal.svg" alt="portal" />
                <img className="w-80 absolute md:w-96" src="/rym.svg" alt="logo" />
            </picture>

        </section>
    );
};
export default Header;
