import './starBackground.css'

function starBackground() {


    const stars = Array.from({ length: 150 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
    }));

    return (
            <div className="star-field-container">

                {stars.map((star, index) => (
                    <div
                        key={`star-${index}`}
                        className="bg-star"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animationDelay: star.animationDelay,
                            animationDuration: star.animationDuration
                        }}
                    />
                ))}

            </div>
    );
}

export default starBackground;