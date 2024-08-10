import 'package:flutter/material.dart';

void main() {
  // The main function is the entry point of every Flutter app. It automatically runs when the app starts.
  runApp(
    MaterialApp(
      // MaterialApp is the core widget for material design apps, providing basic app structure.
      home: Scaffold(
        // Scaffold provides the structure for visual layout, including app bars, drawers, and more.
        backgroundColor: Colors
            .lightGreen, // Sets the background color of the entire screen.
        body: Container(
          // Container is a versatile widget for layout, styling, and positioning of child widgets.
          decoration: const BoxDecoration(
            // BoxDecoration allows customization of the Container's appearance, such as adding gradients.
            gradient: LinearGradient(
              // LinearGradient applies a smooth color transition between the specified colors.
              colors: [
                Colors.indigoAccent,
                Colors.black12
              ], // Defines the start and end colors.
              begin: Alignment.topLeft, // Gradient starts from the top left.
              end: Alignment.bottomRight, // Gradient ends at the bottom right.
            ),
          ),
          child: const Center(
            // Center widget centers its child widget within its parent.
            child: Text(
                'Hello, world!'), // Displays "Hello, world!" text in the center.
          ),
        ),
      ),
    ),
  ); // runApp is required to inflate the widget tree and display the UI.
}

// 'const' in Dart makes objects immutable, optimizing performance by reusing widget instances.
// MaterialApp serves as the root widget, setting up the app's theme, routes, and other essentials.
// Flutter is a type-safe language, ensuring variables and functions are used consistently with their declared types.
// Properly formatting code (like adding commas) improves readability and maintainability.
