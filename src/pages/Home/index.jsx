import images from "../../assets/images";
import sounds from "../../assets/sounds";
import { MainTitle } from "../../assets/styles/styleds/home";
import RenderYouMayLike from "../../components/RenderYouMayLike";

function Home() {
    const youMayLike = [
        {
            title: "A droga do século",
            author: "Andrey melo Mafra",
            image: images.coffee,
            track: sounds.bandolero
        },
        {
            title: "Sacolas recicláveis dominam o mundo",
            author: "Max Verstappen",
            image: images.bag,
            track: sounds.max

        },
        {
            title: "Como escolher o vinho certo?",
            author: "Sir. Lewis Hamilton",
            image: images.wine,
            track: sounds.hamilton
        },
        {
            title: "A droga do século",
            author: "Andrey melo Mafra",
            image: images.coffee,
            track: sounds.bandolero
        },
        {
            title: "Sacolas recicláveis dominam o mundo",
            author: "Max Verstappen",
            image: images.bag,
            track: sounds.max

        },
        {
            title: "Como escolher o vinho certo?",
            author: "Sir. Lewis Hamilton",
            image: images.wine,
            track: sounds.hamilton
        }
    ]
    return (
        <div>
            <MainTitle>Você pode gostar</MainTitle>
            <RenderYouMayLike
                youMayLike={youMayLike}
            />
        </div>
    );
}

export default Home;