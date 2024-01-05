import Navandhero from "./navandhero";
import App2 from './components/App'
import {Hero} from './navandhero'
const App=()=>{
    return(
       <div style={
        {
            margin:0
        }
       }>
        <Navandhero/>
        <App2/>
        <Hero
        hero_title="Everything For Pet"
        hei="100vh"
        paragraph="Healthy Pets! We hand pick and research the foods we carry to take the worry out of the process of buying the right food for your pet. We sale up to 30% everything for pet."
        btton="VIEW NOW"
        hero_image="https://img.thesitebase.net/files/10394844/2023/02/04/0x2048@167552464549c2807118.jpeg"
        ></Hero>
       </div> 
    )
}
export default App;