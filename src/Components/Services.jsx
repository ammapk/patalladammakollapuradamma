import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">ಪೂಜಾ ಸೇವೆಗಳು</h1>
                <h6 class="text-center">ಶ್ರೀ ಪಟ್ಟಲದಮ್ಮ ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಸ್ಥಾನದಲ್ಲಿ ಅನೇಕ ಪೂಜೆ ಹಾಗೂ ವಿಶೇಷತೆಗಳ ಮಾಹಿತಿ ಕೆಳಗೆ ಇದೆ</h6>            
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    content={val.content}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;
