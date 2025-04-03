import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ArcGIS Pro",
    "Microsoft Power BI",
    "GEE",
    "QGIS",
    "Python",
    "SQL",
    "PostgreSQL",
];

const labelsSecond = [
    "SQL",
    "Git",
    "Python",
    "Docker",
    "AWS",
    "Linux",
    "PostgreSQL",
];

const labelsThird = [
    "Python",
    "SQL",
    "Apache Airflow",
    "Apache Spark",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMapLocationDot} size="3x"/>
                    <h3>GIS Analysis</h3>
                    <p>I excel in geospatial analysis by combining advanced remote sensing, precise data processing, and fieldwork expertise to deliver actionable insights for sustainability, conservation, and environmental management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Large-scale data processing</h3>
                    <p>I specialize in large-scale GIS data processing, adeptly managing vast datasets—such as orthomosaics and global satellite imagery—to deliver precise land cover classifications, multi-scale risk assessments, and spatial insights for effective, impactful decisions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ETL & Automatation</h3>
                    <p>With a knack for ETL and automation, I streamline complex data workflows—extracting, transforming, and loading datasets seamlessly—while building automated solutions to enhance efficiency and accuracy in geospatial and environmental projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;