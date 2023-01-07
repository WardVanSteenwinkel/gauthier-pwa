import 'normalize.css'

export function AboutPage(){
    return(
        <div className="about">
            <div style={{float: "left", marginLeft:"150px"}}>
                <img src={require(`../img/about_us.jpg`)} className="about_img"/>
            </div>
            <div className="about_text">
                <p style={{fontSize:"50px"}} className="about_text_h2">Over ons</p>
                <p style={{fontSize:"25px"}} className="about_text_h3">
                    Chocolaterie Gauthier werd in 1964 opgericht door Edouard Gauthier.
                    Al 58 jaar maakt Edouard naar goede Belgische gewoonte, volgens eigen receptuur
                    en met respect voor de ambachtelijke traditie kwaliteitsproducten.
                </p>
            </div>
        </div>
    )
}

