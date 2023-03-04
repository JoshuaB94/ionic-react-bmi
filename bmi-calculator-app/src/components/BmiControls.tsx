import React from 'react';
import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import { calculator, refresh } from 'ionicons/icons';

const BmiControls: React.FC<{
    onCalculate: () => void; 
    onReset: () => void;}> = props => {
    return (
        <IonRow>
            <IonCol className="ion-text-left">
                <IonButton onClick={props.onCalculate}>
                <IonIcon slot="start" icon={calculator}/>
                Calculate
                </IonButton>
            </IonCol>

            <IonCol className="ion-text-right">
                <IonButton onClick={props.onReset}>
                <IonIcon slot="start" icon={refresh}/>
                Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
}

export default BmiControls;

