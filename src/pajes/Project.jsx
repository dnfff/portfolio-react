import img1 from "../img/projects/01.jpg"
import img2 from "../img/projects/02.jpg"
import img3 from "../img/projects/03.jpg"
import img4 from "../img/projects/04.jpg"
import img5 from "../img/projects/05.jpg"
import img6 from "../img/projects/06.jpg"

const Project = () => {
    return (
        <div id="Projects">
            <Nav />
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src={img1} alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming streaming portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={img2} alt="Project img" className="project__img" />
                        <h3 className="project__title">Video service</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={img3} alt="Project img" className="project__img" />
                        <h3 className="project__title">Video portal</h3>
                    </a>
                </li>

                <li className="project">
                    <img src={img4} alt="Project img" className="project__img" />
                    <h3 className="project__title">Dating app</h3>
                </li>
                <li className="project">
                    <img src={img5} alt="Project img" className="project__img" />
                    <h3 className="project__title">Landing</h3>
                </li>
                <li className="project">
                    <img src={img6} alt="Project img" className="project__img" />
                    <h3 className="project__title">Gaming community</h3>
                </li>

            </ul>
        </div>
    );
}

export default Project