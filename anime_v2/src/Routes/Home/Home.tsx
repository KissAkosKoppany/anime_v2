import Banner from "./Components/Banner";
import SliderBar from "./Components/SliderBar";


export default function Home() {

    return (
        <div>
            <Banner />
            <div className="p-12">
                <SliderBar />
            </div>
        </div>
    )
}