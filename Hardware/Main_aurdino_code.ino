#include <DHT.h>

// Pin definitions for the sensors
const int gasModule1Pin = A0;  // Analog input pin for gas module 1 (MQ2)
const int gasModule2Pin = A1;  // Analog input pin for gas module 2 (MQ2)
const int gasModule3Pin = A2;  // Analog input pin for gas module 3 (MQ7)
const int gasModule4Pin = A3;  // Analog input pin for gas module 4 (MQ135)
const int dhtPin = 2;          // Digital input pin for DHT11

DHT dht(dhtPin, DHT11);        // Initialize DHT sensor for DHT11

void setup() {
  Serial.begin(9600);          // Initialize serial communication at 9600 bits per second
  dht.begin();                 // Initialize DHT11 sensor
}

void loop() {
  // Read the values from the gas modules
  int gasModule1Value = analogRead(gasModule1Pin);
  int gasModule2Value = analogRead(gasModule2Pin);
  int gasModule3Value = analogRead(gasModule3Pin);
  int gasModule4Value = analogRead(gasModule4Pin);
  
  // Read the values from DHT11  
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Send the values to ESP8266 via serial communication
  Serial.print("Gas Module 1 Value: ");
  Serial.print(gasModule1Value);
  Serial.print(", Gas Module 2 Value: ");
  Serial.print(gasModule2Value);
  Serial.print(", Gas Module 3 Value: ");
  Serial.print(gasModule3Value);
  Serial.print(", Gas Module 4 Value: ");
  Serial.print(gasModule4Value);
  Serial.print(", Temperature: ");
  Serial.print(temperature);
  Serial.print(", Humidity: ");
  Serial.println(humidity);

  delay(4000); // Wait 1 second before taking the next reading
}
