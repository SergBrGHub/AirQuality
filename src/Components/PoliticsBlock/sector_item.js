import React, {useState} from 'react';

const SectorItem = ({sector, number}) => {
    
	const [isToolTipShowing, setToolTipShowing] = useState(false); 
	const [isDirectionSwitched, setDirectionSwitched] = useState(false); // direction tooltip left or right
    
	const toggleToolTip = (newValue) => {
		setDirectionSwitched(number%3 === 0); // last element right side, number = index array+1
		setToolTipShowing(newValue);
	}

	const isMobile = window.matchMedia(`(max-width: 414px)`).matches;

	const [isMobileTooltipShowing, setMobileTooltipShowing] = useState(false);

    const toggleMobileTooltip = (newValue) => {
        setMobileTooltipShowing(newValue);
         console.log('click ok');
	}
	
	return (
        <div className="politics-list-item"
		    onMouseEnter={() => toggleToolTip(true)} // mouse over element
			onMouseLeave={() => toggleToolTip(false)}

			// onMouseEnter={() => toggleMobileTooltip(true)} //for Mobile

			    style={{
					 background: `url(${sector.img_url}) center no-repeat`,
                     backgroundSize: 'cover'
		            }}>

		<p className="politics-list-item-name">{sector.name}</p>

			{
				!isMobile && isToolTipShowing && <p className={`politics-list-item-tooltip ${ isDirectionSwitched ? "politics-list-item-tooltip-switched" : "" }`}>
					{sector.tooltip}
				</p>
			}

			{
				isMobile && isMobileTooltipShowing &&
				<div className={`politics-mobile-tooltip ${isMobile ? "politics-mobile-tooltip-show" : ""}`}>
					
					<div className="politics-mobile-tooltip-navbar">
                      <div className="politics-mobile-tooltip-navbar-close " onClick={() => toggleMobileTooltip(false)}>
                        <div className="politics-mobile-tooltip-navbar-close1"></div>
                        <div className="politics-mobile-tooltip-navbar-close2"></div>
                        <div className="politics-mobile-tooltip-navbar-close3"></div>
                      </div>
                      {/* <div className="burger">
                        <div className="burger-bar"></div>
                        <div className="burger-bar"></div>
                        <div className="burger-bar"></div>
                      </div> */}
                    </div>

					{sector.tooltip}
				</div>
			}
		</div>
		
	);
};

export default SectorItem;