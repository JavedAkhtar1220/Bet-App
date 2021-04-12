import react from 'react';
import BorderLinearProgress from '../components/BorderLinearProgress';

const TermsAndConditions = () => {
    return (
        <div className="row mt-5">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <h1 className="signup_title text-center mt-5 mb-5">Terms & Conditions</h1>
                <div className="mt-3 mb-5">
                    <p>You have to agree all terms and condtions</p>
                    <BorderLinearProgress variant="determinate" value={60} />
                </div>
                <div>
                    <ul>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>
                        <li className="bg-info text-white px-5 py-3 rouded mb-2">
                            <p className="mb-0">You will earn bonus only when you play</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions;