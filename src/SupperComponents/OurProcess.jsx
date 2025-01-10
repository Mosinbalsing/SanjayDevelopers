import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRegHandshake, FaClipboardList, FaFileAlt, FaUserTie, FaPen, FaBuilding, FaHammer } from 'react-icons/fa';

const OurProcess = () => {
  const [lineColor, setLineColor] = useState('#6f7bff'); // Default color

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / docHeight; // Scroll percentage (0 to 1)

    // Interpolate between two colors based on scroll percentage
    const startColor = { r: 111, g: 123, b: 255 }; // #6f7bff (start color)
    const endColor = { r: 255, g: 127, b: 80 };   // #ff7f50 (end color)

    // Interpolate RGB values
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage);

    // Set the line color based on the scroll position
    setLineColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <h2>Our Process</h2>
      <VerticalTimeline
        className="custom-timeline"
        lineColor={lineColor}  // Dynamically changing line color
        style={{ transition: 'line-color 0.5s ease' }} // Smooth transition for color change
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 1 - Decision & Evaluation"
          icon={<FaRegHandshake />}
          iconStyle={{ background: '#6f7bff', color: '#fff' }}
        >
          <h3>Decision & Evaluation</h3>
          <p>
            Once the society residents decide to redevelop the building or complex, a Society General Body Meeting is called to obtain consent. A docket is created, and the committee approaches developers to evaluate the proposal.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 2 - Feasibility Report"
          icon={<FaClipboardList />}
          iconStyle={{ background: '#ff7f50', color: '#fff' }}
        >
          <h3>Feasibility Report</h3>
          <p>
            The developer prepares a feasibility report to evaluate the dynamics of the property and the permissions needed. The developer checks the marketability and ownership status of the property.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 3 - Offer, Terms & Conditions"
          icon={<FaFileAlt />}
          iconStyle={{ background: '#4caf50', color: '#fff' }}
        >
          <h3>Offer, Terms & Conditions</h3>
          <p>
            After discussions with the committee, the developer prepares a final written offer. A Memorandum of Understanding is signed, and the deal is finalized.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 4 - Design"
          icon={<FaPen />}
          iconStyle={{ background: '#ff9800', color: '#fff' }}
        >
          <h3>Design</h3>
          <p>
            The developer begins designing the redevelopment based on the available space and residents' requirements. Society members submit necessary documents during this process.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 5 - Design Presentation and Selection"
          icon={<FaUserTie />}
          iconStyle={{ background: '#3f51b5', color: '#fff' }}
        >
          <h3>Design Presentation and Selection</h3>
          <p>
            The developer and architect present layouts and plans to the committee, considering the members' suggestions. Final layouts are agreed upon and a draft of the redevelopment agreement is prepared.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 6 - Agreement"
          icon={<FaBuilding />}
          iconStyle={{ background: '#9c27b0', color: '#fff' }}
        >
          <h3>Agreement</h3>
          <p>
            Once the agreement is signed, the architect procures sanctions from the municipal corporation, while the developer assists with sourcing rental accommodation for society members during construction.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 7 - Work Begins"
          icon={<FaHammer />}
          iconStyle={{ background: '#e91e63', color: '#fff' }}
        >
          <h3>Work Begins</h3>
          <p>
            The developer begins demolition and construction. Society members vacate the property for the process, and a "Bhoomi Pujan" is organized on an auspicious day to mark the start of the work.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default OurProcess;
