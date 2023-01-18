import './frame.scss';
import addSign from '../../../../../../assets/images/add-sign.svg';
import { Link } from 'react-router-dom';

function Frame({ inverseOrientation }){
	
	return(
		<div className="frame-container">
			<div className="d-flex flex-row">
				{inverseOrientation === "true" && (
					<div className="frame-box" style={{height: "796.35px", width: "611.08px", marginRight: "27.98px"}}>
						<Link className="d-flex align-items-center justify-content-center" to="/projects/create" style={{height: "100%", width: "100%"}}>
								<img alt="Add" src={addSign}/>
						</Link>
					</div>
				)}
				<div className="d-flex flex-column" style={{marginBottom: "28px"}}>
					<div className="frame-box" style={{height: "356.65px", width: "752.7px", marginBottom: "27.98px"}}>
						<Link className="d-flex align-items-center justify-content-center" to="/projects/create" style={{height: "100%", width: "100%"}}>
								<img alt="Add" src={addSign}/>
						</Link>
					</div>
					<div className="d-flex flex-row">
						<div className="frame-box" style={{height: "411.72px", width: "310.35px", marginRight: "27.98px"}}>
							<Link className="d-flex align-items-center justify-content-center" to="/projects/create" style={{height: "100%", width: "100%"}}>
								<img alt="Add" src={addSign}/>
							</Link>
						</div>
						<div className="frame-box" style={{height: "411.72px", width: "406.51px"}}>
							<Link className="d-flex align-items-center justify-content-center" to="/projects/create" style={{height: "100%", width: "100%"}}>
								<img alt="Add" src={addSign}/>
							</Link>
						</div>
					</div>
				</div>
				{inverseOrientation === "false" && (
						<div className="frame-box" style={{height: "796.35px", width: "611.08px", marginLeft: "27.98px"}}>
							<Link className="d-flex align-items-center justify-content-center" to="/projects/create" style={{height: "100%", width: "100%"}}>
								<img alt="Add" src={addSign}/>
							</Link>
						</div>
				)}
			</div>
		</div>
	)
}

export default Frame;
