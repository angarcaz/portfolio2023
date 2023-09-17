import LifeOnMarsBanner from "./img/lifeonmars-img/LOM-banner02.jpg"
import ArtBrowserBanner from "./img/artbrowser-img/AB-banner02.jpg"
import SunnySideBanner from "./img/sunnyside.jpg"
import NetflixBanner from "./img/netflix.jpg"
import PokedexBanner from "./img/pokedex.jpg"
import CalculatorBanner from "./img/calculator.jpg"
import MiscIllustration from "./img/IllustrationBanner4.gif"
import Pels60 from "./img/animacion.gif"
import Pels602 from "./img/Pels60_pels60banner.png"

import Trainspotting from "./img/trainspotting.jpg"
import GrapaTinta from "./img/grapatinta.gif"


export const Projects = {
    lastprojects: [
        {
            title: "Life on Mars",
            subtitle: "Mars Homes Web Application",
            image: LifeOnMarsBanner,
            description: "Have you ever imagined living on Mars? Life on Mars is a web application that allows users to explore and customize Martian homes. Users can register, add their favorite houses to their wishlists, and personalize them by choosing the number of rooms, whether they want a garden, and more. This project was built using React and Redux, incorporating user registration functionality and custom JSON data handling.",
            technologies: [
                "html",
                "sass",
                "react"
            ],
            demo: "#",
            repo: "https://github.com/angarcaz/life-on-mars",
            main_link: "#"
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis urna efficitur luctus rhoncus. Sed vitae sem vel leo aliquet pulvinar. Curabitur congue lacus in sodales euismod.",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis urna efficitur luctus rhoncus. Sed vitae sem vel leo aliquet pulvinar. Curabitur congue lacus in sodales euismod.",
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
            image: GrapaTinta,
            description: "We designed the corporate identity for Grapa&Tinta's November 2022 festival encapsulating the festival's spirit. From whimsical designs to intricate details, our branding captures the essence of this creative gathering, inviting artists and enthusiasts to explore the magic of self-expression through art and self-publishing.",
            year: 2022,
            tag: "branding"
        },
        {
            title: "Trainspotting",
            subtitle: "A Day of Capturing Circular Life",
            image: Trainspotting,
            description: "'Trainspotting' is a self-published photography book that materialized in a single day within the heart of Hamburg. The challenge? To traverse the entirety of Line 5, a circular route, disembarking at every stop to capture a moment in each location. This project beautifully encapsulates the art of capturing life's diverse snapshots in a continuous, circular journey.",
            year: 2016,
            tag: "editorial"
        },
        {
            title: "Pels 60's",
            image: Pels602,
            subtitle: "Retro Elegance",
            description: "Our project revitalized a retro-style hair and beauty company. We created a unique visual identity, logo, website and sationery, immersing clients in the timeless elegance of the 1960s.",
            year: 2021,
            tag: "branding"
        },
        {
            title: "Misc - Illustration",
            image: MiscIllustration,
            description: "I don't know, whatever",
            year: 2022,
            tag: "branding"
        }
    ]
}