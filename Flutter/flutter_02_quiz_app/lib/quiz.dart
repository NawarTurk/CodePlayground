import 'package:flutter/material.dart';
import 'package:flutter_02_quiz_app/home_page.dart';
import 'package:flutter_02_quiz_app/question_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    // create an instane of _QuizState class
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  // Widget? activeSCreen;

  // @override
  // void initState() {
  //   // a method by the State class to add our initializtion logic
  //   activeSCreen = HomePage(switchScreen);
  //   super.initState();
  // }

  //  void switchScreen() {
  //   setState(() {
  //     // when setState is called in a a state calss, flutter re-execute the build method
  //     activeSCreen = const QuestionScreen();
  //   });
  // }

  var activeScreen = 'home-page';

  void switchScreen() {
    setState(() {
      // when setState is called in a a state calss, flutter re-execute the build method
      activeScreen = 'question-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.green, Colors.blue],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: activeScreen == 'home-page'
              ? HomePage(switchScreen)
              : const QuestionScreen(),
        ),
      ),
    );
  }
}
