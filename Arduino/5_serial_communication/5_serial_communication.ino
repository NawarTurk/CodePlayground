#define LED_PIN 13

int blinkDelay = 500;
int LEDstate = LOW;

void setup()
{
  Serial.begin(115200);
  Serial.setTimeout(10);
  pinMode(LED_PIN, OUTPUT);
}

void loop()
{
  if (Serial.available() > 0) {
    int data;
    data = Serial.parseInt();
    if (blinkDelay >= 100 && blinkDelay <= 1000) {  
      blinkDelay = data;
    }
  }
  
  if (LEDstate == LOW) {
    LEDstate = HIGH;
  } else {
    LEDstate = LOW;
  }

  digitalWrite(LED_PIN, LEDstate);
  delay(blinkDelay); 
}