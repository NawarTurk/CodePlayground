#include <LiquidCrystal.h>

#define PHOTOSENSOR_PIN A0
#define LED1_PIN 10
#define LED2_PIN 11

const int lightThreshold = 950;
float brightness;

void setup() {
  Serial.begin(115200);
  pinMode(LED1_PIN, OUTPUT);
  pinMode(LED2_PIN, OUTPUT); 
}

void loop() {
  int lightSensorValue = analogRead(PHOTOSENSOR_PIN);
  if (lightSensorValue > lightThreshold) {
  	digitalWrite(LED2_PIN, HIGH); 
  } else {
    digitalWrite(LED2_PIN, LOW); 
  }
  
  brightness = 255 * (lightSensorValue /974.0);
  analogWrite(LED1_PIN, (int) brightness);
}
