#define PHOTOSENSOR_PIN A0
#define LUMINOSITY_SAMPLE_SIZE 100

int luminositySamples[LUMINOSITY_SAMPLE_SIZE] = {0}; // initialize all the value to zero
int indexCounter = 0;

unsigned long lastTimeReadLuminosity = millis();
unsigned long luminositySampleDelay = 50;

void setup() {
  Serial.begin(115200);
}

void loop() {
  unsigned long timeNow = millis();
  if (timeNow - lastTimeReadLuminosity > luminositySampleDelay) {
    lastTimeReadLuminosity += luminositySampleDelay;
    if (indexCounter == LUMINOSITY_SAMPLE_SIZE) {
      printAverageLuminosity();
      indexCounter = 0;  
    }
    luminositySamples[indexCounter] = analogRead(PHOTOSENSOR_PIN);
    indexCounter++;
    if (indexCounter % 10 == 0) Serial.print(">>");
  }
}

void printAverageLuminosity() {
  Serial.println("");
  Serial.print("Average luminosity for ");
  Serial.print(LUMINOSITY_SAMPLE_SIZE);
  Serial.print(" samples taken every ");
  Serial.print(luminositySampleDelay);
  Serial.print(" milliseconds: ");
  Serial.print(computeaverageLuminosity());
  Serial.println("");
}

int computeaverageLuminosity () {
  long sum = 0;
  for (int i =0; i <  LUMINOSITY_SAMPLE_SIZE; i++) {
    sum += luminositySamples[i];
  }
  return sum / LUMINOSITY_SAMPLE_SIZE;
}
