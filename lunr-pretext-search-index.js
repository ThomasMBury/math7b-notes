var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  Hi! You've arrived at the course notes for Thomas Bury 's section of MATH 007B, Calculus for Life Sciences II, at the University of California, Riverside .  These notes assume familiarity with the material from MATH 007A, including limits, derivatives, and their basic applications. They are intended to supplement, not replace, lectures and discussion sections.  The describe the knowledge and skills students are expected to develop in the course and indicate how the topics relate to the course textbook and these course notes.  The backmatter includes a reproducing the equations and formulas provided during exams, as well as a bank of to help with exam preparation.  "
},
{
  "id": "learning-outcomes",
  "level": "1",
  "url": "learning-outcomes.html",
  "type": "Preface",
  "number": "",
  "title": "Learning Outcomes",
  "body": " Learning Outcomes  The following learning outcomes describe the knowledge and skills students are expected to develop in MATH 007B. Textbook section references refer to Calculus for Biology and Medicine by Neuhauser and Roper, 4th edition (2018), unless otherwise indicated.   Antiderivatives  ( ) Textbook: Neuhauser and Roper, Section 5.10.   State the definition of an antiderivative.   Find general antiderivatives of power, exponential, and trigonometric functions.   Find general antiderivatives of simple composite functions.  Solve initial value problems involving antiderivatives.     The Definite Integral  ( ) Textbook: Neuhauser and Roper, Section 6.1.   Interpret definite integrals geometrically as signed area.   Approximate definite integrals using Riemann sums with left endpoints.   Evaluate definite integrals using geometric reasoning.   Explain the definition of the definite integral as a limit of Riemann sums.      The Fundamental Theorem of Calculus  ( ) Textbook: Neuhauser and Roper, Section 6.2.    State and apply Part 1 of the Fundamental Theorem of Calculus.    State and apply Part 2 of the Fundamental Theorem of Calculus.      Cumulative Change  ( ) Textbook: Neuhauser and Roper, Section 6.3.1.    Use definite integrals to calculate cumulative change over an interval.   Interpret cumulative change in applications.     Average Values  ( ) Textbook: Neuhauser and Roper, Section 6.3.2.    State and explain the definition of the average value of a function over an interval.    Calculate and interpret the average value of a function over an interval.      The Mean Value Theorem  ( ) Textbook: Neuhauser and Roper, Section 6.3.3.    State, illustrate, and apply the Mean Value Theorem for integrals.      Areas  ( ) Textbook: Neuhauser and Roper, Section 6.3.4.   Calculate the area between two curves over a specified interval.   Determine appropriate limits of integration from the intersection points of two curves.    Calculate area when the upper and lower curves change over the interval.      Volumes of Solids  ( ) Textbook: Neuhauser and Roper, Section 6.3.5.    Apply the Disk Method to calculate volumes of solids of revolution about the - or -axis.    Apply the Washer Method to calculate volumes of solids of revolution about the - or -axis.      Arc Length  ( ) Textbook: Not covered in Neuhauser and Roper.   Set up and evaluate integrals for the arc length of a curve.     The Substitution Rule  ( ) Textbook: Neuhauser and Roper, Section 7.1.    Apply -substitution to evaluate indefinite and definite integrals.    Recognize integrals for which -substitution is an appropriate method.      Integration by Parts and Practicing Integration  ( ) Textbook: Neuhauser and Roper, Section 7.2.   Apply Integration by Parts to evaluate integrals.  Apply Integration by Parts repeatedly when necessary.   Combine -substitution and Integration by Parts when appropriate.    Recognize whether -substitution or Integration by Parts is an appropriate integration method.      Rational Functions and Partial Fractions  ( ) Textbook: Neuhauser and Roper, Section 7.3.    Use Partial Fraction Decomposition to integrate rational functions whose denominators contain distinct linear factors.    Use Partial Fraction Decomposition when the denominator contains repeated linear factors.    Use Partial Fraction Decomposition when the denominator contains irreducible quadratic factors.    Use polynomial long division before Partial Fraction Decomposition when appropriate.    Recognize rational-function integrals that can be evaluated without Partial Fraction Decomposition.      Improper Integrals  ( ) Textbook: Neuhauser and Roper, Section 7.4.    Recognize and evaluate improper integrals with infinite discontinuities.    Recognize and evaluate improper integrals over infinite intervals.   Determine whether an improper integral converges or diverges.   Apply the Direct Comparison Test to determine convergence or divergence.      Trigonometric Integrals  ( ) Textbook: APEX Calculus, Section 6.3.    Evaluate integrals involving powers of and .    Evaluate integrals involving powers of and .    Use trigonometric identities to rewrite integrands in a form that can be integrated.      Trigonometric Substitution  ( ) Textbook: APEX Calculus, Section 6.4.    Apply Trigonometric Substitution to integrals involving expressions of the form .    Apply Trigonometric Substitution to integrals involving expressions of the form .    Apply Trigonometric Substitution to integrals involving expressions of the form .    Recognize when an integral involving one of these expressions can be evaluated without Trigonometric Substitution.      Solving Separable Differential Equations  ( ) Textbook: Neuhauser and Roper, Section 8.1.   Recognize separable differential equations.   Find general and particular solutions to separable differential equations.      Equilibria and Their Stability  ( ) Textbook: Neuhauser and Roper, Section 8.2.    Determine the equilibria of an autonomous differential equation algebraically and graphically.    Construct and interpret a phase line for an autonomous differential equation.    Classify equilibria as stable or unstable from the direction of the vector field.    Determine the long-term behavior of solutions from a phase line.      Differential Equation Models  ( ) Textbook: Neuhauser and Roper, Section 8.3.    Formulate and analyze differential equation models arising from applications.    Interpret model parameters, solutions, equilibria, and long-term behavior in context.     "
},
{
  "id": "sec-antiderivatives",
  "level": "1",
  "url": "sec-antiderivatives.html",
  "type": "Section",
  "number": "1.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives  In differential calculus, we learn how to find the rate of change of a function. Integral calculus begins by asking the reverse question: if we know a rate of change, can we recover the original quantity?  Examples from the natural sciences include:    growth rate to population size,    reaction rate to amount of product formed,    velocity to position.     Antiderivative   A function is an antiderivative of if      An antiderivative of   Find an antiderivative of .    A first guess might be , but   so this is not an antiderivative of . Instead, consider   Differentiating gives   Therefore is an antiderivative of .  It is not the only one. Adding any constant does not change the derivative, so the general antiderivative is   where is an arbitrary constant.     The constant of integration  If is an antiderivative of , then is also an antiderivative for every constant . We therefore include a constant of integration when writing a general antiderivative.    Finding a general antiderivative   Find the general antiderivative of     We antidifferentiate term by term.  Since    and   the general antiderivative is      Checking your answer  A useful way to check an antiderivative is to differentiate your answer. You should recover the original function.   "
},
{
  "id": "def-antiderivative",
  "level": "2",
  "url": "sec-antiderivatives.html#def-antiderivative",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Antiderivative.",
  "body": " Antiderivative   A function is an antiderivative of if    "
},
{
  "id": "ex-antiderivative-x2",
  "level": "2",
  "url": "sec-antiderivatives.html#ex-antiderivative-x2",
  "type": "Example",
  "number": "1.1.2",
  "title": "An antiderivative of <span class=\"process-math\">\\(x^2\\)<\/span>.",
  "body": " An antiderivative of   Find an antiderivative of .    A first guess might be , but   so this is not an antiderivative of . Instead, consider   Differentiating gives   Therefore is an antiderivative of .  It is not the only one. Adding any constant does not change the derivative, so the general antiderivative is   where is an arbitrary constant.   "
},
{
  "id": "rem-constant-of-integration",
  "level": "2",
  "url": "sec-antiderivatives.html#rem-constant-of-integration",
  "type": "Remark",
  "number": "1.1.3",
  "title": "The constant of integration.",
  "body": " The constant of integration  If is an antiderivative of , then is also an antiderivative for every constant . We therefore include a constant of integration when writing a general antiderivative.  "
},
{
  "id": "ex-general-antiderivative",
  "level": "2",
  "url": "sec-antiderivatives.html#ex-general-antiderivative",
  "type": "Example",
  "number": "1.1.4",
  "title": "Finding a general antiderivative.",
  "body": " Finding a general antiderivative   Find the general antiderivative of     We antidifferentiate term by term.  Since    and   the general antiderivative is    "
},
{
  "id": "rem-check-by-differentiating",
  "level": "2",
  "url": "sec-antiderivatives.html#rem-check-by-differentiating",
  "type": "Remark",
  "number": "1.1.5",
  "title": "Checking your answer.",
  "body": " Checking your answer  A useful way to check an antiderivative is to differentiate your answer. You should recover the original function.  "
},
{
  "id": "sec-initial-value-problems",
  "level": "1",
  "url": "sec-initial-value-problems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Differential Equations and Initial Value Problems",
  "body": " Differential Equations and Initial Value Problems  Antidifferentiation can be used to solve simple differential equations.   Solving a differential equation by antidifferentiation   Find the general solution of     Rewrite the right-hand side as . Antidifferentiating gives   so      Initial value problem   An initial value problem consists of a differential equation together with a specified value of the solution at a particular point. The additional condition can be used to determine the constant of integration.     An initial value problem   Solve   subject to the initial condition     First find the general solution:   Now use the initial condition:   Therefore , and the particular solution is      A family of solutions and the solution selected by the initial condition.   Family of solution curves with the initial condition selecting one particular solution.   Several upward-opening curves represent the family for different values of . The initial condition selects the particular solution .      The initial condition selects one member of the family of general solutions, as shown in .  "
},
{
  "id": "ex-simple-de",
  "level": "2",
  "url": "sec-initial-value-problems.html#ex-simple-de",
  "type": "Example",
  "number": "1.2.1",
  "title": "Solving a differential equation by antidifferentiation.",
  "body": " Solving a differential equation by antidifferentiation   Find the general solution of     Rewrite the right-hand side as . Antidifferentiating gives   so    "
},
{
  "id": "def-initial-value-problem",
  "level": "2",
  "url": "sec-initial-value-problems.html#def-initial-value-problem",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Initial value problem.",
  "body": " Initial value problem   An initial value problem consists of a differential equation together with a specified value of the solution at a particular point. The additional condition can be used to determine the constant of integration.   "
},
{
  "id": "ex-ivp-population",
  "level": "2",
  "url": "sec-initial-value-problems.html#ex-ivp-population",
  "type": "Example",
  "number": "1.2.3",
  "title": "An initial value problem.",
  "body": " An initial value problem   Solve   subject to the initial condition     First find the general solution:   Now use the initial condition:   Therefore , and the particular solution is    "
},
{
  "id": "fig-ivp-family",
  "level": "2",
  "url": "sec-initial-value-problems.html#fig-ivp-family",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " A family of solutions and the solution selected by the initial condition.   Family of solution curves with the initial condition selecting one particular solution.   Several upward-opening curves represent the family for different values of . The initial condition selects the particular solution .     "
},
{
  "id": "sec-accumulation",
  "level": "1",
  "url": "sec-accumulation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Accumulation and Area",
  "body": " Accumulation and Area  Antiderivatives allow us to recover a quantity from its rate of change. A closely related problem is to determine how much of a quantity accumulates over an interval.  Suppose, for example, that we know the growth rate of a population. Over a short time interval, the change in population can be approximated by   If the growth rate varies with time, we can divide the time interval into smaller pieces and add the contributions from each piece. This idea leads to Riemann sums and the definite integral.  "
},
{
  "id": "sec-riemann-sums",
  "level": "1",
  "url": "sec-riemann-sums.html",
  "type": "Section",
  "number": "2.2",
  "title": "Riemann Sums",
  "body": " Riemann Sums  Let be a function on an interval . Divide the interval into equal subintervals. The width of each subinterval is   On each subinterval, choose a sample point . The area of the corresponding rectangle is approximately   Adding the rectangle areas gives the Riemann sum    Rectangle approximation for   Consider on the interval . Approximate the area under the graph by dividing the interval into equal pieces and using rectangles.    If the interval is divided into equal subintervals, then   Using a sample point from each subinterval, the corresponding Riemann sum is   As the subintervals become narrower, the rectangle approximation becomes more accurate.    "
},
{
  "id": "ex-riemann-x2",
  "level": "2",
  "url": "sec-riemann-sums.html#ex-riemann-x2",
  "type": "Example",
  "number": "2.2.1",
  "title": "Rectangle approximation for <span class=\"process-math\">\\(y=x^2\\)<\/span>.",
  "body": " Rectangle approximation for   Consider on the interval . Approximate the area under the graph by dividing the interval into equal pieces and using rectangles.    If the interval is divided into equal subintervals, then   Using a sample point from each subinterval, the corresponding Riemann sum is   As the subintervals become narrower, the rectangle approximation becomes more accurate.   "
},
{
  "id": "sec-definite-integral",
  "level": "1",
  "url": "sec-definite-integral.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Definite Integral",
  "body": " The Definite Integral   Definite integral   If the limit exists, the definite integral of from to is     The definite integral represents a net accumulation. When is positive, the integral contributes positively; when is negative, it contributes negatively.  "
},
{
  "id": "def-definite-integral",
  "level": "2",
  "url": "sec-definite-integral.html#def-definite-integral",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Definite integral.",
  "body": " Definite integral   If the limit exists, the definite integral of from to is    "
},
{
  "id": "sec-integral-properties",
  "level": "1",
  "url": "sec-integral-properties.html",
  "type": "Section",
  "number": "2.4",
  "title": "Signed Area and Properties of Definite Integrals",
  "body": " Signed Area and Properties of Definite Integrals  A definite integral represents signed area. Regions above the horizontal axis contribute positively, while regions below the horizontal axis contribute negatively.   Evaluating an integral geometrically   If the graph of a function is made from simple geometric regions, a definite integral can sometimes be evaluated by computing their signed areas.    Add the areas of regions lying above the horizontal axis and subtract the areas of regions lying below the horizontal axis.     Properties of definite integrals   For suitable functions and and a constant , the following properties hold.         Symmetry   If is odd, then on a symmetric interval,   If is even, then     "
},
{
  "id": "ex-signed-area",
  "level": "2",
  "url": "sec-integral-properties.html#ex-signed-area",
  "type": "Example",
  "number": "2.4.1",
  "title": "Evaluating an integral geometrically.",
  "body": " Evaluating an integral geometrically   If the graph of a function is made from simple geometric regions, a definite integral can sometimes be evaluated by computing their signed areas.    Add the areas of regions lying above the horizontal axis and subtract the areas of regions lying below the horizontal axis.   "
},
{
  "id": "thm-integral-properties",
  "level": "2",
  "url": "sec-integral-properties.html#thm-integral-properties",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Properties of definite integrals.",
  "body": " Properties of definite integrals   For suitable functions and and a constant , the following properties hold.       "
},
{
  "id": "thm-integral-symmetry",
  "level": "2",
  "url": "sec-integral-properties.html#thm-integral-symmetry",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Symmetry.",
  "body": " Symmetry   If is odd, then on a symmetric interval,   If is even, then    "
},
{
  "id": "sec-area-function",
  "level": "1",
  "url": "sec-area-function.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Area Function",
  "body": " The Area Function  The definite integral can be defined as a limit of Riemann sums, but evaluating a definite integral directly from this definition can be cumbersome. The Fundamental Theorem of Calculus connects definite integrals with antiderivatives and gives us a much more efficient way to compute them.  Let be a continuous function, and define   The function measures the net accumulation of from the fixed point to the variable point .  To determine how quickly this accumulated area changes, compare and :   If is small, this additional area is approximately the area of a rectangle with width and height . Thus,   Dividing by gives   Taking the limit as leads to the first part of the Fundamental Theorem of Calculus.  "
},
{
  "id": "sec-ftc-part-one",
  "level": "1",
  "url": "sec-ftc-part-one.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Fundamental Theorem of Calculus, Part I",
  "body": " The Fundamental Theorem of Calculus, Part I   Fundamental Theorem of Calculus, Part I   If is continuous on an interval containing and , and   then     In words, differentiating an accumulated integral returns the original function.   Differentiating an integral   Let   Find .    The integral has the form   with . Therefore, by the Fundamental Theorem of Calculus,      Another application of FTC Part I   Differentiate     By the Fundamental Theorem of Calculus,     "
},
{
  "id": "thm-ftc-one",
  "level": "2",
  "url": "sec-ftc-part-one.html#thm-ftc-one",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Fundamental Theorem of Calculus, Part I.",
  "body": " Fundamental Theorem of Calculus, Part I   If is continuous on an interval containing and , and   then    "
},
{
  "id": "ex-ftc-direct",
  "level": "2",
  "url": "sec-ftc-part-one.html#ex-ftc-direct",
  "type": "Example",
  "number": "3.2.2",
  "title": "Differentiating an integral.",
  "body": " Differentiating an integral   Let   Find .    The integral has the form   with . Therefore, by the Fundamental Theorem of Calculus,    "
},
{
  "id": "ex-ftc-direct-two",
  "level": "2",
  "url": "sec-ftc-part-one.html#ex-ftc-direct-two",
  "type": "Example",
  "number": "3.2.3",
  "title": "Another application of FTC Part I.",
  "body": " Another application of FTC Part I   Differentiate     By the Fundamental Theorem of Calculus,    "
},
{
  "id": "sec-leibniz-rule",
  "level": "1",
  "url": "sec-leibniz-rule.html",
  "type": "Section",
  "number": "3.3",
  "title": "Variable Limits and the Leibniz Rule",
  "body": " Variable Limits and the Leibniz Rule  The Fundamental Theorem of Calculus can be combined with the chain rule when a limit of integration is itself a function of .   A variable upper limit   Differentiate     Let   The Fundamental Theorem of Calculus gives   Using the chain rule,      Another variable upper limit   Differentiate     The upper limit is . Applying FTC Part I together with the chain rule gives     If the lower limit depends on , reversing the limits introduces a minus sign.   A variable lower limit   Differentiate     Reverse the limits:   Then use FTC Part I and the chain rule:      Leibniz Rule for Variable Limits   If   then, under suitable continuity and differentiability assumptions,     "
},
{
  "id": "ex-variable-upper-limit",
  "level": "2",
  "url": "sec-leibniz-rule.html#ex-variable-upper-limit",
  "type": "Example",
  "number": "3.3.1",
  "title": "A variable upper limit.",
  "body": " A variable upper limit   Differentiate     Let   The Fundamental Theorem of Calculus gives   Using the chain rule,    "
},
{
  "id": "ex-variable-upper-limit-two",
  "level": "2",
  "url": "sec-leibniz-rule.html#ex-variable-upper-limit-two",
  "type": "Example",
  "number": "3.3.2",
  "title": "Another variable upper limit.",
  "body": " Another variable upper limit   Differentiate     The upper limit is . Applying FTC Part I together with the chain rule gives    "
},
{
  "id": "ex-variable-lower-limit",
  "level": "2",
  "url": "sec-leibniz-rule.html#ex-variable-lower-limit",
  "type": "Example",
  "number": "3.3.3",
  "title": "A variable lower limit.",
  "body": " A variable lower limit   Differentiate     Reverse the limits:   Then use FTC Part I and the chain rule:    "
},
{
  "id": "thm-leibniz-variable-limits",
  "level": "2",
  "url": "sec-leibniz-rule.html#thm-leibniz-variable-limits",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "Leibniz Rule for Variable Limits.",
  "body": " Leibniz Rule for Variable Limits   If   then, under suitable continuity and differentiability assumptions,    "
},
{
  "id": "sec-ftc-part-two",
  "level": "1",
  "url": "sec-ftc-part-two.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Fundamental Theorem of Calculus, Part II",
  "body": " The Fundamental Theorem of Calculus, Part II  FTC Part I tells us that the accumulation function   is an antiderivative of . Therefore, any other antiderivative of differs from by a constant:   Evaluating at and gives   Since   and   we obtain FTC Part II.   Fundamental Theorem of Calculus, Part II   If is continuous on and is any antiderivative of , then      Choice of antiderivative  It does not matter which antiderivative of is used. Any constant of integration cancels when computing .    Evaluating a definite integral   Evaluate     An antiderivative of is   By FTC Part II,   Therefore,     "
},
{
  "id": "thm-ftc-two",
  "level": "2",
  "url": "sec-ftc-part-two.html#thm-ftc-two",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "Fundamental Theorem of Calculus, Part II.",
  "body": " Fundamental Theorem of Calculus, Part II   If is continuous on and is any antiderivative of , then    "
},
{
  "id": "rem-ftc-antiderivative-choice",
  "level": "2",
  "url": "sec-ftc-part-two.html#rem-ftc-antiderivative-choice",
  "type": "Remark",
  "number": "3.4.2",
  "title": "Choice of antiderivative.",
  "body": " Choice of antiderivative  It does not matter which antiderivative of is used. Any constant of integration cancels when computing .  "
},
{
  "id": "ex-ftc-evaluation",
  "level": "2",
  "url": "sec-ftc-part-two.html#ex-ftc-evaluation",
  "type": "Example",
  "number": "3.4.3",
  "title": "Evaluating a definite integral.",
  "body": " Evaluating a definite integral   Evaluate     An antiderivative of is   By FTC Part II,   Therefore,    "
},
{
  "id": "sec-evaluation-notation",
  "level": "1",
  "url": "sec-evaluation-notation.html",
  "type": "Section",
  "number": "3.5",
  "title": "Evaluation Notation",
  "body": " Evaluation Notation  The expression occurs frequently, so we use the shorthand notation    Using evaluation notation   Evaluate     An antiderivative of is . Therefore,      A trigonometric example   Evaluate     Since an antiderivative of is ,      An odd-function example   Evaluate     Using FTC Part II,   This is also consistent with the symmetry property for odd functions on symmetric intervals.    "
},
{
  "id": "ex-evaluation-notation-polynomial",
  "level": "2",
  "url": "sec-evaluation-notation.html#ex-evaluation-notation-polynomial",
  "type": "Example",
  "number": "3.5.1",
  "title": "Using evaluation notation.",
  "body": " Using evaluation notation   Evaluate     An antiderivative of is . Therefore,    "
},
{
  "id": "ex-evaluation-notation-trig",
  "level": "2",
  "url": "sec-evaluation-notation.html#ex-evaluation-notation-trig",
  "type": "Example",
  "number": "3.5.2",
  "title": "A trigonometric example.",
  "body": " A trigonometric example   Evaluate     Since an antiderivative of is ,    "
},
{
  "id": "ex-evaluation-notation-odd",
  "level": "2",
  "url": "sec-evaluation-notation.html#ex-evaluation-notation-odd",
  "type": "Example",
  "number": "3.5.3",
  "title": "An odd-function example.",
  "body": " An odd-function example   Evaluate     Using FTC Part II,   This is also consistent with the symmetry property for odd functions on symmetric intervals.   "
},
{
  "id": "sec-indefinite-integral",
  "level": "1",
  "url": "sec-indefinite-integral.html",
  "type": "Section",
  "number": "3.6",
  "title": "The Indefinite Integral",
  "body": " The Indefinite Integral  The symbol for a definite integral includes limits of integration and represents a single number. The indefinite integral has no limits and represents a family of antiderivatives.   Indefinite Integral   If , then   where is an arbitrary constant.     An indefinite integral   Evaluate     Rewrite the integrand using exponents:   Therefore,      Definite versus indefinite integrals  A definite integral gives a single numerical value. An indefinite integral gives a family of functions.   "
},
{
  "id": "def-indefinite-integral",
  "level": "2",
  "url": "sec-indefinite-integral.html#def-indefinite-integral",
  "type": "Definition",
  "number": "3.6.1",
  "title": "Indefinite Integral.",
  "body": " Indefinite Integral   If , then   where is an arbitrary constant.   "
},
{
  "id": "ex-indefinite-integral-power",
  "level": "2",
  "url": "sec-indefinite-integral.html#ex-indefinite-integral-power",
  "type": "Example",
  "number": "3.6.2",
  "title": "An indefinite integral.",
  "body": " An indefinite integral   Evaluate     Rewrite the integrand using exponents:   Therefore,    "
},
{
  "id": "rem-definite-indefinite",
  "level": "2",
  "url": "sec-indefinite-integral.html#rem-definite-indefinite",
  "type": "Remark",
  "number": "3.6.3",
  "title": "Definite versus indefinite integrals.",
  "body": " Definite versus indefinite integrals  A definite integral gives a single numerical value. An indefinite integral gives a family of functions.  "
},
{
  "id": "sec-net-absolute-area",
  "level": "1",
  "url": "sec-net-absolute-area.html",
  "type": "Section",
  "number": "3.7",
  "title": "Net Area and Absolute Area",
  "body": " Net Area and Absolute Area  A definite integral gives the net, or signed, area between the graph of a function and the horizontal axis. Regions where contribute positively, while regions where contribute negatively.  If we want the total geometric area between the graph and the horizontal axis, negative contributions must also be counted positively. This is accomplished using the absolute value:   To evaluate such an integral, split the interval at points where changes sign.   Absolute area under a sine curve   Find the total area between and the horizontal axis from to .    The function is positive on and negative on . Therefore,   Evaluating each integral,   and   Hence the total area is     "
},
{
  "id": "ex-absolute-area-sine",
  "level": "2",
  "url": "sec-net-absolute-area.html#ex-absolute-area-sine",
  "type": "Example",
  "number": "3.7.1",
  "title": "Absolute area under a sine curve.",
  "body": " Absolute area under a sine curve   Find the total area between and the horizontal axis from to .    The function is positive on and negative on . Therefore,   Evaluating each integral,   and   Hence the total area is    "
},
{
  "id": "sec-area-between-curves",
  "level": "1",
  "url": "sec-area-between-curves.html",
  "type": "Section",
  "number": "4.1",
  "title": "Areas Between Curves",
  "body": " Areas Between Curves  Definite integrals can be used to compute the area of a region bounded by two curves. Suppose that lies above on the interval . We can divide the interval into narrow vertical strips. The approximate area of one strip is   Summing these strips and taking the limit gives    Top function minus bottom function  When using vertical slices, the area between two curves is found by integrating the top function minus the bottom function.    Area between an exponential and a parabola   Find the area between   and   from to .    On the interval shown, the upper function is and the lower function is . Therefore,   Simplifying the integrand,   An antiderivative is   Hence   Evaluating,   so      Finding a bounded area   Find the area in the first quadrant bounded by     First find the point of intersection:   Squaring both sides gives   The upper function is and the lower function is . Therefore,   Evaluating,     "
},
{
  "id": "rem-top-minus-bottom",
  "level": "2",
  "url": "sec-area-between-curves.html#rem-top-minus-bottom",
  "type": "Remark",
  "number": "4.1.1",
  "title": "Top function minus bottom function.",
  "body": " Top function minus bottom function  When using vertical slices, the area between two curves is found by integrating the top function minus the bottom function.  "
},
{
  "id": "ex-area-exp-parabola",
  "level": "2",
  "url": "sec-area-between-curves.html#ex-area-exp-parabola",
  "type": "Example",
  "number": "4.1.2",
  "title": "Area between an exponential and a parabola.",
  "body": " Area between an exponential and a parabola   Find the area between   and   from to .    On the interval shown, the upper function is and the lower function is . Therefore,   Simplifying the integrand,   An antiderivative is   Hence   Evaluating,   so    "
},
{
  "id": "ex-area-sqrt-line",
  "level": "2",
  "url": "sec-area-between-curves.html#ex-area-sqrt-line",
  "type": "Example",
  "number": "4.1.3",
  "title": "Finding a bounded area.",
  "body": " Finding a bounded area   Find the area in the first quadrant bounded by     First find the point of intersection:   Squaring both sides gives   The upper function is and the lower function is . Therefore,   Evaluating,    "
},
{
  "id": "sec-cumulative-change",
  "level": "1",
  "url": "sec-cumulative-change.html",
  "type": "Section",
  "number": "4.2",
  "title": "Cumulative Change",
  "body": " Cumulative Change  When a function represents a rate of change, its definite integral gives the cumulative change in the underlying quantity.  If is a rate of change, then the cumulative change from time to time is   The rate can be negative. In that case, the negative contribution to the integral corresponds to a decrease in the underlying quantity.   Population growth   Consider a population whose size at time is and whose growth obeys   with   Find the cumulative change in population from to .    The cumulative change is   Therefore,   We can verify this result by solving the initial value problem. Antidifferentiating gives   Using ,   so . Hence   The change from to is therefore   which agrees with the definite integral.     Accumulated rainfall   A rain gauge measures the rate of rainfall in millimeters per hour. Suppose the rainfall rate is   Find the total rainfall between time and time .    Total rainfall is the integral of the rainfall rate:   Therefore,   Hence     "
},
{
  "id": "ex-cumulative-population",
  "level": "2",
  "url": "sec-cumulative-change.html#ex-cumulative-population",
  "type": "Example",
  "number": "4.2.1",
  "title": "Population growth.",
  "body": " Population growth   Consider a population whose size at time is and whose growth obeys   with   Find the cumulative change in population from to .    The cumulative change is   Therefore,   We can verify this result by solving the initial value problem. Antidifferentiating gives   Using ,   so . Hence   The change from to is therefore   which agrees with the definite integral.   "
},
{
  "id": "ex-cumulative-rainfall",
  "level": "2",
  "url": "sec-cumulative-change.html#ex-cumulative-rainfall",
  "type": "Example",
  "number": "4.2.2",
  "title": "Accumulated rainfall.",
  "body": " Accumulated rainfall   A rain gauge measures the rate of rainfall in millimeters per hour. Suppose the rainfall rate is   Find the total rainfall between time and time .    Total rainfall is the integral of the rainfall rate:   Therefore,   Hence    "
},
{
  "id": "sec-average-values",
  "level": "1",
  "url": "sec-average-values.html",
  "type": "Section",
  "number": "4.3",
  "title": "Average Values",
  "body": " Average Values  For a finite collection of values , the ordinary arithmetic average is   We can extend this idea to a continuous function on an interval.   Average Value of a Function   The average value of a continuous function on is     Geometrically,   Thus, is the height of a rectangle with width having the same signed area as the region represented by the integral.   Average value of   Find the average value of on the interval .    By the definition of average value,   Therefore,     Examples of continuous averages include average speed over a time interval, average height over a region of terrain, and average temperature over the course of a day.  "
},
{
  "id": "def-average-value",
  "level": "2",
  "url": "sec-average-values.html#def-average-value",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Average Value of a Function.",
  "body": " Average Value of a Function   The average value of a continuous function on is    "
},
{
  "id": "ex-average-x2",
  "level": "2",
  "url": "sec-average-values.html#ex-average-x2",
  "type": "Example",
  "number": "4.3.2",
  "title": "Average value of <span class=\"process-math\">\\(x^2\\)<\/span>.",
  "body": " Average value of   Find the average value of on the interval .    By the definition of average value,   Therefore,    "
},
{
  "id": "sec-mean-value-theorem-integrals",
  "level": "1",
  "url": "sec-mean-value-theorem-integrals.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Mean Value Theorem for Integrals",
  "body": " The Mean Value Theorem for Integrals  If a continuous function has an average value on an interval, it is natural to ask whether the function actually takes that value somewhere on the interval.   Mean Value Theorem for Integrals   If is continuous on , then there exists some in such that   Equivalently,     In words, a continuous function takes on its average value at least once somewhere in the interval.   Finding where a function equals its average value   Determine the average value of on , and find a value of where equals this average.    The average value is   We therefore solve   Hence     "
},
{
  "id": "thm-mean-value-integrals",
  "level": "2",
  "url": "sec-mean-value-theorem-integrals.html#thm-mean-value-integrals",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "Mean Value Theorem for Integrals.",
  "body": " Mean Value Theorem for Integrals   If is continuous on , then there exists some in such that   Equivalently,    "
},
{
  "id": "ex-mvt-x3",
  "level": "2",
  "url": "sec-mean-value-theorem-integrals.html#ex-mvt-x3",
  "type": "Example",
  "number": "4.4.2",
  "title": "Finding where a function equals its average value.",
  "body": " Finding where a function equals its average value   Determine the average value of on , and find a value of where equals this average.    The average value is   We therefore solve   Hence    "
},
{
  "id": "sec-volumes",
  "level": "1",
  "url": "sec-volumes.html",
  "type": "Section",
  "number": "4.5",
  "title": "Volumes of Solids",
  "body": " Volumes of Solids  Definite integrals can also be used to calculate volumes. Suppose the region under from to is rotated around the horizontal axis.  A thin vertical slice generates a disk with radius approximately and thickness . Its volume is approximately   Adding the disk volumes and taking a limit gives the disk method.   Disk Method   If the region under on is rotated about the horizontal axis, its volume is      A volume using the disk method   Find the volume of the solid obtained by rotating the region bounded by   about the horizontal axis.    The radius of each disk is . Therefore,   Simplifying,   Thus,      Recovering the volume of a sphere   The upper semicircle of radius is   Rotate this semicircle around the horizontal axis to calculate the volume of a sphere of radius .    Using the disk method,   Therefore,   Evaluating,     If the region being rotated does not touch the axis of rotation, each cross-section has a hole. The resulting cross-sections are washers rather than disks.   Washer Method   If is the outer radius and is the inner radius, then the volume is      A volume using washers   Rotate the region bounded by   about the horizontal axis and compute the volume.    First find the intersection points:   Squaring gives   so   On , the outer radius is and the inner radius is . Thus,   Therefore,   Evaluating,     "
},
{
  "id": "thm-disk-method",
  "level": "2",
  "url": "sec-volumes.html#thm-disk-method",
  "type": "Theorem",
  "number": "4.5.1",
  "title": "Disk Method.",
  "body": " Disk Method   If the region under on is rotated about the horizontal axis, its volume is    "
},
{
  "id": "ex-volume-sqrt",
  "level": "2",
  "url": "sec-volumes.html#ex-volume-sqrt",
  "type": "Example",
  "number": "4.5.2",
  "title": "A volume using the disk method.",
  "body": " A volume using the disk method   Find the volume of the solid obtained by rotating the region bounded by   about the horizontal axis.    The radius of each disk is . Therefore,   Simplifying,   Thus,    "
},
{
  "id": "ex-volume-sphere",
  "level": "2",
  "url": "sec-volumes.html#ex-volume-sphere",
  "type": "Example",
  "number": "4.5.3",
  "title": "Recovering the volume of a sphere.",
  "body": " Recovering the volume of a sphere   The upper semicircle of radius is   Rotate this semicircle around the horizontal axis to calculate the volume of a sphere of radius .    Using the disk method,   Therefore,   Evaluating,    "
},
{
  "id": "thm-washer-method",
  "level": "2",
  "url": "sec-volumes.html#thm-washer-method",
  "type": "Theorem",
  "number": "4.5.4",
  "title": "Washer Method.",
  "body": " Washer Method   If is the outer radius and is the inner radius, then the volume is    "
},
{
  "id": "ex-washer-sqrt-line",
  "level": "2",
  "url": "sec-volumes.html#ex-washer-sqrt-line",
  "type": "Example",
  "number": "4.5.5",
  "title": "A volume using washers.",
  "body": " A volume using washers   Rotate the region bounded by   about the horizontal axis and compute the volume.    First find the intersection points:   Squaring gives   so   On , the outer radius is and the inner radius is . Thus,   Therefore,   Evaluating,    "
},
{
  "id": "sec-arc-length",
  "level": "1",
  "url": "sec-arc-length.html",
  "type": "Section",
  "number": "4.6",
  "title": "Arc Length",
  "body": " Arc Length  Integration can also be used to determine the length of a curved graph. Suppose we want to find the length of from to .  Divide the interval into many small subintervals. Over a sufficiently small subinterval, the curve is approximately a straight line.  If the horizontal change is , then the corresponding vertical change is approximately   By the Pythagorean theorem, the length of the small line segment is approximately   Substituting gives   Summing these small lengths gives   Taking the limit produces the arc-length formula.   Arc Length Formula   If is continuous on , then the length of the graph from to is      Finding the length of a curve   Find the length of the curve   from to .    First differentiate:   Therefore,   Evaluating,   Hence     "
},
{
  "id": "thm-arc-length",
  "level": "2",
  "url": "sec-arc-length.html#thm-arc-length",
  "type": "Theorem",
  "number": "4.6.1",
  "title": "Arc Length Formula.",
  "body": " Arc Length Formula   If is continuous on , then the length of the graph from to is    "
},
{
  "id": "ex-arc-length-power",
  "level": "2",
  "url": "sec-arc-length.html#ex-arc-length-power",
  "type": "Example",
  "number": "4.6.2",
  "title": "Finding the length of a curve.",
  "body": " Finding the length of a curve   Find the length of the curve   from to .    First differentiate:   Therefore,   Evaluating,   Hence    "
},
{
  "id": "sec-substitution",
  "level": "1",
  "url": "sec-substitution.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Substitution Rule",
  "body": " The Substitution Rule  Antidifferentiation is often more difficult than differentiation. One useful strategy is to recognize when an integrand has been produced by the chain rule and reverse that process.  Recall that the chain rule gives   Reversing this relationship leads to the substitution rule:   We introduce a new variable   so that   The goal is to rewrite the entire integral in terms of .   Substitution Rule for Indefinite Integrals   If is differentiable, then      Substitution reverses the chain rule  A useful way to identify a substitution is to look for a function inside another function together with its derivative, possibly up to a constant factor.    A basic substitution   Evaluate     The expression appears inside the cosine, and its derivative is . Let   Then   Therefore,   Integrating,   Substituting back,      Substitution with an exponential   Evaluate     Let   Then   so   Thus,   Therefore,      Substitution with a power   Evaluate     Let   Then   and hence   The integral becomes   Therefore,   Substituting back gives      Substitution leading to a logarithm   Evaluate     Let   Then   Thus,   Therefore,   Since , this may be written as      Choosing  There is no single rule that always tells us which substitution to choose. A good first choice is often an expression that appears inside another function, especially when its derivative also appears elsewhere in the integrand.    Rewriting before substituting   Evaluate     The expression suggests the substitution   Since   we first rewrite   Also, from ,   Therefore,   Simplifying,   Hence,   Substituting back,     "
},
{
  "id": "thm-substitution-indefinite",
  "level": "2",
  "url": "sec-substitution.html#thm-substitution-indefinite",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "Substitution Rule for Indefinite Integrals.",
  "body": " Substitution Rule for Indefinite Integrals   If is differentiable, then    "
},
{
  "id": "rem-substitution-chain-rule",
  "level": "2",
  "url": "sec-substitution.html#rem-substitution-chain-rule",
  "type": "Remark",
  "number": "5.1.2",
  "title": "Substitution reverses the chain rule.",
  "body": " Substitution reverses the chain rule  A useful way to identify a substitution is to look for a function inside another function together with its derivative, possibly up to a constant factor.  "
},
{
  "id": "ex-substitution-basic",
  "level": "2",
  "url": "sec-substitution.html#ex-substitution-basic",
  "type": "Example",
  "number": "5.1.3",
  "title": "A basic substitution.",
  "body": " A basic substitution   Evaluate     The expression appears inside the cosine, and its derivative is . Let   Then   Therefore,   Integrating,   Substituting back,    "
},
{
  "id": "ex-substitution-exp",
  "level": "2",
  "url": "sec-substitution.html#ex-substitution-exp",
  "type": "Example",
  "number": "5.1.4",
  "title": "Substitution with an exponential.",
  "body": " Substitution with an exponential   Evaluate     Let   Then   so   Thus,   Therefore,    "
},
{
  "id": "ex-substitution-power",
  "level": "2",
  "url": "sec-substitution.html#ex-substitution-power",
  "type": "Example",
  "number": "5.1.5",
  "title": "Substitution with a power.",
  "body": " Substitution with a power   Evaluate     Let   Then   and hence   The integral becomes   Therefore,   Substituting back gives    "
},
{
  "id": "ex-substitution-log",
  "level": "2",
  "url": "sec-substitution.html#ex-substitution-log",
  "type": "Example",
  "number": "5.1.6",
  "title": "Substitution leading to a logarithm.",
  "body": " Substitution leading to a logarithm   Evaluate     Let   Then   Thus,   Therefore,   Since , this may be written as    "
},
{
  "id": "rem-substitution-choice",
  "level": "2",
  "url": "sec-substitution.html#rem-substitution-choice",
  "type": "Remark",
  "number": "5.1.7",
  "title": "Choosing <span class=\"process-math\">\\(u\\)<\/span>.",
  "body": " Choosing  There is no single rule that always tells us which substitution to choose. A good first choice is often an expression that appears inside another function, especially when its derivative also appears elsewhere in the integrand.  "
},
{
  "id": "ex-substitution-rewrite",
  "level": "2",
  "url": "sec-substitution.html#ex-substitution-rewrite",
  "type": "Example",
  "number": "5.1.8",
  "title": "Rewriting before substituting.",
  "body": " Rewriting before substituting   Evaluate     The expression suggests the substitution   Since   we first rewrite   Also, from ,   Therefore,   Simplifying,   Hence,   Substituting back,    "
},
{
  "id": "sec-substitution-definite",
  "level": "1",
  "url": "sec-substitution-definite.html",
  "type": "Section",
  "number": "5.2",
  "title": "Substitution in Definite Integrals",
  "body": " Substitution in Definite Integrals  The substitution rule can also be used with definite integrals. There are two valid approaches.  We can either perform the substitution, integrate in terms of , then substitute back to before evaluating the original bounds, or we can change the bounds to the corresponding -values and complete the entire calculation in terms of .   Substitution Rule for Definite Integrals   If , then      Changing the bounds   Evaluate     Let   so that   We now change the limits. When ,   and when ,   Therefore,   Hence,      A definite integral with new bounds   Evaluate     Let   Then   so   Change the bounds:    Therefore,   Evaluating,      Do not mix variables and bounds  Once the integral has been rewritten entirely in terms of , the limits of integration should also be -values. Alternatively, substitute back to before using the original -limits.    A trigonometric definite integral   Evaluate     Let   Then   Change the bounds:    Therefore,   Reversing the limits,   Hence,      A useful substitution workflow  When using substitution, the following sequence is often helpful:    Choose an expression for .    Compute .    Rewrite the entire integrand in terms of .    If the integral is definite, change the bounds to -values.    Integrate and simplify.     "
},
{
  "id": "thm-substitution-definite",
  "level": "2",
  "url": "sec-substitution-definite.html#thm-substitution-definite",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "Substitution Rule for Definite Integrals.",
  "body": " Substitution Rule for Definite Integrals   If , then    "
},
{
  "id": "ex-substitution-definite-basic",
  "level": "2",
  "url": "sec-substitution-definite.html#ex-substitution-definite-basic",
  "type": "Example",
  "number": "5.2.2",
  "title": "Changing the bounds.",
  "body": " Changing the bounds   Evaluate     Let   so that   We now change the limits. When ,   and when ,   Therefore,   Hence,    "
},
{
  "id": "ex-substitution-definite-polynomial",
  "level": "2",
  "url": "sec-substitution-definite.html#ex-substitution-definite-polynomial",
  "type": "Example",
  "number": "5.2.3",
  "title": "A definite integral with new bounds.",
  "body": " A definite integral with new bounds   Evaluate     Let   Then   so   Change the bounds:    Therefore,   Evaluating,    "
},
{
  "id": "rem-definite-substitution-bounds",
  "level": "2",
  "url": "sec-substitution-definite.html#rem-definite-substitution-bounds",
  "type": "Remark",
  "number": "5.2.4",
  "title": "Do not mix variables and bounds.",
  "body": " Do not mix variables and bounds  Once the integral has been rewritten entirely in terms of , the limits of integration should also be -values. Alternatively, substitute back to before using the original -limits.  "
},
{
  "id": "ex-substitution-definite-trig",
  "level": "2",
  "url": "sec-substitution-definite.html#ex-substitution-definite-trig",
  "type": "Example",
  "number": "5.2.5",
  "title": "A trigonometric definite integral.",
  "body": " A trigonometric definite integral   Evaluate     Let   Then   Change the bounds:    Therefore,   Reversing the limits,   Hence,    "
},
{
  "id": "rem-substitution-steps",
  "level": "2",
  "url": "sec-substitution-definite.html#rem-substitution-steps",
  "type": "Remark",
  "number": "5.2.6",
  "title": "A useful substitution workflow.",
  "body": " A useful substitution workflow  When using substitution, the following sequence is often helpful:    Choose an expression for .    Compute .    Rewrite the entire integrand in terms of .    If the integral is definite, change the bounds to -values.    Integrate and simplify.    "
},
{
  "id": "sec-integration-by-parts",
  "level": "1",
  "url": "sec-integration-by-parts.html",
  "type": "Section",
  "number": "5.3",
  "title": "Integration by Parts",
  "body": " Integration by Parts  The substitution rule can be viewed as reversing the chain rule. Integration by parts is based on reversing another differentiation rule: the product rule.  Recall that   Integrating both sides with respect to gives   Rearranging gives the integration-by-parts formula.   Integration by Parts    Equivalently, using differential notation,     The goal is to transform the original integral into a new integral that is easier to evaluate.   A first integration-by-parts example   Evaluate     Choose   Then   Applying integration by parts,   Therefore,      Choosing and  We must choose so that we can find its antiderivative . We would also like the derivative to simplify the remaining integral.   A poor choice can make the new integral harder than the original one. For example, in , choosing and produces an integral involving , which is more complicated than where we started.   Applying integration by parts twice   Evaluate     Choose   Then   Integration by parts gives   The remaining integral also requires integration by parts. Let   Then   Hence   Substituting into the original expression,      Check by differentiating  Integration-by-parts calculations can involve several steps. Differentiating the final answer is a useful way to check that it reproduces the original integrand.    A clever use of integration by parts   Evaluate     Although the integrand does not visibly contain a product, write   Choose   Then   Therefore,      Integration by Parts for Definite Integrals  With limits of integration, the integration-by-parts formula becomes   The boundary term must be evaluated at both endpoints.    Choosing an Integration Method  Determining whether to use substitution or integration by parts often requires practice. A useful question is whether differentiating part of the integrand simplifies the problem, or whether an inner function and its derivative are both present.  For example, an integral of the form   suggests substitution because the derivative of appears in the integrand. In contrast,   is naturally handled by integration by parts.   A rule of thumb for choosing  A common mnemonic is LIATE. When possible, choose from the first applicable category in the following order:    Logarithmic functions,    Inverse trigonometric functions,    Algebraic functions,    Trigonometric functions,    Exponential functions.    This is a useful guideline rather than a mathematical rule.     Combining Substitution and Integration by Parts  Some integrals require more than one technique.   Using substitution and integration by parts together   Evaluate     The expression inside the exponential suggests beginning with a substitution. Let   Then   so   Since ,   Now apply integration by parts to . Choose   Then   Hence   Therefore,   Factoring gives      "
},
{
  "id": "thm-integration-by-parts",
  "level": "2",
  "url": "sec-integration-by-parts.html#thm-integration-by-parts",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "Integration by Parts.",
  "body": " Integration by Parts    Equivalently, using differential notation,    "
},
{
  "id": "ex-ibp-x-exp",
  "level": "2",
  "url": "sec-integration-by-parts.html#ex-ibp-x-exp",
  "type": "Example",
  "number": "5.3.2",
  "title": "A first integration-by-parts example.",
  "body": " A first integration-by-parts example   Evaluate     Choose   Then   Applying integration by parts,   Therefore,    "
},
{
  "id": "rem-ibp-choice",
  "level": "2",
  "url": "sec-integration-by-parts.html#rem-ibp-choice",
  "type": "Remark",
  "number": "5.3.3",
  "title": "Choosing <span class=\"process-math\">\\(u\\)<\/span> and <span class=\"process-math\">\\(dv\\)<\/span>.",
  "body": " Choosing and  We must choose so that we can find its antiderivative . We would also like the derivative to simplify the remaining integral.  "
},
{
  "id": "ex-ibp-repeated",
  "level": "2",
  "url": "sec-integration-by-parts.html#ex-ibp-repeated",
  "type": "Example",
  "number": "5.3.4",
  "title": "Applying integration by parts twice.",
  "body": " Applying integration by parts twice   Evaluate     Choose   Then   Integration by parts gives   The remaining integral also requires integration by parts. Let   Then   Hence   Substituting into the original expression,    "
},
{
  "id": "rem-check-ibp",
  "level": "2",
  "url": "sec-integration-by-parts.html#rem-check-ibp",
  "type": "Remark",
  "number": "5.3.5",
  "title": "Check by differentiating.",
  "body": " Check by differentiating  Integration-by-parts calculations can involve several steps. Differentiating the final answer is a useful way to check that it reproduces the original integrand.  "
},
{
  "id": "ex-ibp-log",
  "level": "2",
  "url": "sec-integration-by-parts.html#ex-ibp-log",
  "type": "Example",
  "number": "5.3.6",
  "title": "A clever use of integration by parts.",
  "body": " A clever use of integration by parts   Evaluate     Although the integrand does not visibly contain a product, write   Choose   Then   Therefore,    "
},
{
  "id": "rem-liate",
  "level": "2",
  "url": "sec-integration-by-parts.html#rem-liate",
  "type": "Remark",
  "number": "5.3.7",
  "title": "A rule of thumb for choosing <span class=\"process-math\">\\(u\\)<\/span>.",
  "body": " A rule of thumb for choosing  A common mnemonic is LIATE. When possible, choose from the first applicable category in the following order:    Logarithmic functions,    Inverse trigonometric functions,    Algebraic functions,    Trigonometric functions,    Exponential functions.    This is a useful guideline rather than a mathematical rule.  "
},
{
  "id": "ex-substitution-and-ibp",
  "level": "2",
  "url": "sec-integration-by-parts.html#ex-substitution-and-ibp",
  "type": "Example",
  "number": "5.3.8",
  "title": "Using substitution and integration by parts together.",
  "body": " Using substitution and integration by parts together   Evaluate     The expression inside the exponential suggests beginning with a substitution. Let   Then   so   Since ,   Now apply integration by parts to . Choose   Then   Hence   Therefore,   Factoring gives    "
},
{
  "id": "sec-partial-fractions",
  "level": "1",
  "url": "sec-partial-fractions.html",
  "type": "Section",
  "number": "5.4",
  "title": "Rational Functions and Partial Fractions",
  "body": " Rational Functions and Partial Fractions  Some rational functions are difficult to integrate directly but can be rewritten as sums of simpler rational functions.   Rational Function   A rational function is a quotient of two polynomials:      Proper Rational Function   A rational function   is proper if the degree of is less than the degree of .     First check whether the rational function is proper  Partial-fraction decomposition is applied to proper rational functions. If the numerator has degree greater than or equal to the denominator, first use polynomial long division.    Long division before integration   Rewrite   as a polynomial plus a proper rational function.    Polynomial long division gives   The remaining rational term is now proper.     Distinct Linear Factors  Suppose the denominator factors into distinct linear factors. We assign one constant numerator to each factor.   A basic partial-fraction decomposition   Decompose     Write   Multiply through by :   Expanding,   Matching coefficients gives   Thus   Therefore,     Once the decomposition is known, integration becomes straightforward:    Two distinct linear factors   Decompose     Write   Multiplying by gives   One method is to compare coefficients. Expanding gives   Hence   Solving,   Therefore,      Strategic values of  Instead of comparing coefficients, it is often faster to substitute values of that make individual factors vanish. For the previous example, isolates , while isolates .     Repeated Linear Factors  If a linear factor is repeated, the decomposition must contain a term for every power of that factor.  For example, a denominator containing requires terms of the form    A repeated linear factor   Evaluate     Write   Multiplying by gives   Comparing coefficients gives   Thus   Therefore,       Irreducible Quadratic Factors  A quadratic factor that has no real roots cannot be factored into real linear factors. Such a factor is called irreducible over the real numbers.  For an irreducible quadratic factor, the corresponding numerator in a partial-fraction decomposition is linear. For example,    An integral with an irreducible quadratic   Consider     Split the integral:   The first integral can be evaluated by substitution with . The second involves the standard antiderivative associated with the inverse tangent function.     "
},
{
  "id": "def-rational-function",
  "level": "2",
  "url": "sec-partial-fractions.html#def-rational-function",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Rational Function.",
  "body": " Rational Function   A rational function is a quotient of two polynomials:    "
},
{
  "id": "def-proper-rational-function",
  "level": "2",
  "url": "sec-partial-fractions.html#def-proper-rational-function",
  "type": "Definition",
  "number": "5.4.2",
  "title": "Proper Rational Function.",
  "body": " Proper Rational Function   A rational function   is proper if the degree of is less than the degree of .   "
},
{
  "id": "rem-partial-fractions-proper",
  "level": "2",
  "url": "sec-partial-fractions.html#rem-partial-fractions-proper",
  "type": "Remark",
  "number": "5.4.3",
  "title": "First check whether the rational function is proper.",
  "body": " First check whether the rational function is proper  Partial-fraction decomposition is applied to proper rational functions. If the numerator has degree greater than or equal to the denominator, first use polynomial long division.  "
},
{
  "id": "ex-long-division-rational",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-long-division-rational",
  "type": "Example",
  "number": "5.4.4",
  "title": "Long division before integration.",
  "body": " Long division before integration   Rewrite   as a polynomial plus a proper rational function.    Polynomial long division gives   The remaining rational term is now proper.   "
},
{
  "id": "ex-pf-basic",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-pf-basic",
  "type": "Example",
  "number": "5.4.5",
  "title": "A basic partial-fraction decomposition.",
  "body": " A basic partial-fraction decomposition   Decompose     Write   Multiply through by :   Expanding,   Matching coefficients gives   Thus   Therefore,    "
},
{
  "id": "ex-pf-two-linear",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-pf-two-linear",
  "type": "Example",
  "number": "5.4.6",
  "title": "Two distinct linear factors.",
  "body": " Two distinct linear factors   Decompose     Write   Multiplying by gives   One method is to compare coefficients. Expanding gives   Hence   Solving,   Therefore,    "
},
{
  "id": "rem-pf-strategic-values",
  "level": "2",
  "url": "sec-partial-fractions.html#rem-pf-strategic-values",
  "type": "Remark",
  "number": "5.4.7",
  "title": "Strategic values of <span class=\"process-math\">\\(x\\)<\/span>.",
  "body": " Strategic values of  Instead of comparing coefficients, it is often faster to substitute values of that make individual factors vanish. For the previous example, isolates , while isolates .  "
},
{
  "id": "ex-pf-repeated",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-pf-repeated",
  "type": "Example",
  "number": "5.4.8",
  "title": "A repeated linear factor.",
  "body": " A repeated linear factor   Evaluate     Write   Multiplying by gives   Comparing coefficients gives   Thus   Therefore,    "
},
{
  "id": "ex-irreducible-quadratic",
  "level": "2",
  "url": "sec-partial-fractions.html#ex-irreducible-quadratic",
  "type": "Example",
  "number": "5.4.9",
  "title": "An integral with an irreducible quadratic.",
  "body": " An integral with an irreducible quadratic   Consider     Split the integral:   The first integral can be evaluated by substitution with . The second involves the standard antiderivative associated with the inverse tangent function.   "
},
{
  "id": "sec-improper-integrals",
  "level": "1",
  "url": "sec-improper-integrals.html",
  "type": "Section",
  "number": "5.5",
  "title": "Improper Integrals",
  "body": " Improper Integrals  So far, our definite integrals have involved finite intervals and bounded integrands. We now consider integrals for which one of these conditions fails.  There are two common types:    one or both limits of integration are infinite;    the integrand becomes unbounded at a point in the interval of integration.    Such integrals are defined using limits.   Type I: Unbounded Intervals   Improper Integral on an Unbounded Interval   We define   provided the limit exists and is finite.     A convergent improper integral   Evaluate     Replace the infinite endpoint by a finite value and take a limit:   The proper integral is   Therefore,      Convergence and Divergence   An improper integral converges if the defining limit exists and is finite. Otherwise, the improper integral diverges .     A divergent improper integral   Determine whether   converges or diverges.     Thus,   This limit is infinite, so the improper integral diverges.    An integral over the entire real line must be split at a finite point:   Both improper integrals must converge.   Both limits unbounded   Evaluate     Split the integral at :   Using the substitution , the two integrals evaluate to   respectively. Therefore,   This result is also consistent with the fact that is an odd function.      Type II: Unbounded Integrands  An integral can also be improper when the interval is finite but the integrand becomes unbounded at one of its endpoints or at an interior point.   An unbounded integrand that converges   Determine whether   converges or diverges.    The integrand becomes unbounded as . Define the integral by   Evaluating the proper integral,   Therefore,   The integral converges.     An unbounded integrand that diverges   Determine whether   converges or diverges.    The integrand becomes unbounded as . Therefore,   Since   we obtain   This tends to infinity, so the improper integral diverges.      Interior Singularities  An integrand may also become unbounded at a point inside the interval of integration. In this case, we split the integral at the point where the integrand becomes unbounded.   An unbounded integrand inside the interval   Determine whether   converges or diverges.    The integrand becomes unbounded at , so we split the integral:   Consider the first integral:   Therefore,   Since one of the two improper integrals diverges, the original integral diverges. We do not need to evaluate the second integral.     Every improper piece must converge  When an improper integral must be split into several integrals, every piece must converge for the original integral to converge. If even one piece diverges, the entire integral diverges.     Testing Convergence by Comparison  Some improper integrals are difficult or impossible to evaluate directly. We can sometimes determine whether they converge by comparing them with an integral whose behavior we already know.   Comparison Test   Suppose   If   converges, then   also converges.  Conversely, if   and   diverges, then   also diverges.     Showing convergence by comparison   Determine whether   converges.    For ,   Therefore,   and taking reciprocals gives   We already know that   converges. Therefore, by comparison,   also converges.     Showing divergence by comparison   Show that   diverges.    For , we have   so   Therefore,   But   diverges. Hence, by comparison,   also diverges.     "
},
{
  "id": "def-improper-infinite-upper",
  "level": "2",
  "url": "sec-improper-integrals.html#def-improper-infinite-upper",
  "type": "Definition",
  "number": "5.5.1",
  "title": "Improper Integral on an Unbounded Interval.",
  "body": " Improper Integral on an Unbounded Interval   We define   provided the limit exists and is finite.   "
},
{
  "id": "ex-improper-exp",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-exp",
  "type": "Example",
  "number": "5.5.2",
  "title": "A convergent improper integral.",
  "body": " A convergent improper integral   Evaluate     Replace the infinite endpoint by a finite value and take a limit:   The proper integral is   Therefore,    "
},
{
  "id": "def-improper-convergence",
  "level": "2",
  "url": "sec-improper-integrals.html#def-improper-convergence",
  "type": "Definition",
  "number": "5.5.3",
  "title": "Convergence and Divergence.",
  "body": " Convergence and Divergence   An improper integral converges if the defining limit exists and is finite. Otherwise, the improper integral diverges .   "
},
{
  "id": "ex-improper-one-over-x",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-one-over-x",
  "type": "Example",
  "number": "5.5.4",
  "title": "A divergent improper integral.",
  "body": " A divergent improper integral   Determine whether   converges or diverges.     Thus,   This limit is infinite, so the improper integral diverges.   "
},
{
  "id": "ex-improper-both-infinite",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-both-infinite",
  "type": "Example",
  "number": "5.5.5",
  "title": "Both limits unbounded.",
  "body": " Both limits unbounded   Evaluate     Split the integral at :   Using the substitution , the two integrals evaluate to   respectively. Therefore,   This result is also consistent with the fact that is an odd function.   "
},
{
  "id": "ex-improper-sqrt",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-sqrt",
  "type": "Example",
  "number": "5.5.6",
  "title": "An unbounded integrand that converges.",
  "body": " An unbounded integrand that converges   Determine whether   converges or diverges.    The integrand becomes unbounded as . Define the integral by   Evaluating the proper integral,   Therefore,   The integral converges.   "
},
{
  "id": "ex-improper-right-endpoint",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-right-endpoint",
  "type": "Example",
  "number": "5.5.7",
  "title": "An unbounded integrand that diverges.",
  "body": " An unbounded integrand that diverges   Determine whether   converges or diverges.    The integrand becomes unbounded as . Therefore,   Since   we obtain   This tends to infinity, so the improper integral diverges.   "
},
{
  "id": "ex-improper-interior-singularity",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-improper-interior-singularity",
  "type": "Example",
  "number": "5.5.8",
  "title": "An unbounded integrand inside the interval.",
  "body": " An unbounded integrand inside the interval   Determine whether   converges or diverges.    The integrand becomes unbounded at , so we split the integral:   Consider the first integral:   Therefore,   Since one of the two improper integrals diverges, the original integral diverges. We do not need to evaluate the second integral.   "
},
{
  "id": "rem-improper-split",
  "level": "2",
  "url": "sec-improper-integrals.html#rem-improper-split",
  "type": "Remark",
  "number": "5.5.9",
  "title": "Every improper piece must converge.",
  "body": " Every improper piece must converge  When an improper integral must be split into several integrals, every piece must converge for the original integral to converge. If even one piece diverges, the entire integral diverges.  "
},
{
  "id": "thm-comparison-improper",
  "level": "2",
  "url": "sec-improper-integrals.html#thm-comparison-improper",
  "type": "Theorem",
  "number": "5.5.10",
  "title": "Comparison Test.",
  "body": " Comparison Test   Suppose   If   converges, then   also converges.  Conversely, if   and   diverges, then   also diverges.   "
},
{
  "id": "ex-comparison-gaussian",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-comparison-gaussian",
  "type": "Example",
  "number": "5.5.11",
  "title": "Showing convergence by comparison.",
  "body": " Showing convergence by comparison   Determine whether   converges.    For ,   Therefore,   and taking reciprocals gives   We already know that   converges. Therefore, by comparison,   also converges.   "
},
{
  "id": "ex-comparison-divergence",
  "level": "2",
  "url": "sec-improper-integrals.html#ex-comparison-divergence",
  "type": "Example",
  "number": "5.5.12",
  "title": "Showing divergence by comparison.",
  "body": " Showing divergence by comparison   Show that   diverges.    For , we have   so   Therefore,   But   diverges. Hence, by comparison,   also diverges.   "
},
{
  "id": "sec-trig-integrals-sin-cos",
  "level": "1",
  "url": "sec-trig-integrals-sin-cos.html",
  "type": "Section",
  "number": "6.1",
  "title": "Powers of Sine and Cosine",
  "body": " Powers of Sine and Cosine  We now consider integrals of the form   The appropriate strategy depends on whether the powers and are odd or even.   Useful Trigonometric Identities  The Pythagorean identity is   This allows us to write   or   When both powers are even, the power-reduction identities are useful:      Case 1: The Power of Sine Is Odd  If the power of sine is odd, save one factor of . Convert the remaining even power of sine to cosine using   and then use the substitution .   An odd power of sine   Evaluate     Save one factor of :   Therefore,   Let   Then   Expanding,   Thus,   Substituting back,       Case 2: The Power of Cosine Is Odd  If the power of cosine is odd, save one factor of . Convert the remaining even power of cosine using   and then use .   An odd power of cosine   Evaluate     Write   Therefore,   Let   Then   Hence,       Case 3: Both Powers Are Even  If both powers are even, use the power-reduction identities to reduce the powers.   Even powers of sine and cosine   Evaluate     Use the power-reduction identities:   Therefore,   Apply the power-reduction identity again:   Hence,   Therefore,      If both powers are odd  If both powers are odd, either of the first two strategies can be used. It is often easiest to save a factor from the function having the smaller power.    "
},
{
  "id": "ex-trig-sine-odd",
  "level": "2",
  "url": "sec-trig-integrals-sin-cos.html#ex-trig-sine-odd",
  "type": "Example",
  "number": "6.1.1",
  "title": "An odd power of sine.",
  "body": " An odd power of sine   Evaluate     Save one factor of :   Therefore,   Let   Then   Expanding,   Thus,   Substituting back,    "
},
{
  "id": "ex-trig-cosine-odd",
  "level": "2",
  "url": "sec-trig-integrals-sin-cos.html#ex-trig-cosine-odd",
  "type": "Example",
  "number": "6.1.2",
  "title": "An odd power of cosine.",
  "body": " An odd power of cosine   Evaluate     Write   Therefore,   Let   Then   Hence,    "
},
{
  "id": "ex-trig-both-even",
  "level": "2",
  "url": "sec-trig-integrals-sin-cos.html#ex-trig-both-even",
  "type": "Example",
  "number": "6.1.3",
  "title": "Even powers of sine and cosine.",
  "body": " Even powers of sine and cosine   Evaluate     Use the power-reduction identities:   Therefore,   Apply the power-reduction identity again:   Hence,   Therefore,    "
},
{
  "id": "rem-both-odd",
  "level": "2",
  "url": "sec-trig-integrals-sin-cos.html#rem-both-odd",
  "type": "Remark",
  "number": "6.1.4",
  "title": "If both powers are odd.",
  "body": " If both powers are odd  If both powers are odd, either of the first two strategies can be used. It is often easiest to save a factor from the function having the smaller power.  "
},
{
  "id": "sec-trig-integrals-tan-sec",
  "level": "1",
  "url": "sec-trig-integrals-tan-sec.html",
  "type": "Section",
  "number": "6.2",
  "title": "Powers of Tangent and Secant",
  "body": " Powers of Tangent and Secant  We next consider integrals of the form   Two identities and two derivatives are particularly useful:      Case 1: The Power of Secant Is Even  If the power of secant is even, save one factor of and use   Convert the remaining powers of secant using .   An even power of secant   Evaluate     Save a factor of :   Since   let   The integral becomes   Expanding,   Hence,       Case 2: The Power of Tangent Is Odd  If the power of tangent is odd, save a factor of and use   Convert the remaining even powers of tangent using    An odd power of tangent   Evaluate     Save a factor of :   Use   and let   Then   Hence,      When both strategies apply  If the tangent power is odd and the secant power is even, either strategy may work. It is often faster to choose the substitution that removes the higher power.     When Neither Simple Strategy Applies  If the power of secant is odd while the power of tangent is even, neither of the simple substitution strategies applies directly.  For example,   Integrals involving odd powers of secant can require integration by parts.   "
},
{
  "id": "ex-secant-even",
  "level": "2",
  "url": "sec-trig-integrals-tan-sec.html#ex-secant-even",
  "type": "Example",
  "number": "6.2.1",
  "title": "An even power of secant.",
  "body": " An even power of secant   Evaluate     Save a factor of :   Since   let   The integral becomes   Expanding,   Hence,    "
},
{
  "id": "ex-tangent-odd",
  "level": "2",
  "url": "sec-trig-integrals-tan-sec.html#ex-tangent-odd",
  "type": "Example",
  "number": "6.2.2",
  "title": "An odd power of tangent.",
  "body": " An odd power of tangent   Evaluate     Save a factor of :   Use   and let   Then   Hence,    "
},
{
  "id": "rem-tan-sec-both",
  "level": "2",
  "url": "sec-trig-integrals-tan-sec.html#rem-tan-sec-both",
  "type": "Remark",
  "number": "6.2.3",
  "title": "When both strategies apply.",
  "body": " When both strategies apply  If the tangent power is odd and the secant power is even, either strategy may work. It is often faster to choose the substitution that removes the higher power.  "
},
{
  "id": "sec-trig-substitution",
  "level": "1",
  "url": "sec-trig-substitution.html",
  "type": "Section",
  "number": "6.3",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution  Some integrals containing square roots cannot be simplified by an ordinary substitution. Trigonometric substitutions are designed to use identities such as   and   to remove the square root.   Integrands Containing  For an expression containing   use the substitution   Then   We choose the range of so that the sign of is known.   A definite integral using trigonometric substitution   Evaluate     Let   The limits become    Also,   on this interval. Thus,   Using the power-reduction identity,   we obtain      An antiderivative involving inverse sine   Evaluate     Let   Then   on the chosen range. Therefore,   Since   we have   Hence,       Integrands Containing  For an expression containing   use   Then   A useful antiderivative is    A square root of   Evaluate     Let   Then   and   Therefore,   Hence,   From , a right triangle gives   Thus,       Integrands Containing  For an expression containing   use   Then    A square root of   Evaluate     Let   Then   and   Therefore,   Hence,   Since   and   the constant factor inside the logarithm can be absorbed into the constant of integration. Thus,      Rearranging before trigonometric substitution   Evaluate     First rewrite the square root:   Therefore,   Use   Following the same procedure as in the previous example gives       Choosing a Trigonometric Substitution  The three standard substitutions are:     Sometimes an expression must first be rearranged or factored before one of these forms becomes apparent.   A related tangent substitution   Evaluate     Rewrite   Use   Then   Therefore,   Since   we obtain      "
},
{
  "id": "ex-trig-sub-semicircle",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-semicircle",
  "type": "Example",
  "number": "6.3.1",
  "title": "A definite integral using trigonometric substitution.",
  "body": " A definite integral using trigonometric substitution   Evaluate     Let   The limits become    Also,   on this interval. Thus,   Using the power-reduction identity,   we obtain    "
},
{
  "id": "ex-trig-sub-inverse-sine",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-inverse-sine",
  "type": "Example",
  "number": "6.3.2",
  "title": "An antiderivative involving inverse sine.",
  "body": " An antiderivative involving inverse sine   Evaluate     Let   Then   on the chosen range. Therefore,   Since   we have   Hence,    "
},
{
  "id": "ex-trig-sub-plus",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-plus",
  "type": "Example",
  "number": "6.3.3",
  "title": "A square root of <span class=\"process-math\">\\(a^2+x^2\\)<\/span>.",
  "body": " A square root of   Evaluate     Let   Then   and   Therefore,   Hence,   From , a right triangle gives   Thus,    "
},
{
  "id": "ex-trig-sub-x2-minus",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-x2-minus",
  "type": "Example",
  "number": "6.3.4",
  "title": "A square root of <span class=\"process-math\">\\(x^2-a^2\\)<\/span>.",
  "body": " A square root of   Evaluate     Let   Then   and   Therefore,   Hence,   Since   and   the constant factor inside the logarithm can be absorbed into the constant of integration. Thus,    "
},
{
  "id": "ex-trig-sub-rearrange",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-rearrange",
  "type": "Example",
  "number": "6.3.5",
  "title": "Rearranging before trigonometric substitution.",
  "body": " Rearranging before trigonometric substitution   Evaluate     First rewrite the square root:   Therefore,   Use   Following the same procedure as in the previous example gives    "
},
{
  "id": "ex-trig-sub-arctan",
  "level": "2",
  "url": "sec-trig-substitution.html#ex-trig-sub-arctan",
  "type": "Example",
  "number": "6.3.6",
  "title": "A related tangent substitution.",
  "body": " A related tangent substitution   Evaluate     Rewrite   Use   Then   Therefore,   Since   we obtain    "
},
{
  "id": "sec-intro-de",
  "level": "1",
  "url": "sec-intro-de.html",
  "type": "Section",
  "number": "7.1",
  "title": "Introduction to Differential Equations",
  "body": " Introduction to Differential Equations  A differential equation is an equation that relates a function to one or more of its derivatives.  For example,   is a differential equation relating the unknown function to its derivative.   Solution of a Differential Equation   To solve a differential equation means to find a function that satisfies the equation.    We will consider three important types of first-order differential equations:    pure-time differential equations,    autonomous differential equations,    general separable differential equations.    "
},
{
  "id": "def-solution-de",
  "level": "2",
  "url": "sec-intro-de.html#def-solution-de",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Solution of a Differential Equation.",
  "body": " Solution of a Differential Equation   To solve a differential equation means to find a function that satisfies the equation.   "
},
{
  "id": "sec-pure-time-de",
  "level": "1",
  "url": "sec-pure-time-de.html",
  "type": "Section",
  "number": "7.2",
  "title": "Pure-Time Differential Equations",
  "body": " Pure-Time Differential Equations  A pure-time differential equation has the form   where the right-hand side depends only on time.  These equations can be solved directly by integration:    Cell volume   Suppose the volume of a cell changes according to   Find .    Integrating,   Apply the initial condition:   Hence , so     "
},
{
  "id": "ex-pure-time-cell-volume",
  "level": "2",
  "url": "sec-pure-time-de.html#ex-pure-time-cell-volume",
  "type": "Example",
  "number": "7.2.1",
  "title": "Cell volume.",
  "body": " Cell volume   Suppose the volume of a cell changes according to   Find .    Integrating,   Apply the initial condition:   Hence , so    "
},
{
  "id": "sec-autonomous-de",
  "level": "1",
  "url": "sec-autonomous-de.html",
  "type": "Section",
  "number": "7.3",
  "title": "Autonomous Differential Equations",
  "body": " Autonomous Differential Equations  An autonomous differential equation has the form   where the rate of change depends only on the current state , not explicitly on time.  If the equation can be rearranged so that all terms involving are on one side and all terms involving are on the other, we can solve it by separation of variables.   Integrating both sides gives    Exponential growth and decay   Suppose a population satisfies   Find .    Separate variables:   Integrating,   Exponentiating,   Absorb the sign and the factor into a single constant :   Using ,   Therefore,      Growth and decay  In the model :    if , the population grows exponentially;    if , the population remains constant;    if , the population decays exponentially.      Von Bertalanffy growth model   Suppose the length of a fish satisfies   where . Find .    Separate variables:   Integrating,   Rearranging and exponentiating gives   Absorbing the sign into the constant,   Apply the initial condition:   so . Therefore,     "
},
{
  "id": "ex-exponential-growth",
  "level": "2",
  "url": "sec-autonomous-de.html#ex-exponential-growth",
  "type": "Example",
  "number": "7.3.1",
  "title": "Exponential growth and decay.",
  "body": " Exponential growth and decay   Suppose a population satisfies   Find .    Separate variables:   Integrating,   Exponentiating,   Absorb the sign and the factor into a single constant :   Using ,   Therefore,    "
},
{
  "id": "rem-exp-growth-decay",
  "level": "2",
  "url": "sec-autonomous-de.html#rem-exp-growth-decay",
  "type": "Remark",
  "number": "7.3.2",
  "title": "Growth and decay.",
  "body": " Growth and decay  In the model :    if , the population grows exponentially;    if , the population remains constant;    if , the population decays exponentially.    "
},
{
  "id": "ex-von-bertalanffy",
  "level": "2",
  "url": "sec-autonomous-de.html#ex-von-bertalanffy",
  "type": "Example",
  "number": "7.3.3",
  "title": "Von Bertalanffy growth model.",
  "body": " Von Bertalanffy growth model   Suppose the length of a fish satisfies   where . Find .    Separate variables:   Integrating,   Rearranging and exponentiating gives   Absorbing the sign into the constant,   Apply the initial condition:   so . Therefore,    "
},
{
  "id": "sec-separable-de",
  "level": "1",
  "url": "sec-separable-de.html",
  "type": "Section",
  "number": "7.4",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations  A general separable differential equation has the form   The right-hand side is a product of a function of time and a function of the state variable.  Rearranging,   We then integrate both sides.   A general separable equation   Solve     Separate variables:   Rewrite   Integrating,   Exponentiating,   Absorbing constants and signs into a constant ,   Since ,   Therefore,      Cell division with a circadian rhythm   Suppose the number of cells satisfies   Find .    Separate variables:   Integrating,   Therefore,   Applying gives   Hence,     "
},
{
  "id": "ex-general-separable",
  "level": "2",
  "url": "sec-separable-de.html#ex-general-separable",
  "type": "Example",
  "number": "7.4.1",
  "title": "A general separable equation.",
  "body": " A general separable equation   Solve     Separate variables:   Rewrite   Integrating,   Exponentiating,   Absorbing constants and signs into a constant ,   Since ,   Therefore,    "
},
{
  "id": "ex-periodic-cell-growth",
  "level": "2",
  "url": "sec-separable-de.html#ex-periodic-cell-growth",
  "type": "Example",
  "number": "7.4.2",
  "title": "Cell division with a circadian rhythm.",
  "body": " Cell division with a circadian rhythm   Suppose the number of cells satisfies   Find .    Separate variables:   Integrating,   Therefore,   Applying gives   Hence,    "
},
{
  "id": "sec-equilibria-stability",
  "level": "1",
  "url": "sec-equilibria-stability.html",
  "type": "Section",
  "number": "7.5",
  "title": "Equilibria and Stability",
  "body": " Equilibria and Stability  For an autonomous differential equation   an equilibrium is a state at which the solution does not change with time.   Equilibrium   A value is an equilibrium if   The corresponding solution is constant:      Finding equilibria   Find all equilibria of     Set the right-hand side equal to zero:   Factor:   Therefore, the equilibria are      Stable and Unstable Equilibria   An equilibrium is stable if nearby solutions move toward it.  An equilibrium is unstable if nearby solutions move away from it.    Stability can often be determined without solving the differential equation. We examine the sign of .    If , then , so increases.    If , then , so decreases.     Stability in a bacterial population model   Consider   Find the equilibria and determine their stability.    The equilibria satisfy   Hence,   For ,   so solutions move to the right, toward .  For ,   so solutions move to the left, again toward .  Thus, is stable.  Near , solutions move away from zero, so is unstable.     Carrying capacity  In a population model, a stable positive equilibrium is often interpreted as the carrying capacity of the environment.    A model with an Allee threshold   Consider   Find the equilibria and determine their stability.    The equilibria satisfy   Therefore,   Examining the sign of the right-hand side on the intervals separated by these equilibria shows that    is stable,    is unstable,    is stable.    The unstable equilibrium acts as a threshold: populations below it tend toward extinction, while populations above it tend toward the positive stable equilibrium.    "
},
{
  "id": "def-equilibrium",
  "level": "2",
  "url": "sec-equilibria-stability.html#def-equilibrium",
  "type": "Definition",
  "number": "7.5.1",
  "title": "Equilibrium.",
  "body": " Equilibrium   A value is an equilibrium if   The corresponding solution is constant:    "
},
{
  "id": "ex-find-equilibria",
  "level": "2",
  "url": "sec-equilibria-stability.html#ex-find-equilibria",
  "type": "Example",
  "number": "7.5.2",
  "title": "Finding equilibria.",
  "body": " Finding equilibria   Find all equilibria of     Set the right-hand side equal to zero:   Factor:   Therefore, the equilibria are    "
},
{
  "id": "def-stability",
  "level": "2",
  "url": "sec-equilibria-stability.html#def-stability",
  "type": "Definition",
  "number": "7.5.3",
  "title": "Stable and Unstable Equilibria.",
  "body": " Stable and Unstable Equilibria   An equilibrium is stable if nearby solutions move toward it.  An equilibrium is unstable if nearby solutions move away from it.   "
},
{
  "id": "ex-logistic-stability",
  "level": "2",
  "url": "sec-equilibria-stability.html#ex-logistic-stability",
  "type": "Example",
  "number": "7.5.4",
  "title": "Stability in a bacterial population model.",
  "body": " Stability in a bacterial population model   Consider   Find the equilibria and determine their stability.    The equilibria satisfy   Hence,   For ,   so solutions move to the right, toward .  For ,   so solutions move to the left, again toward .  Thus, is stable.  Near , solutions move away from zero, so is unstable.   "
},
{
  "id": "rem-carrying-capacity",
  "level": "2",
  "url": "sec-equilibria-stability.html#rem-carrying-capacity",
  "type": "Remark",
  "number": "7.5.5",
  "title": "Carrying capacity.",
  "body": " Carrying capacity  In a population model, a stable positive equilibrium is often interpreted as the carrying capacity of the environment.  "
},
{
  "id": "ex-allee-effect",
  "level": "2",
  "url": "sec-equilibria-stability.html#ex-allee-effect",
  "type": "Example",
  "number": "7.5.6",
  "title": "A model with an Allee threshold.",
  "body": " A model with an Allee threshold   Consider   Find the equilibria and determine their stability.    The equilibria satisfy   Therefore,   Examining the sign of the right-hand side on the intervals separated by these equilibria shows that    is stable,    is unstable,    is stable.    The unstable equilibrium acts as a threshold: populations below it tend toward extinction, while populations above it tend toward the positive stable equilibrium.   "
},
{
  "id": "sec-eigenvalue-method",
  "level": "1",
  "url": "sec-eigenvalue-method.html",
  "type": "Section",
  "number": "7.6",
  "title": "The Derivative Test for Stability",
  "body": " The Derivative Test for Stability  There is also a non-graphical way to determine the stability of an equilibrium.  Suppose   and is an equilibrium, so .   Derivative Test for Stability   Let be an equilibrium of .    If , then is stable.    If , then is unstable.    If , the test is inconclusive.       Eigenvalue  In this one-dimensional setting, the quantity is often referred to as the eigenvalue of the equilibrium.    Using the derivative test   Determine the stability of the equilibria of     Let   Then   At ,   so is unstable.  At ,   so is stable.    "
},
{
  "id": "thm-stability-derivative",
  "level": "2",
  "url": "sec-eigenvalue-method.html#thm-stability-derivative",
  "type": "Theorem",
  "number": "7.6.1",
  "title": "Derivative Test for Stability.",
  "body": " Derivative Test for Stability   Let be an equilibrium of .    If , then is stable.    If , then is unstable.    If , the test is inconclusive.     "
},
{
  "id": "rem-eigenvalue-name",
  "level": "2",
  "url": "sec-eigenvalue-method.html#rem-eigenvalue-name",
  "type": "Remark",
  "number": "7.6.2",
  "title": "Eigenvalue.",
  "body": " Eigenvalue  In this one-dimensional setting, the quantity is often referred to as the eigenvalue of the equilibrium.  "
},
{
  "id": "ex-eigenvalue-logistic",
  "level": "2",
  "url": "sec-eigenvalue-method.html#ex-eigenvalue-logistic",
  "type": "Example",
  "number": "7.6.3",
  "title": "Using the derivative test.",
  "body": " Using the derivative test   Determine the stability of the equilibria of     Let   Then   At ,   so is unstable.  At ,   so is stable.   "
},
{
  "id": "sec-long-term-behavior",
  "level": "1",
  "url": "sec-long-term-behavior.html",
  "type": "Section",
  "number": "7.7",
  "title": "Long-Term Behavior",
  "body": " Long-Term Behavior  Once the equilibria and their stability are known, we can often determine the long-term behavior of a solution without explicitly solving the differential equation.   Long-term behavior from stability   Consider   Determine the long-term behavior for several initial conditions.    The equilibrium is stable, while is unstable.  If   then the solution increases toward , so   If   then the solution decreases toward , so again   If a mathematically possible initial condition satisfies , the vector field points away from zero toward more negative values, so the solution does not approach the positive equilibrium.    "
},
{
  "id": "ex-long-term-logistic",
  "level": "2",
  "url": "sec-long-term-behavior.html#ex-long-term-logistic",
  "type": "Example",
  "number": "7.7.1",
  "title": "Long-term behavior from stability.",
  "body": " Long-term behavior from stability   Consider   Determine the long-term behavior for several initial conditions.    The equilibrium is stable, while is unstable.  If   then the solution increases toward , so   If   then the solution decreases toward , so again   If a mathematically possible initial condition satisfies , the vector field points away from zero toward more negative values, so the solution does not approach the positive equilibrium.   "
},
{
  "id": "sec-de-models",
  "level": "1",
  "url": "sec-de-models.html",
  "type": "Section",
  "number": "7.8",
  "title": "Applications of Differential Equations",
  "body": " Applications of Differential Equations  Differential equations provide models for many biological processes. The main task is often to translate a verbal description of rates into an equation and then interpret the resulting solution.   A fish population with restocking and mortality   Let be the fish population in a pond. Suppose fish are added at a constant rate and die at a rate proportional to the current population, with constant . Then   Find .    Separate variables:   Integrating,   Rearranging,   Exponentiating and absorbing constants,   Thus,   Apply :   so . Therefore,     "
},
{
  "id": "ex-fish-restocking",
  "level": "2",
  "url": "sec-de-models.html#ex-fish-restocking",
  "type": "Example",
  "number": "7.8.1",
  "title": "A fish population with restocking and mortality.",
  "body": " A fish population with restocking and mortality   Let be the fish population in a pond. Suppose fish are added at a constant rate and die at a rate proportional to the current population, with constant . Then   Find .    Separate variables:   Integrating,   Rearranging,   Exponentiating and absorbing constants,   Thus,   Apply :   so . Therefore,    "
},
{
  "id": "formula-basic-derivatives",
  "level": "1",
  "url": "formula-basic-derivatives.html",
  "type": "Section",
  "number": "A.1",
  "title": "Basic Derivatives",
  "body": " Basic Derivatives   "
},
{
  "id": "formula-trig-values",
  "level": "1",
  "url": "formula-trig-values.html",
  "type": "Section",
  "number": "A.2",
  "title": "Trigonometric Values in Radians",
  "body": " Trigonometric Values in Radians   Common Sine and Cosine Values                                                                                             "
},
{
  "id": "formula-trig-values-2",
  "level": "2",
  "url": "formula-trig-values.html#formula-trig-values-2",
  "type": "Table",
  "number": "A.2.1",
  "title": "Common Sine and Cosine Values",
  "body": " Common Sine and Cosine Values                                                                                            "
},
{
  "id": "formula-trig-identities",
  "level": "1",
  "url": "formula-trig-identities.html",
  "type": "Section",
  "number": "A.3",
  "title": "Trigonometric Identities",
  "body": " Trigonometric Identities    "
},
{
  "id": "formula-double-angle",
  "level": "1",
  "url": "formula-double-angle.html",
  "type": "Section",
  "number": "A.4",
  "title": "Double-Angle Formulas and Variants",
  "body": " Double-Angle Formulas and Variants   "
},
{
  "id": "formula-exponent-rules",
  "level": "1",
  "url": "formula-exponent-rules.html",
  "type": "Section",
  "number": "A.5",
  "title": "Exponent Rules",
  "body": " Exponent Rules   "
},
{
  "id": "formula-log-rules",
  "level": "1",
  "url": "formula-log-rules.html",
  "type": "Section",
  "number": "A.6",
  "title": "Logarithm Rules",
  "body": " Logarithm Rules   "
},
{
  "id": "practice-antiderivatives",
  "level": "1",
  "url": "practice-antiderivatives.html",
  "type": "Section",
  "number": "B.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives   Finding an Antiderivative   Given the function answer the following questions.     Find the general antiderivative such that .    Integrating each term separately gives   Therefore, the general antiderivative is       Find the particular antiderivative that satisfies .    Substituting into the general antiderivative gives   Since , we obtain . Therefore,      "
},
{
  "id": "practice-antiderivatives-1",
  "level": "2",
  "url": "practice-antiderivatives.html#practice-antiderivatives-1",
  "type": "Practice Problem",
  "number": "B.1.1",
  "title": "Finding an Antiderivative.",
  "body": " Finding an Antiderivative   Given the function answer the following questions.     Find the general antiderivative such that .    Integrating each term separately gives   Therefore, the general antiderivative is       Find the particular antiderivative that satisfies .    Substituting into the general antiderivative gives   Since , we obtain . Therefore,     "
},
{
  "id": "practice-definite-integrals",
  "level": "1",
  "url": "practice-definite-integrals.html",
  "type": "Section",
  "number": "B.2",
  "title": "Definite Integrals",
  "body": " Definite Integrals   Approximating and Evaluating a Definite Integral   Let .     Approximate using a midpoint Riemann sum with equal subintervals. Give your answer in exact form.    The width of each subinterval is , and the midpoints are   Therefore, the midpoint sum is   The cosine terms cancel, so       Apply Part II of the Fundamental Theorem of Calculus to evaluate exactly.    An antiderivative of is . Therefore,       Evaluating an Integral Geometrically   Evaluate . Explain how the geometry of the graph allows you to determine the value of the integral.    The graph is the upper semicircle of the circle , which has radius .  Therefore, the integral is the area of a semicircle of radius :     "
},
{
  "id": "practice-definite-integrals-1",
  "level": "2",
  "url": "practice-definite-integrals.html#practice-definite-integrals-1",
  "type": "Practice Problem",
  "number": "B.2.1",
  "title": "Approximating and Evaluating a Definite Integral.",
  "body": " Approximating and Evaluating a Definite Integral   Let .     Approximate using a midpoint Riemann sum with equal subintervals. Give your answer in exact form.    The width of each subinterval is , and the midpoints are   Therefore, the midpoint sum is   The cosine terms cancel, so       Apply Part II of the Fundamental Theorem of Calculus to evaluate exactly.    An antiderivative of is . Therefore,     "
},
{
  "id": "practice-definite-integrals-2",
  "level": "2",
  "url": "practice-definite-integrals.html#practice-definite-integrals-2",
  "type": "Practice Problem",
  "number": "B.2.2",
  "title": "Evaluating an Integral Geometrically.",
  "body": " Evaluating an Integral Geometrically   Evaluate . Explain how the geometry of the graph allows you to determine the value of the integral.    The graph is the upper semicircle of the circle , which has radius .  Therefore, the integral is the area of a semicircle of radius :    "
},
{
  "id": "practice-fundamental-theorem",
  "level": "1",
  "url": "practice-fundamental-theorem.html",
  "type": "Section",
  "number": "B.3",
  "title": "Fundamental Theorem of Calculus",
  "body": " Fundamental Theorem of Calculus   Differentiating an Integral   Use the Fundamental Theorem of Calculus and the chain rule to determine for each function.          By the Fundamental Theorem of Calculus and the chain rule,            Since the variable limit is the lower limit, the Fundamental Theorem of Calculus gives      "
},
{
  "id": "practice-ftc-1",
  "level": "2",
  "url": "practice-fundamental-theorem.html#practice-ftc-1",
  "type": "Practice Problem",
  "number": "B.3.1",
  "title": "Differentiating an Integral.",
  "body": " Differentiating an Integral   Use the Fundamental Theorem of Calculus and the chain rule to determine for each function.          By the Fundamental Theorem of Calculus and the chain rule,            Since the variable limit is the lower limit, the Fundamental Theorem of Calculus gives     "
},
{
  "id": "practice-substitution",
  "level": "1",
  "url": "practice-substitution.html",
  "type": "Section",
  "number": "B.4",
  "title": "Integration by Substitution",
  "body": " Integration by Substitution   Substitution   Evaluate each integral using an appropriate substitution.     Evaluate .    Let , so . Then   Therefore,       Evaluate .    Let , so . The limits become and .      "
},
{
  "id": "practice-substitution-1",
  "level": "2",
  "url": "practice-substitution.html#practice-substitution-1",
  "type": "Practice Problem",
  "number": "B.4.1",
  "title": "Substitution.",
  "body": " Substitution   Evaluate each integral using an appropriate substitution.     Evaluate .    Let , so . Then   Therefore,       Evaluate .    Let , so . The limits become and .     "
},
{
  "id": "practice-integration-by-parts",
  "level": "1",
  "url": "practice-integration-by-parts.html",
  "type": "Section",
  "number": "B.5",
  "title": "Integration by Parts",
  "body": " Integration by Parts   Basic Integration by Parts   Evaluate .    Take and . Then and .      A Definite Integral   Evaluate .    Using integration by parts with and ,   Hence,      Substitution Followed by Integration by Parts   Make an appropriate substitution and then use integration by parts to evaluate .    Let , so . Then the integral becomes . Integration by parts gives   Therefore,     "
},
{
  "id": "practice-integration-by-parts-1",
  "level": "2",
  "url": "practice-integration-by-parts.html#practice-integration-by-parts-1",
  "type": "Practice Problem",
  "number": "B.5.1",
  "title": "Basic Integration by Parts.",
  "body": " Basic Integration by Parts   Evaluate .    Take and . Then and .    "
},
{
  "id": "practice-integration-by-parts-2",
  "level": "2",
  "url": "practice-integration-by-parts.html#practice-integration-by-parts-2",
  "type": "Practice Problem",
  "number": "B.5.2",
  "title": "A Definite Integral.",
  "body": " A Definite Integral   Evaluate .    Using integration by parts with and ,   Hence,    "
},
{
  "id": "practice-integration-by-parts-3",
  "level": "2",
  "url": "practice-integration-by-parts.html#practice-integration-by-parts-3",
  "type": "Practice Problem",
  "number": "B.5.3",
  "title": "Substitution Followed by Integration by Parts.",
  "body": " Substitution Followed by Integration by Parts   Make an appropriate substitution and then use integration by parts to evaluate .    Let , so . Then the integral becomes . Integration by parts gives   Therefore,    "
},
{
  "id": "practice-partial-fractions",
  "level": "1",
  "url": "practice-partial-fractions.html",
  "type": "Section",
  "number": "B.6",
  "title": "Partial Fractions",
  "body": " Partial Fractions   Distinct Linear Factors   Consider the rational function      Find the partial fraction decomposition of .    Write   Then . Setting gives , and setting gives .       Evaluate .         Repeated Linear Factors   Consider the rational function      Find the partial fraction decomposition of .    Write   Comparing coefficients in gives and .       Evaluate .        "
},
{
  "id": "practice-partial-fractions-1",
  "level": "2",
  "url": "practice-partial-fractions.html#practice-partial-fractions-1",
  "type": "Practice Problem",
  "number": "B.6.1",
  "title": "Distinct Linear Factors.",
  "body": " Distinct Linear Factors   Consider the rational function      Find the partial fraction decomposition of .    Write   Then . Setting gives , and setting gives .       Evaluate .       "
},
{
  "id": "practice-partial-fractions-2",
  "level": "2",
  "url": "practice-partial-fractions.html#practice-partial-fractions-2",
  "type": "Practice Problem",
  "number": "B.6.2",
  "title": "Repeated Linear Factors.",
  "body": " Repeated Linear Factors   Consider the rational function      Find the partial fraction decomposition of .    Write   Comparing coefficients in gives and .       Evaluate .       "
},
{
  "id": "practice-improper-integrals",
  "level": "1",
  "url": "practice-improper-integrals.html",
  "type": "Section",
  "number": "B.7",
  "title": "Improper Integrals",
  "body": " Improper Integrals   Convergence and Divergence   Determine whether each improper integral converges or diverges. If an integral converges, determine its value.     Determine the convergence of     The integrand is unbounded at , so write   Since an antiderivative is ,   Therefore, the improper integral diverges.      Determine the convergence of     Let , so . Then   Hence the integral converges to .      Epidemic Model   The rate at which people get sick during an epidemic of the flu can be approximated by   where is measured in people per day and is measured in days since the start of the epidemic. How many people get sick throughout the entire epidemic?    The total number of people who become sick is   Integration by parts gives   Therefore,   Thus, the model predicts that people become sick.     Photon Detection   After a short laser pulse, the rate at which photons are detected by a sensor is modeled by   where is measured in photons per microsecond and is measured in microseconds since the pulse. How many total photons are detected over all time?    The total number of detected photons is   Hence,   Therefore, a total of photons are detected.    "
},
{
  "id": "practice-improper-integrals-1",
  "level": "2",
  "url": "practice-improper-integrals.html#practice-improper-integrals-1",
  "type": "Practice Problem",
  "number": "B.7.1",
  "title": "Convergence and Divergence.",
  "body": " Convergence and Divergence   Determine whether each improper integral converges or diverges. If an integral converges, determine its value.     Determine the convergence of     The integrand is unbounded at , so write   Since an antiderivative is ,   Therefore, the improper integral diverges.      Determine the convergence of     Let , so . Then   Hence the integral converges to .    "
},
{
  "id": "practice-improper-integrals-2",
  "level": "2",
  "url": "practice-improper-integrals.html#practice-improper-integrals-2",
  "type": "Practice Problem",
  "number": "B.7.2",
  "title": "Epidemic Model.",
  "body": " Epidemic Model   The rate at which people get sick during an epidemic of the flu can be approximated by   where is measured in people per day and is measured in days since the start of the epidemic. How many people get sick throughout the entire epidemic?    The total number of people who become sick is   Integration by parts gives   Therefore,   Thus, the model predicts that people become sick.   "
},
{
  "id": "practice-improper-integrals-3",
  "level": "2",
  "url": "practice-improper-integrals.html#practice-improper-integrals-3",
  "type": "Practice Problem",
  "number": "B.7.3",
  "title": "Photon Detection.",
  "body": " Photon Detection   After a short laser pulse, the rate at which photons are detected by a sensor is modeled by   where is measured in photons per microsecond and is measured in microseconds since the pulse. How many total photons are detected over all time?    The total number of detected photons is   Hence,   Therefore, a total of photons are detected.   "
},
{
  "id": "practice-area-between-curves",
  "level": "1",
  "url": "practice-area-between-curves.html",
  "type": "Section",
  "number": "B.8",
  "title": "Area Between Curves",
  "body": " Area Between Curves   Area of a Bounded Region   Set up and evaluate an integral to find the area of the region bounded by and . Sketch the region.    The curves intersect where   Thus,   so the intersection points occur at and . Between these points, the line lies above the parabola .  Therefore, the area is   Evaluating,   Thus, the area of the bounded region is square units.    "
},
{
  "id": "practice-area-between-curves-1",
  "level": "2",
  "url": "practice-area-between-curves.html#practice-area-between-curves-1",
  "type": "Practice Problem",
  "number": "B.8.1",
  "title": "Area of a Bounded Region.",
  "body": " Area of a Bounded Region   Set up and evaluate an integral to find the area of the region bounded by and . Sketch the region.    The curves intersect where   Thus,   so the intersection points occur at and . Between these points, the line lies above the parabola .  Therefore, the area is   Evaluating,   Thus, the area of the bounded region is square units.   "
},
{
  "id": "practice-applications-integrals",
  "level": "1",
  "url": "practice-applications-integrals.html",
  "type": "Section",
  "number": "B.9",
  "title": "Applications of Integration",
  "body": " Applications of Integration   Oxygen Consumption   A fish consumes oxygen at a rate that decreases over time as it becomes less active. The rate of oxygen consumption, in milligrams per minute, is modeled by   where is the time in minutes since the fish was placed in a respirometer.     How much total oxygen, in milligrams, does the fish consume during the first 10 minutes?    The total oxygen consumed is the integral of the rate:   Therefore,       Use your answer from the previous part to compute the average rate of oxygen consumption during the first 10 minutes. Include units in your answer.    The average rate is the total oxygen consumed divided by the elapsed time:       Fish Growth   The von Bertalanffy growth model predicts that the growth rate of a fish that is born with a length of 2 centimeters and has a maximum length of 12 centimeters is   where is the age of the fish in years.     How much does the fish grow during its first year of life? Include units.    The amount of growth during the first year is       Let be the length of the fish at years of age. Find in exact form.    Since the fish is born with length cm, its length at time is its initial length plus its accumulated growth:   Thus,       What is the average length of the fish over its first four years of life? Include units in your answer.    The average value of on is   Therefore,      "
},
{
  "id": "practice-applications-integrals-1",
  "level": "2",
  "url": "practice-applications-integrals.html#practice-applications-integrals-1",
  "type": "Practice Problem",
  "number": "B.9.1",
  "title": "Oxygen Consumption.",
  "body": " Oxygen Consumption   A fish consumes oxygen at a rate that decreases over time as it becomes less active. The rate of oxygen consumption, in milligrams per minute, is modeled by   where is the time in minutes since the fish was placed in a respirometer.     How much total oxygen, in milligrams, does the fish consume during the first 10 minutes?    The total oxygen consumed is the integral of the rate:   Therefore,       Use your answer from the previous part to compute the average rate of oxygen consumption during the first 10 minutes. Include units in your answer.    The average rate is the total oxygen consumed divided by the elapsed time:     "
},
{
  "id": "practice-applications-integrals-2",
  "level": "2",
  "url": "practice-applications-integrals.html#practice-applications-integrals-2",
  "type": "Practice Problem",
  "number": "B.9.2",
  "title": "Fish Growth.",
  "body": " Fish Growth   The von Bertalanffy growth model predicts that the growth rate of a fish that is born with a length of 2 centimeters and has a maximum length of 12 centimeters is   where is the age of the fish in years.     How much does the fish grow during its first year of life? Include units.    The amount of growth during the first year is       Let be the length of the fish at years of age. Find in exact form.    Since the fish is born with length cm, its length at time is its initial length plus its accumulated growth:   Thus,       What is the average length of the fish over its first four years of life? Include units in your answer.    The average value of on is   Therefore,     "
},
{
  "id": "practice-trig-integrals",
  "level": "1",
  "url": "practice-trig-integrals.html",
  "type": "Section",
  "number": "B.10",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals   Powers of Sine and Cosine   Evaluate the integral using an appropriate substitution:     Write and let , so . Then   Expanding and integrating gives   Therefore,      Powers of Tangent and Secant   Evaluate the integral using an appropriate substitution:     Write and use . Let , so .   Hence,   Therefore,     "
},
{
  "id": "practice-trig-integrals-1",
  "level": "2",
  "url": "practice-trig-integrals.html#practice-trig-integrals-1",
  "type": "Practice Problem",
  "number": "B.10.1",
  "title": "Powers of Sine and Cosine.",
  "body": " Powers of Sine and Cosine   Evaluate the integral using an appropriate substitution:     Write and let , so . Then   Expanding and integrating gives   Therefore,    "
},
{
  "id": "practice-trig-integrals-2",
  "level": "2",
  "url": "practice-trig-integrals.html#practice-trig-integrals-2",
  "type": "Practice Problem",
  "number": "B.10.2",
  "title": "Powers of Tangent and Secant.",
  "body": " Powers of Tangent and Secant   Evaluate the integral using an appropriate substitution:     Write and use . Let , so .   Hence,   Therefore,    "
},
{
  "id": "practice-trig-substitution",
  "level": "1",
  "url": "practice-trig-substitution.html",
  "type": "Section",
  "number": "B.11",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution   Square Root of a Difference   Evaluate the integral using an appropriate trigonometric substitution:     Let . Then and .   Since ,      Quadratic Sum   Evaluate the integral using an appropriate trigonometric substitution:     Let . Then and .   Since ,      Square Root of a Difference of Squares   Evaluate the integral using an appropriate trigonometric substitution:   You may use the fact that     Let . Then and .   Using and ,     "
},
{
  "id": "practice-trig-substitution-1",
  "level": "2",
  "url": "practice-trig-substitution.html#practice-trig-substitution-1",
  "type": "Practice Problem",
  "number": "B.11.1",
  "title": "Square Root of a Difference.",
  "body": " Square Root of a Difference   Evaluate the integral using an appropriate trigonometric substitution:     Let . Then and .   Since ,    "
},
{
  "id": "practice-trig-substitution-2",
  "level": "2",
  "url": "practice-trig-substitution.html#practice-trig-substitution-2",
  "type": "Practice Problem",
  "number": "B.11.2",
  "title": "Quadratic Sum.",
  "body": " Quadratic Sum   Evaluate the integral using an appropriate trigonometric substitution:     Let . Then and .   Since ,    "
},
{
  "id": "practice-trig-substitution-3",
  "level": "2",
  "url": "practice-trig-substitution.html#practice-trig-substitution-3",
  "type": "Practice Problem",
  "number": "B.11.3",
  "title": "Square Root of a Difference of Squares.",
  "body": " Square Root of a Difference of Squares   Evaluate the integral using an appropriate trigonometric substitution:   You may use the fact that     Let . Then and .   Using and ,    "
},
{
  "id": "practice-differential-equations",
  "level": "1",
  "url": "practice-differential-equations.html",
  "type": "Section",
  "number": "B.12",
  "title": "Differential Equations",
  "body": " Differential Equations   Equilibria and Stability   Consider the differential equation      Find all equilibria. By calculating the eigenvalue at each equilibrium, determine which equilibria are stable and which are unstable.    Equilibria satisfy , so   Hence the equilibria are . Let . Then .  Since , , and , the equilibria and are stable, while is unstable.      Sketch the phase line for the differential equation. Use it to verify your stability classifications.    The sign of is positive for and , and negative for and . Thus the arrows point toward and away from , confirming the stability classifications.      Given the initial condition , determine . You do not need to solve the differential equation.         Given the initial condition , determine . You do not need to solve the differential equation.         The Logistic Model   The logistic model for population growth is   where is the per-capita growth rate and is the carrying capacity.     Find all equilibria of the model. By calculating the eigenvalue at each equilibrium, determine which equilibria are stable and which are unstable.    The equilibria satisfy   so and . Let . Then   Since , is unstable. Since , is stable.      Sketch the phase line for the differential equation. Use it to verify your stability classifications.    For , the growth rate is positive, while for , it is negative. Thus solutions move away from and toward .      Given the initial condition , determine . You do not need to solve the differential equation.         Given the initial condition , determine . You do not need to solve the differential equation.         Nutrient Dynamics in a Lake   A lake receives nutrient runoff from nearby farmland at a constant rate. The mass of nutrient in the lake at time , denoted and measured in kilograms, satisfies   where is the rate at which nutrient enters the lake, measured in kilograms per year, and is the fraction of nutrient removed from the lake per year.     Assuming , solve the differential equation to find .    Separating variables gives   Integrating yields   Solving for and using gives       Find .         Suppose nutrient enters the lake at a rate of kilograms per year and that kilograms as . Calculate and include units.    Since the limiting mass is ,   Therefore,       von Bertalanffy Fish Growth   Let denote the length of a fish at time . Suppose the fish grows according to      Solve the differential equation.    Separating variables gives   Integrating and solving for gives   Using gives , so       Use your solution to determine under the assumption that .    Substituting gives   Thus , and therefore       Find the asymptotic length of the fish; that is, determine .        "
},
{
  "id": "practice-differential-equations-1",
  "level": "2",
  "url": "practice-differential-equations.html#practice-differential-equations-1",
  "type": "Practice Problem",
  "number": "B.12.1",
  "title": "Equilibria and Stability.",
  "body": " Equilibria and Stability   Consider the differential equation      Find all equilibria. By calculating the eigenvalue at each equilibrium, determine which equilibria are stable and which are unstable.    Equilibria satisfy , so   Hence the equilibria are . Let . Then .  Since , , and , the equilibria and are stable, while is unstable.      Sketch the phase line for the differential equation. Use it to verify your stability classifications.    The sign of is positive for and , and negative for and . Thus the arrows point toward and away from , confirming the stability classifications.      Given the initial condition , determine . You do not need to solve the differential equation.         Given the initial condition , determine . You do not need to solve the differential equation.       "
},
{
  "id": "practice-differential-equations-2",
  "level": "2",
  "url": "practice-differential-equations.html#practice-differential-equations-2",
  "type": "Practice Problem",
  "number": "B.12.2",
  "title": "The Logistic Model.",
  "body": " The Logistic Model   The logistic model for population growth is   where is the per-capita growth rate and is the carrying capacity.     Find all equilibria of the model. By calculating the eigenvalue at each equilibrium, determine which equilibria are stable and which are unstable.    The equilibria satisfy   so and . Let . Then   Since , is unstable. Since , is stable.      Sketch the phase line for the differential equation. Use it to verify your stability classifications.    For , the growth rate is positive, while for , it is negative. Thus solutions move away from and toward .      Given the initial condition , determine . You do not need to solve the differential equation.         Given the initial condition , determine . You do not need to solve the differential equation.       "
},
{
  "id": "practice-differential-equations-3",
  "level": "2",
  "url": "practice-differential-equations.html#practice-differential-equations-3",
  "type": "Practice Problem",
  "number": "B.12.3",
  "title": "Nutrient Dynamics in a Lake.",
  "body": " Nutrient Dynamics in a Lake   A lake receives nutrient runoff from nearby farmland at a constant rate. The mass of nutrient in the lake at time , denoted and measured in kilograms, satisfies   where is the rate at which nutrient enters the lake, measured in kilograms per year, and is the fraction of nutrient removed from the lake per year.     Assuming , solve the differential equation to find .    Separating variables gives   Integrating yields   Solving for and using gives       Find .         Suppose nutrient enters the lake at a rate of kilograms per year and that kilograms as . Calculate and include units.    Since the limiting mass is ,   Therefore,     "
},
{
  "id": "practice-differential-equations-4",
  "level": "2",
  "url": "practice-differential-equations.html#practice-differential-equations-4",
  "type": "Practice Problem",
  "number": "B.12.4",
  "title": "von Bertalanffy Fish Growth.",
  "body": " von Bertalanffy Fish Growth   Let denote the length of a fish at time . Suppose the fish grows according to      Solve the differential equation.    Separating variables gives   Integrating and solving for gives   Using gives , so       Use your solution to determine under the assumption that .    Substituting gives   Thus , and therefore       Find the asymptotic length of the fish; that is, determine .       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
