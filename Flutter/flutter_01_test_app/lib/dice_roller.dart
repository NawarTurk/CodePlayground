import 'package:flutter/material.dart';
import 'dart:math';

final randomizer = Random(); // Global variable for generating random numbers.

class DiceRoller extends StatefulWidget {
  // StatefulWidget allows changing state over time, unlike StatelessWidget.
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() => _DiceRollerState();
}

class _DiceRollerState extends State<DiceRoller> {
  var currentDiceRoll = 2; // Initial dice roll set to 2.

  void rollDice() {
    setState(() {
      currentDiceRoll = randomizer.nextInt(6) +
          1; // Generates a new random number between 1 and 6.
    }); // setState triggers a widget rebuild.
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/dice-$currentDiceRoll.png',
          width: 250, // Displays dice image based on currentDiceRoll.
        ),
        const SizedBox(
            height: 30), // Fixed height, larger content will be clipped.
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            padding: const EdgeInsets.all(20),
            foregroundColor: Colors.red,
            backgroundColor: Colors.yellow,
            textStyle: const TextStyle(fontSize: 12),
          ),
          child: const Text('Press Me'),
        )
      ],
    );
  }
} // End of the _DiceRollerState class definition.

// Naming convention: Prefixing a class name with '_' makes it private to its library.
