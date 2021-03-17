import Card from './components/Card';
import Data from './data.json'
function App() {
    let items=[];
   items = Data.map((items)=><Card title={items.title} desc={items.desc}/>);
    return <div>
            {items}
        </div>;
     
}
export default App;