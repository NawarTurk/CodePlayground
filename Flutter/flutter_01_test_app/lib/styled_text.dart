import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});
  // 'this.text' assigns the incoming argument to the instance variable 'text'.
  // 'const' keyword used in the constructor indicates that instances are immutable once created.

  final String text;
  // 'final' keyword ensures the variable 'text' is set only once and cannot be modified thereafter.

  @override
  Widget build(context) {
    return Text(
      text,
      style: const TextStyle(
        color: Colors.white70,
        fontSize: 50,
      ),
    ); // Displays "Hello, world!" text in the center.
  }
}
