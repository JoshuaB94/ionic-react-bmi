import React, { useRef, useState } from 'react';
import { setupIonicReact, IonApp, IonHeader, IonContent, IonToolbar, IonTitle, 
IonItem, IonLabel, IonGrid, IonRow, IonCol, IonInput, IonAlert
} from '@ionic/react';

import BmiControls from './components/BmiControls';
import BmiResults from './components/BmiResults';
import InputControl from './components/InputControl';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => {
  const [ error, setError ] = useState<string>();
  const [ calcUnits, setCalcUnits ] = useState<'metric' | 'imperial'>('imperial');
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>();

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);


  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight || 
      +enteredWeight <= 0 || +enteredHeight <= 0) {
      setError('Please enter a valid input value.');
      return;
    }

    const weightConversionFactor = calcUnits === 'imperial' ? 2.2 : 1;
    const heightConversionFactor = calcUnits === 'imperial' ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);

    setCalculatedBMI(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };

  const clearError = () => {
    setError('');
  }

  const selectCalcUnitHandler = (selectedValue: 'metric' | 'imperial') => {
    setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
      <IonAlert 
        isOpen={!!error} 
        message={error} 
        buttons={[{ text: 'Okay', handler: () => {
          clearError();
        } }]} 
      />
    
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Your Height ({calcUnits === 'metric' ? 'm' : 'ft'})</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Your Weight ({calcUnits === 'metric' ? 'kg' : 'lbs' })</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <BmiControls onCalculate={calculateBMI} onReset={resetInputs}/>
              
            {calculatedBMI && (
              <BmiResults result={calculatedBMI}/>
            )}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
