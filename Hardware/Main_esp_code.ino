#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "krishan"; // Your WiFi SSID
const char* password = "jabalpur"; // Your WiFi password
const char* serverName = "http://192.168.129.134:5000/gasData"; // Your Node.js server endpoint

WiFiClient client;
HTTPClient http;

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (Serial.available() > 0) {
    String message = Serial.readStringUntil('\n');
    message.trim();  // Remove any leading or trailing whitespace, including newline characters

    if (message.startsWith("Gas Module 1 Value: ")) {
      int gasModule1Index = message.indexOf(':') + 2;
      int gasModule2Index = message.indexOf("Gas Module 2 Value: ") + 20;
      int gasModule3Index = message.indexOf("Gas Module 3 Value: ") + 20;
      int gasModule4Index = message.indexOf("Gas Module 4 Value: ") + 20;
      int tempIndex = message.indexOf("Temperature: ") + 13;
      int humidityIndex = message.indexOf("Humidity: ") + 10;

      String gasModule1Value = message.substring(gasModule1Index, gasModule2Index - 21);
      String gasModule2Value = message.substring(gasModule2Index, gasModule3Index - 21);
      String gasModule3Value = message.substring(gasModule3Index, gasModule4Index - 21);
      String gasModule4Value = message.substring(gasModule4Index, tempIndex - 14);
      String temperature = message.substring(tempIndex, humidityIndex - 11);
      String humidity = message.substring(humidityIndex);

      // Print the received data in the serial monitor
      Serial.print("Received data: ");
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

      // Send the values to the Node.js server
      http.begin(client, serverName);
      http.addHeader("Content-Type", "application/json");

      String httpRequestData = "{\"gasModule1Value\":\"" + gasModule1Value + "\",\"gasModule2Value\":\"" + gasModule2Value + "\",\"gasModule3Value\":\"" + gasModule3Value + "\",\"gasModule4Value\":\"" + gasModule4Value + "\",\"temperature\":\"" + temperature + "\",\"humidity\":\"" + humidity + "\"}";
      Serial.println("Sending JSON data: " + httpRequestData);
      int httpResponseCode = http.POST(httpRequestData);

      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println("Server response: " + response);
      } else {
        Serial.println("Error on sending POST: " + String(httpResponseCode));
      }

      http.end();
    }
  }
}
