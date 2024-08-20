import 'package:flutter/material.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key}); // get and forward the key argument

  @override
  State<QuestionScreen> createState() {
    return _QuestionScreenSate();
  }
}

class _QuestionScreenSate extends State<QuestionScreen> {
  @override
  Widget build(BuildContext context) {
    return const Text('Question Screen');
  }
}
