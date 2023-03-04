import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";


const InputControl: React.FC<{selectedValue: 'metric' | 'imperial'; onSelectValue: (value: 'metric' | 'imperial') => void}> = props => {
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectValue(event.detail.value);
    }

    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
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