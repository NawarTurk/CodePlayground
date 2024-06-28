#define BUTTON_PIN 2

byte buttonState = LOW;

unsigned long lastTimeButtonChanged = millis();
unsigned long debounceDelay = 50;


void setup()
{
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT);
}

void loop()
{
  unsigned long timeNow = millis();
  if (timeNow - lastTimeButtonChanged > debounceDelay) {
    byte newButtonState = digitalRead(BUTTON_PIN);
    if (newButtonState != buttonState) {
      lastTimeButtonChanged = timeNow;
      buttonState = newButtonState;
      if (buttonState == HIGH) {
        Serial.println("Button pressed");
      } else {
        Serial.println("Button released");
      }
    }
  }
}