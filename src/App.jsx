import './App.scss';
import 'boxicons/css/boxicons.min.css';
import Accordion from './components/accordion/Accordion';

const data = [
    {
        title: " Accordion Item #1",
        content: " This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
    },
    {
        title: " Accordion Item #2",
        content: " This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
    },
    {
        title: " Accordion Item #3",
        content: " This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
    },
    {
        title: " Accordion Item #4",
        content: " This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
    }
]

function App() {
    return (
        <div style={{ width: "600px", paddingTop: "100px" }}>
            <h1 style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "50px"
            }}>
                React Accordion
            </h1>
            {
                data.map((item, index) => <div
                    key={index}
                    style={{ marginBottom: "5px" }}
                >
                    <Accordion
                        title={item.title}
                        content={item.content}
                    />
                </div>)
            }
        </div>
    );
}

export default App;
