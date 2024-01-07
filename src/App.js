import Navandhero from "./navandhero";
import App2 from './components/App'
import { Hero, NewArrival,GridHero, Footer } from './navandhero'
const App = () => {
    return (
        <div style={
            {
                margin: 0
            }
        }>
            <Navandhero />
            <App2 />
            <Hero
                hero_title="Everything For Pet"
                hei="60vh"
                paragraph="Healthy Pets! We hand pick and research the foods we carry to take the worry out of the process of buying the right food for your pet. We sale up to 30% everything for pet."
                btton="VIEW NOW"
                hero_image="https://img.thesitebase.net/files/10394844/2023/02/04/0x2048@167552464549c2807118.jpeg"
            ></Hero>
            <NewArrival
                newData={arrival}
            />
            <GridHero/>
            <Footer/>
        </div>
    )
}
export default App;


const arrival =[{ 
    image: "https://img.thesitebase.net/10394/10394844/products/ver_1/0x360@16756816832b5a8e409e.jpeg", 
    title: "Bengal Cat Pocket", 
    price: "$26.99", 
    original_price: "$35.90"
 },
 { 
    image: "https://img.thesitebase.net/10394/10394844/products/ver_1/0x360@16756946849b3ed07e67.jpg", 
    title: "Earrings Black Cats", 
    price: "$16.99", 
    original_price: "$25.08"
 }
]