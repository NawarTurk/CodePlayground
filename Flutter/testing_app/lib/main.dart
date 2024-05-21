import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          backgroundColor: Colors.purple,
          title: const Center(
            child: Text('Hey There! I am a developer!!!'),
          ),
        ),
        body: const Center(
          child: Image(
            image: AssetImage('assetName'),
          ),
        ),
      ),
    ),
  );
}
