import { Component } from "react";
import { sections } from "../content/resumeData.js"; 
import profile from '../profile-sanaa.jpeg'; 

class Resume extends Component {
    render() {
        return(
            <div className="container w-75">
                <div className="row mb-md-5 mt-5">
                    <div className="col-md-3 pe-5 pt-5">
                        <img src={profile} alt="Sanaa El Fakiri" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="col-md-9 mb-5 pt-5">
                        <h1>Sanaa El Fakiri</h1>
                        <h5 className="fw-light text-black-50">Full-Stack Developer from Casablanca, Morocco</h5>
                        <div className="row mt-4">
                            <div className="col-md-1">
                                <a href="https://www.linkedin.com/in/sanaa-el-fakiri/" className="link-secondary text-decoration-none">LinkedIn</a>
                            </div>
                            <div className="col-md-1 ms-md-3">
                                <a href="https://twitter.com/SanaaElfakiri" className="link-secondary text-decoration-none">Twitter</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Section sections={sections}/>
                <div className="row">
                    <p className="text-muted font-monospace text-center small">elfakiri.sanaa@gmail.com</p>
                </div>
            </div>
        );
    }
}

const Section = ({sections}) => {
    return(
        sections.map((section) => {
        return (
            <div className="row mb-5">
                <div className="col-md-3 text-muted text-uppercase font-monospace">
                    <h6>{section.name}</h6>
                </div>
                <div className="col-md-9">
                    <SectionElements elements={section.elements}/>
                </div>
            </div>
        );
        })
    );
}

const SectionElements = ({elements}) => {
    return(
        
        elements.map((element) => {
            let link = <></> ;
            if (element.url) {
                link = <a href={element.url} className="link-secondary text-decoration-none">More</a> ;
            }
            return(
                <div className="row mb-2">
                    <h6 className="lead"><a href={element.url} className="link-secondary text-decoration-none">{element.name}</a></h6>
                    <h6>{element.title}</h6>
                    <p className="text-black-50">{element.description}</p>
                </div>
            );
        })
    );
}

export default Resume;