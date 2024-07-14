#define BUTTON_PIN 2

volatile bool buttonPressed = false;
int counter = 0;
volatile unsigned long lastTimeButtonPressed;
unsigned long debounceDelay= 50;

void buttonPressedInterrupt() {
  // return void, no parameters
  unsigned long timeNow = millis();
  if (timeNow - lastTimeButtonPressed > debounceDelay) {
    lastTimeButtonPressed = timeNow;
    buttonPressed = true;
  }
}

void setup()
{
  Serial.begin(115200);
  lastTimeButtonPressed = millis();
  pinMode(BUTTON_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN),
                  buttonPressedInterrupt,
                  RISING);
}

void loop(){
  if (buttonPressed) {
    buttonPressed = false;
    counter++;
    Serial.print("Counter is: ");
    Serial.println(counter);
  } 
}