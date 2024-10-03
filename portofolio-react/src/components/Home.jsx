import "./css/Home.css";

const Home = () => {
    return (
        <>
            <div className="home">
                <img className="me"  alt="A photo of me :D"/>
                <div className="label-container"> 
                    <label className="name">
                        Hi there! It&apos;s 
                        <select>
                            <option>Josep</option>
                            <option>Panda</option>
                            <option>MPYT</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="desc-container">
                <div className="description">
                    <h1>In this page you will see everything about me.</h1>
                    <a>&bull; asdsd</a>
                </div>
            </div>
            <div className="scroll-down">
                <img className="arrow-down" alt="Scroll down!"/>
            </div>
        </>
    );
}

export default Home;