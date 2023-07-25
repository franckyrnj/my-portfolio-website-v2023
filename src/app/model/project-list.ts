import { Projects } from "../types/projects";

export const projectList: Projects = [
    {
      title: 'Basket Maniacs App',
      subtitle: 'Angular, RxJs, Material',
      headerClass: 'angular',
      avatarSrc: './assets/img/nba-mob.png',
      desc: 'My final project of the SDA JavaScript Boot Camp. A SPA dedicated to NBA fans, showing latest news, scores, info about teams, players and search forms for further filtering of info. Uses Material, services, RxJs operators to elaborate data received from remote APIs. I\'m continuously improving it.',
      designUrl: 'https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1',
      gitUrl: 'https://gitlab.com/franckyiside/nba-app',
      liveUrl: 'https://francky.works/basket-maniacs',
    },
    {
      title: 'Meteo Station App',
      subtitle: 'Angular, Material',
      headerClass: 'angular',
      avatarSrc: './assets/img/weather.png',
      desc: 'An SPA that show the weather info for the current local position. Asks for permission to get client geo location, then gets info from the API for that location using longitude and latitude coordinates. Finally displays them on the frontend. Features a search input to get the weather for any other remote location.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/weather-app',
      liveUrl: 'https://weather.franckyiside.eu/',
    },
    {
      title: 'Daddy\'s E-commerce',
      subtitle: 'WordPress, WooCommerce',
      headerClass: 'html',
      avatarSrc: './assets/img/daddys.jpg',
      desc: 'For Daddy\'s I designed and developed a custom WordPress theme. I was also involved in the creation of the graphics, creation and setup of products, categories and other things related to an e-commerce. Lastly I started the development on the top of the design I created with Figma.',
      designUrl: 'https://www.figma.com/file/IAJYrobSn8iRPy3q6J6boO/Daddys-ecommerce?type=design&mode=design&t=hSwubaL4lxEmMaJE-1',
      gitUrl: null,
      liveUrl: 'https://daddys.pl/',
    },
    {
      title: 'Wedding Website',
      subtitle: 'HTML5, Sass, JavaScript',
      headerClass: 'html',
      avatarSrc: './assets/img/wedding.png',
      desc: 'Tiffania and Justin needed a web page to provide guests more info about their wedding. I came to help developing a simple, elegant and fully responsive website featuring a JavaScript countdown to the date and every info guests may need to reach the locations.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/wedding-website',
      liveUrl: 'https://justinandtiffania.com/',
    },
    {
      title: 'DevThemes for VSC',
      subtitle: 'HTML5, Sass, JavaScript',
      headerClass: 'html',
      avatarSrc: './assets/img/vsc.jpg',
      desc: 'Two extensions for Visual Studio Code. The first is a color theme inspired by the official Angular Material documentation, The second includes the Angular plus more themes inspired by popular developers tools. Currently includes Firefox devtools colors. You can install them from VSC marketplace.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/vsc-devthemes',
      liveUrl: 'https://marketplace.visualstudio.com/publishers/FranckyIside',
    },
    {
      title: 'My About Page',
      subtitle: 'HTML5, Sass, JavaScript',
      headerClass: 'html',
      avatarSrc: './assets/img/about.png',
      desc: 'My about page uses a horizontal-scroll layout. The website uses HTML, Sass, vanilla JavaScript and features a grid gallery, carousels and a minimal amount of animations. Give a look at my original design project on Figma and feel free to check the live page as well.',
      designUrl: 'https://www.figma.com/file/aWiKGNLQsOeyiEDxn5uroS/francky-vers_2?type=design&node-id=0%3A1&mode=design&t=OiBOBnevobftradZ-1',
      gitUrl: 'https://gitlab.com/franckyiside/about',
      liveUrl: 'https://about.franckyiside.eu/',
    },
    {
      title: 'Niimbot E-commerce',
      subtitle: 'WordPress, WooCommerce',
      headerClass: 'html',
      avatarSrc: './assets/img/niimbot.png',
      desc: 'Niimbot is an online shop specialised in electronic printers. The clients asked a refresh of the frontend so I came to help with a brand new design of the main pages plus added more interactivity and animations to some of the key elements such as the cta, FAQ, the printer technical info details.',
      designUrl: null,
      gitUrl: null,
      liveUrl: 'https://niimbot.pl/',
    },
    {
      title: 'Sauber Serwis Website',
      subtitle: 'Wordpress',
      headerClass: 'html',
      avatarSrc: './assets/img/sauber.jpg',
      desc: 'The client needed a full package of services: logo design, UI/UX design, development and support with all the boring server/hosting stuff. First I designed the logo and set the color palette. Then with Affinity Designer I designed an UI that would give users a feel of freshness and clean, healthy life style.',
      designUrl: null,
      gitUrl: null,
      liveUrl: 'http://sauberserwis.pl/',
    }
]