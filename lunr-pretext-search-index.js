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
  "body": " Learning Outcomes  Textbooks:    Calculus for Biology and Medicine by Neuhauser and Roper, 4th edition (2018)     by Hartman (Sections 6.3 and 6.4)      5.10 Antiderivatives     Find general antiderivatives of trigonometric, exponential, and power functions.    Find general antiderivatives of simple composite functions.    Solve initial value problems.       6.1 The Definite Integral     Approximate definite integrals using Riemann sums. [ left endpoints only ]    Evaluate definite integrals using geometric area formulas.    Evaluate definite integrals using the formal definition of a definite integral.    Apply properties of definite integrals ( constant multiple, sum\/difference, switching limits, splitting ).       6.2 The Fundamental Theorem of Calculus     Apply Part 1 of the Fundamental Theorem of Calculus to find derivatives.    Apply Part 2 of the Fundamental Theorem of Calculus to evaluate definite integrals.       6.3.1 Cumulative Change     Calculate the cumulative change in a function over an interval.       6.3.2 Average Values     Calculate the average value of a function over an interval.       6.3.3 The Mean Value Theorem     Apply the Mean Value Theorem.       6.3.4 Areas     Calculate the area of the region bounded between two curves on a given interval.    Calculate the area of the region bounded between two curves based on their points of intersection.    Calculate the area of the region bounded between two curves that switch positions within an interval.       6.3.5 The Volume of a Solid     Apply the disk method to calculate the volume of a solid of revolution where the axis of rotation is or .    Apply the washer method to calculate the volume of a solid of revolution where the axis of rotation is or .       6.3.6 Arc Length     Calculate the arc length of a curve defined by a function over a given interval.       7.1 The Substitution Rule     Apply -substitution to evaluate integrals.       7.2 Integration by Parts and Practicing Integration     Apply integration by parts to evaluate integrals.    Apply integration by parts multiple times to evaluate integrals.    Apply -substitution followed by integration by parts to evaluate integrals.    Recognize when to use -substitution versus integration by parts to evaluate integrals.       7.3 Rational Functions and Partial Fractions     Apply partial fraction decomposition to evaluate integrals of rational functions when the denominator is a product of distinct linear factors.    Apply partial fraction decomposition to evaluate integrals of rational functions when the denominator contains repeated linear factors.    Apply partial fraction decomposition to evaluate integrals of rational functions when the denominator contains irreducible quadratic factors.    Apply polynomial long division and partial fraction decomposition to evaluate integrals of rational functions.    Recognize when to use -substitution versus partial fraction decomposition to evaluate integrals of rational functions.       7.4 Improper Integrals     Recognize when an integral is improper.    Evaluate improper integrals with numerical limits.    Evaluate improper integrals with infinite limits.    Apply the Direct Comparison Test to determine whether an improper integral converges or diverges.       6.3 ( APEX Calculus ) Trigonometric Integrals     Evaluate integrals of powers of and .    Evaluate integrals of powers of and .       6.4 ( APEX Calculus ) Trigonometric Substitution     Apply trigonometric substitution to evaluate integrals involving .    Apply trigonometric substitution to evaluate integrals involving .    Apply trigonometric substitution to evaluate integrals involving .    Recognize when to use -substitution versus integration by parts versus trigonometric substitution to evaluate integrals involving , , or .       8.1 Solving Separable Differential Equations     Find particular solutions to separable differential equations.       8.2 Equilibria and Their Stability     Determine the equilibria of autonomous differential equations graphically and algebraically.    Determine the stability of the equilibria of an autonomous differential equation.       8.3 Differential Equation Models     Analyze and apply mathematical models.      "
},
{
  "id": "sec-antiderivatives",
  "level": "1",
  "url": "sec-antiderivatives.html",
  "type": "Section",
  "number": "1.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives   Motivation  In differential calculus (Math 7A), we learn how to find the rate of change (derivative) of a function. Integral calculus (Math 7B) asks the reverse question: if we know a rate of change, can we recover the original quantity ?  Examples from the natural sciences include:    growth rate population size,    reaction rate amount of product formed,    velocity position.      A brief review of basic derivatives  Antidifferentiation reverses differentiation. The derivative rules most useful in this section are summarized below.   Basic derivatives                                                     We will also use the constant-multiple rule and the chain rule with a linear inside function. For example,     Poll: Reversing a derivative   Which of the following functions have derivative ? Select all that apply.                          Both and have derivative . More generally, every function of the form , where is any constant, has derivative .     Antiderivative   A function is an antiderivative of if      An antiderivative of   Find an antiderivative of .    A first guess might be , but   so this is not an antiderivative of . Instead, consider   Differentiating gives   Therefore is an antiderivative of .  It is not the only one. Adding any constant does not change the derivative, so the general antiderivative is   where is an arbitrary constant.     The constant of integration  If is an antiderivative of , then is also an antiderivative for every constant . We therefore include a constant of integration when writing a general antiderivative.   "
},
{
  "id": "tab-basic-derivatives",
  "level": "2",
  "url": "sec-antiderivatives.html#tab-basic-derivatives",
  "type": "Table",
  "number": "1.1.1",
  "title": "Basic derivatives",
  "body": " Basic derivatives                                                    "
},
{
  "id": "act-poll-antiderivatives",
  "level": "2",
  "url": "sec-antiderivatives.html#act-poll-antiderivatives",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Poll: Reversing a derivative.",
  "body": " Poll: Reversing a derivative   Which of the following functions have derivative ? Select all that apply.                          Both and have derivative . More generally, every function of the form , where is any constant, has derivative .   "
},
{
  "id": "def-antiderivative",
  "level": "2",
  "url": "sec-antiderivatives.html#def-antiderivative",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Antiderivative.",
  "body": " Antiderivative   A function is an antiderivative of if    "
},
{
  "id": "ex-antiderivative-x2",
  "level": "2",
  "url": "sec-antiderivatives.html#ex-antiderivative-x2",
  "type": "Example",
  "number": "1.1.4",
  "title": "An antiderivative of <span class=\"process-math\">\\(x^2\\)<\/span>.",
  "body": " An antiderivative of   Find an antiderivative of .    A first guess might be , but   so this is not an antiderivative of . Instead, consider   Differentiating gives   Therefore is an antiderivative of .  It is not the only one. Adding any constant does not change the derivative, so the general antiderivative is   where is an arbitrary constant.   "
},
{
  "id": "rem-constant-of-integration",
  "level": "2",
  "url": "sec-antiderivatives.html#rem-constant-of-integration",
  "type": "Remark",
  "number": "1.1.5",
  "title": "The constant of integration.",
  "body": " The constant of integration  If is an antiderivative of , then is also an antiderivative for every constant . We therefore include a constant of integration when writing a general antiderivative.  "
},
{
  "id": "sec-basic-antiderivative-rules",
  "level": "1",
  "url": "sec-basic-antiderivative-rules.html",
  "type": "Section",
  "number": "1.2",
  "title": "Basic Antiderivative Rules",
  "body": " Basic Antiderivative Rules  The basic derivative rules can be read in reverse to obtain antiderivative rules.   Basic antiderivative rules    Function  General antiderivative  Condition                                                      Antiderivatives may be found term by term, and constant multiples may be factored out. In particular, if and , then   Here, the expression on the right is an antiderivative of the expression on the left.   The case  The power rule for antiderivatives does not apply when , because it would require division by zero. Instead,     Accounting for a constant factor   Find the general antiderivative of .    We know that the derivative of is . This is twice the function we want. Multiplying by compensates for this extra factor:   Therefore, the general antiderivative is      Finding a general antiderivative   Find the general antiderivative of   Try to find the antiderivative before reading the solution. Remember to check your answer by differentiating.    We antidifferentiate term by term.  Since    and   the general antiderivative is   We check by differentiating:      Checking your answer  A useful way to check an antiderivative is to differentiate your answer. You should recover the original function.   "
},
{
  "id": "tab-basic-antiderivatives",
  "level": "2",
  "url": "sec-basic-antiderivative-rules.html#tab-basic-antiderivatives",
  "type": "Table",
  "number": "1.2.1",
  "title": "Basic antiderivative rules",
  "body": " Basic antiderivative rules    Function  General antiderivative  Condition                                                     "
},
{
  "id": "warn-power-rule-minus-one",
  "level": "2",
  "url": "sec-basic-antiderivative-rules.html#warn-power-rule-minus-one",
  "type": "Warning",
  "number": "1.2.2",
  "title": "The case <span class=\"process-math\">\\(n=-1\\)<\/span>.",
  "body": " The case  The power rule for antiderivatives does not apply when , because it would require division by zero. Instead,   "
},
{
  "id": "ex-linear-inside-antiderivatives",
  "level": "2",
  "url": "sec-basic-antiderivative-rules.html#ex-linear-inside-antiderivatives",
  "type": "Example",
  "number": "1.2.3",
  "title": "Accounting for a constant factor.",
  "body": " Accounting for a constant factor   Find the general antiderivative of .    We know that the derivative of is . This is twice the function we want. Multiplying by compensates for this extra factor:   Therefore, the general antiderivative is    "
},
{
  "id": "ex-general-antiderivative",
  "level": "2",
  "url": "sec-basic-antiderivative-rules.html#ex-general-antiderivative",
  "type": "Example",
  "number": "1.2.4",
  "title": "Finding a general antiderivative.",
  "body": " Finding a general antiderivative   Find the general antiderivative of   Try to find the antiderivative before reading the solution. Remember to check your answer by differentiating.    We antidifferentiate term by term.  Since    and   the general antiderivative is   We check by differentiating:    "
},
{
  "id": "rem-check-by-differentiating",
  "level": "2",
  "url": "sec-basic-antiderivative-rules.html#rem-check-by-differentiating",
  "type": "Remark",
  "number": "1.2.5",
  "title": "Checking your answer.",
  "body": " Checking your answer  A useful way to check an antiderivative is to differentiate your answer. You should recover the original function.  "
},
{
  "id": "sec-initial-value-problems",
  "level": "1",
  "url": "sec-initial-value-problems.html",
  "type": "Section",
  "number": "1.3",
  "title": "Differential Equations and Initial Value Problems",
  "body": " Differential Equations and Initial Value Problems  Antidifferentiation can be used to solve simple differential equations.   Solving a differential equation by antidifferentiation   Find the general solution of     Rewrite the right-hand side as . Antidifferentiating gives      Initial value problem   An initial value problem consists of a differential equation together with a specified value of the solution at a particular point. The additional condition can be used to determine the constant of integration.     An initial value problem   Solve   subject to the initial condition     First find the general solution:   Now use the initial condition:   Therefore , and the particular solution is      A family of solutions and the solution selected by the initial condition.    The initial condition selects one member of the family of general solutions, as shown in .  "
},
{
  "id": "ex-simple-de",
  "level": "2",
  "url": "sec-initial-value-problems.html#ex-simple-de",
  "type": "Example",
  "number": "1.3.1",
  "title": "Solving a differential equation by antidifferentiation.",
  "body": " Solving a differential equation by antidifferentiation   Find the general solution of     Rewrite the right-hand side as . Antidifferentiating gives    "
},
{
  "id": "def-initial-value-problem",
  "level": "2",
  "url": "sec-initial-value-problems.html#def-initial-value-problem",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Initial value problem.",
  "body": " Initial value problem   An initial value problem consists of a differential equation together with a specified value of the solution at a particular point. The additional condition can be used to determine the constant of integration.   "
},
{
  "id": "ex-ivp-population",
  "level": "2",
  "url": "sec-initial-value-problems.html#ex-ivp-population",
  "type": "Example",
  "number": "1.3.3",
  "title": "An initial value problem.",
  "body": " An initial value problem   Solve   subject to the initial condition     First find the general solution:   Now use the initial condition:   Therefore , and the particular solution is    "
},
{
  "id": "fig-ivp-family",
  "level": "2",
  "url": "sec-initial-value-problems.html#fig-ivp-family",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " A family of solutions and the solution selected by the initial condition.   "
},
{
  "id": "formula-sheet",
  "level": "1",
  "url": "formula-sheet.html",
  "type": "Appendix",
  "number": "A",
  "title": "Formula Sheet",
  "body": " Formula Sheet  The following equations and formulas are included on the formula sheet provided during exams for this course.   Basic Derivatives     Trigonometric Values in Radians   Common Sine and Cosine Values                                                                                               Trigonometric Identities      Double-Angle Formulas and Variants     Exponent Rules     Logarithm Rules    "
},
{
  "id": "formula-trig-values-2",
  "level": "2",
  "url": "formula-sheet.html#formula-trig-values-2",
  "type": "Table",
  "number": "A.0.1",
  "title": "Common Sine and Cosine Values",
  "body": " Common Sine and Cosine Values                                                                                            "
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
