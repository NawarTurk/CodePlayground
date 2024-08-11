import 'package:flutter/material.dart';
import 'package:flutter_01_test_app/gradient_container.dart';

void main() {
  // The main function is the entry point of every Flutter app. It automatically runs when the app starts.
  runApp(
    const MaterialApp(
      // MaterialApp is the core widget for material design apps, providing basic app structure.
      home: Scaffold(
        // Scaffold provides the structure for visual layout, including app bars, drawers, and more.
        backgroundColor: Colors
            .lightGreen, // Sets the background color of the entire screen.
        body: GradientContainer(
             [Colors.green, Color.fromARGB(255, 42, 150, 141)]),
      ),
    ),
  ); // runApp is required to inflate the widget tree and display the UI.
}

// 'const' in Dart makes objects immutable, optimizing performance by reusing widget instances.
// MaterialApp serves as the root widget, setting up the app's theme, routes, and other essentials.
// Flutter is a type-safe language, ensuring variables and functions are used consistently with their declared types.
// Properly formatting code (like adding commas) improves readability and maintainability.


