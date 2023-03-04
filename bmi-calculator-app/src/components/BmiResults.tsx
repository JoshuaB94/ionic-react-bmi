import React from "react";
import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BmiResults: React.FC<{ result: number | string }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent>
                    <h2>{props.result}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
}

export default BmiResults;


