#include <LiquidCrystal.h>

#define LCD_RS_PIN 3
#define LCD_E_PIN 4
#define LCD_D4_PIN 5
#define LCD_D5_PIN 6
#define LCD_D6_PIN 7
#define LCD_D7_PIN 8

// Pass arguments in order
LiquidCrystal lcd(LCD_RS_PIN, LCD_E_PIN, LCD_D4_PIN,
                  LCD_D5_PIN, LCD_D6_PIN, LCD_D7_PIN);

const int LCD_COLUMNS = 16;
const int LCD_ROWS = 2;
int row = 0;


void setup() {
  lcd.begin(LCD_COLUMNS, LCD_ROWS);  // Set the LCD's number of columns and rows
  Serial.begin(115200);
  Serial.setTimeout(20);
}

void loop() {
  if (Serial.available() > 0) {   
    String message = Serial.readString();
    displayMessage(message);  
  }

}

void displayMessage(String message) {
  lcd.setCursor(0, row);
  
  if (message.length() > 16){
    lcd.print("Text is too long");
  } else {
  	lcd.print(message);
  }
                                     
  for (int i = message.length(); i < 16; i++) {
    lcd.print(" ");
  }
                                       
  if (row == 0) {
    row = 1;
  } else {
    row = 0;
  }
  
}

