import "./Hero.scss";

const Hero = () => {
    return (
        <article className="mission">
            <h4 className="mission__header">Our mission:</h4>
            <p className="mission__body">
                Provide photographers a space to share photos of the
                neighborhoods they cherish,{" "}
                <em className="mission__body--emphasis">
                    expressed in their unique style.
                </em>
            </p>
        </article>
    );
};

export default Hero;
