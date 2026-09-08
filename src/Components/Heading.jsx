export const Heading =({title, children, img,variant="default", theme, headingStyle="default" })=>{
    const backgroundStyle = {
        backgroundImage: `url(${img})`
  };

    return(
        <>
        <div className="heading-hero" style={backgroundStyle}>
            <div className={`heading-title-${variant}`}>
                {title}
            </div>
            <div className={`heading-content-${headingStyle} ${theme}`}>
                {children}
            </div>
        </div>
        </>
    )

}
export default Heading