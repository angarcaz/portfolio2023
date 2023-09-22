import LifeOnMarsBanner from "./img/lifeonmars-img/LOM-banner02.jpg"
import ArtBrowserBanner from "./img/artbrowser-img/AB-banner02.jpg"
import SunnySideBanner from "./img/sunnyside.jpg"
import NetflixBanner from "./img/netflix.jpg"
import PokedexBanner from "./img/pokedex.jpg"
import CalculatorBanner from "./img/calculator.jpg"
import MiscIllustration from "./img/IllustrationBanner4.gif"
import Pels602 from "./img/Pels60_pels60banner.png"

import Trainspotting from "./img/trainspotting.jpg"
import GrapaTinta from "./img/grapatinta.gif"
import Activitats from "./img/grapatinta-img/activitats-gif.gif"
import PdsImage from "./img/grapatinta-img/pds-gif.gif"
import Octavetes from "./img/grapatinta-img/flyers.jpg"

//Illustrations:
import WeAre from "./img/illustration-img/01. We are_1.jpg"
import Grua from "./img/illustration-img/02. Grua_1.jpg"
import Hamburg from "./img/illustration-img/03. Hamburg_1.jpg"
import Bataan from "./img/illustration-img/04. Joe Bataan_1.jpg"
import EnglishTapas from "./img/illustration-img/06. English Tapas_1.jpg"
import Fractura from "./img/illustration-img/08. Fractura_1.jpg"
import InTheBlues from "./img/illustration-img/intheblues.jpg"
import Pedraforca from "./img/illustration-img/pedraforca.jpg"
import Hormiga from "./img/illustration-img/hormiga.jpg"
import Libelula from "./img/illustration-img/libelula.jpg"
import Spider from "./img/illustration-img/spider.jpg"
import Mosca from "./img/illustration-img/mosca.jpg"

//Trainspotting: 
import t1 from "./img/trainspotting/t1.jpg"
import t2 from "./img/trainspotting/t2.jpg"
import t3 from "./img/trainspotting/t3.jpg"
import t4 from "./img/trainspotting/t4.jpg"
import t5 from "./img/trainspotting/t5.jpg"
import t6 from "./img/trainspotting/t6.jpg"
import t7 from "./img/trainspotting/t7.jpg"

//Pels60
import GifWeb from "./img/pels60/pels60web.gif"
import Visit from "./img/pels60/pels60targvist.jpg"
import Logo from "./img/pels60/PelsLogo.png"
import ColorsFonts from "./img/pels60/pels60CT.png"


export const Projects = {
    lastprojects: [
        {
            title: "Life on Mars",
            subtitle: "Mars Homes Web Application",
            image: LifeOnMarsBanner,
            description: "Have you ever imagined living on Mars? Life on Mars is a web application that allows users to explore and customize Martian homes. Users can register, add their favorite houses to their wishlists, and personalize them. This project was built using React and Redux, incorporating user registration functionality and custom JSON data handling.",
            technologies: [
                "html",
                "sass",
                "react"
            ],
            demo: "https://life-on-mars-ten.vercel.app/",
            repo: "https://github.com/angarcaz/life-on-mars",
            main_link: "https://life-on-mars-ten.vercel.app/"
        },
        {
            title: "Art Browser",
            subtitle: "Exploring Artistic Masterpieces",
            image: ArtBrowserBanner,
            description: "Art Browser is a website that retrieves data from The Cleveland Museum of Art Open Access. Users can search for artists and access information about their artworks. This project was developed using React and Redux, providing a seamless and interactive experience for art enthusiasts.",
            technologies: [
                "html",
                "css",
                "react"
            ],
            demo: "https://art-browser-eta.vercel.app/",
            repo: "https://github.com/angarcaz/gallery-react",
            main_link: "https://art-browser-eta.vercel.app/"
        },
        {
            title: "Sunnyside landing",
            subtitle: "Web Design Challenge",
            image: SunnySideBanner,
            description: "Sunnyside Landing is a web development challenge that primarily focuses on HTML and CSS, with a touch of JavaScript used for the navigation menu toggle. The design was provided by Frontend Mentor and served as a platform to refine and showcase coding skills, demonstrating proficiency in front-end development.",
            technologies: [
                "html",
                "css",
                "javascript",
            ],
            demo: "https://angarcaz.github.io/sunnyside/",
            repo: "https://github.com/angarcaz/sunnyside",
            main_link: "https://angarcaz.github.io/sunnyside/"
        },
        {
            title: "Netflix App",
            image: NetflixBanner,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis urna efficitur luctus rhoncus. Sed vitae sem vel leo aliquet pulvinar. Curabitur congue lacus in sodales euismod.",
            technologies: [
                "html",
                "css",
                "angular",
                "typescript"
            ],
            demo: "https://netflix-app-psi-six.vercel.app/",
            repo: "https://github.com/angarcaz/netflix-app",
            main_link: "https://netflix-app-psi-six.vercel.app/"
        },
        {
            title: "Pokedex",
            image: PokedexBanner,
            description: "I am excited to introduce my very first JavaScript project, where I have embarked on a journey to create a Pokédex using the Pokémon API. This project is not only a fantastic learning opportunity but also a chance for me to dive into the fascinating world of Pokémon and web development. In this project, I aim to showcase my growing skills in JavaScript and create a user-friendly Pokédex for all Pokémon enthusiasts.",
            technologies: [
                "html",
                "css",
                "javascript"
            ],
            demo: "https://angarcaz.github.io/pokedex/",
            repo: "https://github.com/angarcaz/gallery-react",
            main_link: "https://angarcaz.github.io/pokedex/"
        },
        {
            title: "Calculator",
            image: CalculatorBanner,
            description: "This simple calculator project may not be the most complex application, but it's practical and serves its purpose well and it's been a great way for me to practice my JavaScript skills.",
            technologies: [
                "html",
                "css",
                "javascript"
            ],
            demo: "https://angarcaz.github.io/calculator-app/",
            repo: "https://github.com/angarcaz/calculator-app/",
            main_link: "https://angarcaz.github.io/calculator-app/"
        }
    ],
    gdprojects: [
        {
            title: "Grapa&Tinta",
            subtitle: "DIY Festival Identity",
            route: "/grapatinta",
            image: GrapaTinta,
            image2: Activitats,
            image3: PdsImage,
            image4: Octavetes,
            description: "We designed the corporate identity for Grapa&Tinta's November 2022 festival encapsulating the festival's spirit. From whimsical designs to intricate details, our branding captures the essence of this creative gathering, inviting artists and enthusiasts to explore the magic of self-expression through art and self-publishing.",
            year: 2022,
            tag: "branding"
        },
        {
            title: "Trainspotting",
            subtitle: "A Day of Capturing Circular Life",
            route: "/trainspotting",
            image: Trainspotting,
            images: [t1, t2, t3, t4, t5, t6, t7, t1],
            description: "'Trainspotting' is a self-published photography book that materialized in a single day within the heart of Hamburg. The challenge? To traverse the entirety of Line 5, a circular route, disembarking at every stop to capture a moment in each location. This project beautifully encapsulates the art of capturing life's diverse snapshots in a continuous, circular journey.",
            year: 2016,
            tag: "editorial"
        },
        {
            title: "Pels 60's",
            logo: Logo,
            image: Pels602,
            image2: Visit,
            image3: ColorsFonts,
            video: GifWeb,
            subtitle: "Retro Elegance",
            route: "/pels60",
            description: "Our project revitalized a retro-style hair and beauty company. We created a unique visual identity, logo, website and sationery, immersing clients in the timeless elegance of the 1960s.",
            year: 2021,
            tag: "branding"
        },
        {
            title: "Misc - Illustration",
            image: MiscIllustration,
            route: "/illustration-projects",
            description: "Welcome to my Illustrations & Prints section, featuring a variety of artwork from different projects. Explore a collection of illustrations and prints that showcase my creative work.",
            year: 2022,
            tag: "illustration",
            images: [WeAre, Grua, Hamburg, Bataan, EnglishTapas, Fractura, InTheBlues, Pedraforca, Hormiga, Libelula, Spider, Mosca]
        }
    ]
}