import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage(this.startQuiz, {super.key});

  final void Function() startQuiz;
  // a function that takes no argument and returns nothing

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 250,
            color: const Color.fromARGB(100, 255, 255, 255),
          ),
          // Opacity(  // Opactiy is performance intensive, try avoid to use it
          //   opacity: 0.7,
          //   child: Image.asset(
          //     'assets/images/quiz-logo.png',
          //     width: 250,
          //   ),
          // ),
          const SizedBox(
            height: 50,
          ),
          const Text(
            'Learn Flutter!',
            style: TextStyle(
              color: Color.fromARGB(255, 194, 231, 212),
              fontSize: 27,
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          OutlinedButton.icon(
            onPressed: startQuiz,
            // OutlinedButton.icon(
            // onPressed: () {
            //   startQuiz();
            // },
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.white,
            ),
            // child: const Text('Press Me!'), it is now called label
            label: const Text('Start Quiz!'),
            icon: const Icon(
              Icons // can be used anywhere that requiresa a widget
                  .arrow_right_alt,
            ),
          ),
        ],
      ),
    );
  }
}
