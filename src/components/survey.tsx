import React from 'react';

interface Props {
    zBtnVisible: boolean;
    writeSurveyData : (resultId:number, tiger:number, retire:number, it:boolean, impression:string, why:string) => void;
}

const Survey:React.FC<Props> = (zBtnVisible, writeSurveyData) => {
    return (
        <div>
            
        </div>
    );
};

export default Survey;