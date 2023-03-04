import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";


const InputControl: React.FC<{selectedValue: 'metric' | 'imperial'}> = props => {
    return (
        <IonSegment value={props.selectedValue}>
            <IonSegmentButton value="metric">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            
            <IonSegmentButton value="imperial">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;