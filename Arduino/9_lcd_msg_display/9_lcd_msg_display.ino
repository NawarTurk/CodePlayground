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
const char* MESSAGE1 = "Hello";
const char* MESSAGE2 = "world!";
const int DELAY_TIME = 500;

void setup() {
  lcd.begin(LCD_COLUMNS, LCD_ROWS);  // Set the LCD's number of columns and rows
}

void loop() {
  displayMessage(4, 0, MESSAGE1);
  delay(DELAY_TIME);
  displayMessage(7, 1, MESSAGE2);
  delay(DELAY_TIME);
  clearMessage(4, 0, strlen(MESSAGE1));
  delay(DELAY_TIME);
  lcd.clear();
  delay(DELAY_TIME);
}

void displayMessage(int col, int row, const char* message) {
  lcd.setCursor(col, row);
  lcd.print(message);
}

void clearMessage(int col, int row, int length) {
  lcd.setCursor(col, row);
  for (int i = 0; i < length; ++i) {
    lcd.print(" ");
  }
}
