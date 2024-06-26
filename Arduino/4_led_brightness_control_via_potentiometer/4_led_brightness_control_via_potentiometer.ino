#define LED_PIN 10
#define POTENTIOMETER_PIN A0

void setup()
{
  pinMode(LED_PIN, OUTPUT);
}

void loop(){
  analogWrite(LED_PIN, analogRead(POTENTIOMETER_PIN)/4);
}