import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 250,
          ),
          const SizedBox(
            height: 50,
          ),
          const Text(
            'Learn Flutter!',
            style: TextStyle(
              color: Colors.greenAccent,
              fontSize: 27,
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          TextButton(
            onPressed: () {},
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.white,
            ),
            child: const Text('Press Me!'),
          ),
        ],
      ),
    );
  }
}
