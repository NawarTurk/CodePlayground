import 'package:flutter/material.dart';
import 'package:flutter_02_quiz_app/home_page.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.green, Colors.blue],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: HomePage(),
        ),
      ),
    ),
  );
}
