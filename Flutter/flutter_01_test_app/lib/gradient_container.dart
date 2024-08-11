import 'package:flutter/material.dart';
import 'package:flutter_01_test_app/styled_text.dart';
import 'package:flutter_01_test_app/dice_roller.dart';

// Dart is an object-oriented language (OOL) because everything is treated as an object.
// This includes fundamental types to complex user-defined types.

// Alignment? startAlignment; // the ? means it could be a null value sotred in the variable
// ? use it when u dont immediately assign a value toa  variable
// talk about variable  var  and final
// finale vs const, const comnplied time constant
// but if the variable is calling a funciton and in this case u will get the actual value wheen runtime then it is finale
// finale, is known when complied
// locked in when compline -> better performacne
// compile tiem constatn value -=-? const

class GradientContainer extends StatelessWidget {
  // Utilizing a special named argument 'key' which should be forwarded to the superclass StatelessWidget. GradientContainer(this.colors, {super.key});
  const GradientContainer(this.colors, {super.key});

  // or   const GradientContainer ({super.key, required this.colors});  // 'required' is added because named arguments are optional by default.
  // The 'const' constructor indicates that instances of GradientContainer can be constant,
  // allowing Dart to optimize by reusing instances.

  final List<Color> colors; // cannot have const with lists

  // Alternatie construction function
  GradientContainer.purple({super.key})
      : colors = [Colors.purple, Colors.purple];

  @override
  Widget build(BuildContext context) {
    return Container(
      // The Container widget is versatile for layout, styling, and positioning of its child widgets.
      decoration: BoxDecoration(
        // BoxDecoration allows customization of the Container's appearance, such as adding gradients.
        gradient: LinearGradient(
          // LinearGradient applies a smooth color transition between specified colors.
          colors: colors,
          begin: Alignment
              .topLeft, // The gradient starts from the top left corner.
          end: Alignment
              .bottomRight, // The gradient ends at the bottom right corner.
        ),
      ),
      child: const Center(
        // The Center widget centers its child within itself.
        // child: StyledText(
        //     'Hello, Nawar!'), // Custom widget that likely provides styled text.
        child: DiceRoller(),
      ),
    );
  } // Flutter calls 'build' whenever it needs to draw the widget, providing the current 'context'.
}


// if we have asneraio when UI changes, we need sateful widget
// stefull widget allow us to manage states
// states are data the  changes overtime and thus UI changes
// we break the widget into satetless widget and satefull woidget
