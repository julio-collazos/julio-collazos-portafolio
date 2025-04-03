import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="09-2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">GIS Analyst, Proforest</h3>
            <h4 className="vertical-timeline-element-subtitle">Cali, Colombia</h4>
            <p>
              Using geospatial data and tech to drive sustainability, monitor deforestation, assess risks, and enhance traceability in agriculture and forestry supply chains.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01-2023 - 09-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Forest Engineer, Oviedo SAS</h3>
            <h4 className="vertical-timeline-element-subtitle">Villavicencio, Colombia</h4>
            <p>
              Empowering rural and Indigenous communities with precise spatial analysis and remote sensing to certify REDD+ projects, classify forests, monitor deforestation, and assess hazards (floods, landslides, fires). <a href="https://www.ecoregistry.io/projects/152" target="_blank" rel="noopener noreferrer" style={{ color: 'steelblue' }}>Guainía REDD+ Project</a>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08-2022 - 04-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Forest Engineer, M&L Consultores Ambientales</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, Colombia</h4>
            <p>
              Leveraging fieldwork and geospatial expertise to assess floristic composition, validate land cover, create base cartography, and develop environmental management plans for project licensing, supporting permits for linear infrastructure and hydrocarbon operation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09-2022 - 01-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Forest Engineer, Iomores Ingeniería SAS</h3>
            <h4 className="vertical-timeline-element-subtitle">Antioquia, Colombia</h4>
            <p>
              Leading geospatial analysis for a Regional-funded Payments for Environmental Services project, processing 200+ drone orthomosaics to classify land cover, identify areas for conservation and restoration in the department of Antioquia-Colombia.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;