#define LED_PIN 13

void setup()
{
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}

void loop()
{
  Serial.println("LED om");
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  Serial.println("LED off");
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}