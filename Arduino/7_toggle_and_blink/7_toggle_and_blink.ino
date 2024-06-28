#define BUTTON_PIN 2
#define LED_PIN1 13
#define LED_PIN2 12
#define LED_PIN3 11


unsigned long lastTimeLED3Blinked = millis();
unsigned long debounceDelay = 50;
byte buttonState = LOW;

unsigned long lastTimeButtonChanged = millis();
unsigned long blinkDelay = 300;
byte LED3Status = LOW;

int toggle =1;

void setup()
{
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT);
  pinMode(LED_PIN1, OUTPUT);
  pinMode(LED_PIN2, OUTPUT);
  pinMode(LED_PIN3, OUTPUT);
}

void loop()
{
  unsigned long timeNow = millis();
  
  if (timeNow - lastTimeButtonChanged > debounceDelay) {
    byte newButtonState = digitalRead(BUTTON_PIN);
    if (newButtonState != buttonState) {
      lastTimeButtonChanged = timeNow;
      buttonState = newButtonState;
      toggleLEDs();
    }
  }
  
  if (timeNow - lastTimeLED3Blinked > blinkDelay) {
    blinkLED3();
    lastTimeLED3Blinked =  timeNow;
  }
}

void blinkLED3() {
 if (LED3Status == HIGH) {
      LED3Status = LOW;
    } else {
      LED3Status = HIGH;
    }
  digitalWrite(LED_PIN3, LED3Status); 
}

void toggleLEDs() {
  if (buttonState == HIGH) {
    if (toggle == 1) {
      digitalWrite(LED_PIN2, HIGH);
      digitalWrite(LED_PIN1, LOW);
      toggle = 2;
    } else { 
      digitalWrite(LED_PIN2, LOW);
      digitalWrite(LED_PIN1, HIGH);
      toggle = 1;
    }
  }  
}