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
  "body": " The Area Function  Let be a continuous function. Define a new function by   The value represents the net area accumulated under between and .  To understand how changes, compare and :   If is small, the area over this short interval is approximately the area of a rectangle of height and width :   Dividing by gives   Taking the limit as leads to the Fundamental Theorem of Calculus.  "
},
{
  "id": "sec-ftc-part-one",
  "level": "1",
  "url": "sec-ftc-part-one.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Fundamental Theorem of Calculus, Part I",
  "body": " The Fundamental Theorem of Calculus, Part I   Fundamental Theorem of Calculus, Part I   If is continuous and   then     In words, differentiating an accumulated integral returns the original function.   Differentiating an integral   Differentiate     By the Fundamental Theorem of Calculus,     "
},
{
  "id": "thm-ftc-one",
  "level": "2",
  "url": "sec-ftc-part-one.html#thm-ftc-one",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Fundamental Theorem of Calculus, Part I.",
  "body": " Fundamental Theorem of Calculus, Part I   If is continuous and   then    "
},
{
  "id": "ex-ftc-direct",
  "level": "2",
  "url": "sec-ftc-part-one.html#ex-ftc-direct",
  "type": "Example",
  "number": "3.2.2",
  "title": "Differentiating an integral.",
  "body": " Differentiating an integral   Differentiate     By the Fundamental Theorem of Calculus,    "
},
{
  "id": "sec-leibniz-rule",
  "level": "1",
  "url": "sec-leibniz-rule.html",
  "type": "Section",
  "number": "3.3",
  "title": "Variable Limits and the Leibniz Rule",
  "body": " Variable Limits and the Leibniz Rule  If the upper limit of integration is a function of , we combine the Fundamental Theorem of Calculus with the chain rule.   A variable upper limit   Differentiate     The Fundamental Theorem of Calculus gives the value of the integrand at the upper limit, and the chain rule contributes the derivative of the upper limit:     If the lower limit depends on , reversing the limits introduces a minus sign.   A variable lower limit   Differentiate     Reverse the order of integration:   Therefore,      Variable upper and lower limits   If   then     "
},
{
  "id": "ex-ftc-chain-rule",
  "level": "2",
  "url": "sec-leibniz-rule.html#ex-ftc-chain-rule",
  "type": "Example",
  "number": "3.3.1",
  "title": "A variable upper limit.",
  "body": " A variable upper limit   Differentiate     The Fundamental Theorem of Calculus gives the value of the integrand at the upper limit, and the chain rule contributes the derivative of the upper limit:    "
},
{
  "id": "ex-ftc-lower-limit",
  "level": "2",
  "url": "sec-leibniz-rule.html#ex-ftc-lower-limit",
  "type": "Example",
  "number": "3.3.2",
  "title": "A variable lower limit.",
  "body": " A variable lower limit   Differentiate     Reverse the order of integration:   Therefore,    "
},
{
  "id": "thm-leibniz-variable-limits",
  "level": "2",
  "url": "sec-leibniz-rule.html#thm-leibniz-variable-limits",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Variable upper and lower limits.",
  "body": " Variable upper and lower limits   If   then    "
},
{
  "id": "sec-cumulative-change",
  "level": "1",
  "url": "sec-cumulative-change.html",
  "type": "Section",
  "number": "4.1",
  "title": "Cumulative Change",
  "body": " Cumulative Change  Content coming soon.  "
},
{
  "id": "sec-average-values",
  "level": "1",
  "url": "sec-average-values.html",
  "type": "Section",
  "number": "4.2",
  "title": "Average Values",
  "body": " Average Values  Content coming soon.  "
},
{
  "id": "sec-mean-value-theorem-integrals",
  "level": "1",
  "url": "sec-mean-value-theorem-integrals.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Mean Value Theorem for Integrals",
  "body": " The Mean Value Theorem for Integrals  Content coming soon.  "
},
{
  "id": "sec-area-between-curves",
  "level": "1",
  "url": "sec-area-between-curves.html",
  "type": "Section",
  "number": "4.4",
  "title": "Areas",
  "body": " Areas  Content coming soon.  "
},
{
  "id": "sec-volumes",
  "level": "1",
  "url": "sec-volumes.html",
  "type": "Section",
  "number": "4.5",
  "title": "Volumes of Solids",
  "body": " Volumes of Solids  Content coming soon.  "
},
{
  "id": "sec-substitution",
  "level": "1",
  "url": "sec-substitution.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Substitution Rule",
  "body": " The Substitution Rule  Content coming soon.  "
},
{
  "id": "sec-integration-by-parts",
  "level": "1",
  "url": "sec-integration-by-parts.html",
  "type": "Section",
  "number": "5.2",
  "title": "Integration by Parts",
  "body": " Integration by Parts  Content coming soon.  "
},
{
  "id": "sec-partial-fractions",
  "level": "1",
  "url": "sec-partial-fractions.html",
  "type": "Section",
  "number": "5.3",
  "title": "Rational Functions and Partial Fractions",
  "body": " Rational Functions and Partial Fractions  Content coming soon.  "
},
{
  "id": "sec-improper-integrals",
  "level": "1",
  "url": "sec-improper-integrals.html",
  "type": "Section",
  "number": "5.4",
  "title": "Improper Integrals",
  "body": " Improper Integrals  Content coming soon.  "
},
{
  "id": "sec-trigonometric-integrals",
  "level": "1",
  "url": "sec-trigonometric-integrals.html",
  "type": "Section",
  "number": "6.1",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals  Content coming soon.  "
},
{
  "id": "sec-trigonometric-substitution",
  "level": "1",
  "url": "sec-trigonometric-substitution.html",
  "type": "Section",
  "number": "6.2",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution  Content coming soon.  "
},
{
  "id": "sec-separable-differential-equations",
  "level": "1",
  "url": "sec-separable-differential-equations.html",
  "type": "Section",
  "number": "7.1",
  "title": "Solving Separable Differential Equations",
  "body": " Solving Separable Differential Equations  Content coming soon.  "
},
{
  "id": "sec-equilibria-stability",
  "level": "1",
  "url": "sec-equilibria-stability.html",
  "type": "Section",
  "number": "7.2",
  "title": "Equilibria and Their Stability",
  "body": " Equilibria and Their Stability  Content coming soon.  "
},
{
  "id": "sec-differential-equation-models",
  "level": "1",
  "url": "sec-differential-equation-models.html",
  "type": "Section",
  "number": "7.3",
  "title": "Differential Equation Models",
  "body": " Differential Equation Models  Content coming soon.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
