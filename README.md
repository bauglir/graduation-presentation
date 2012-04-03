# Computer-Aided Algorithm Design for Audio Processing

Graduation Presentation by Joris Kraak held on April 10, 2012

## Slide Notes

### Title

### Overview

### Algorithm Design
* What type of algorithms do we want to design? -> Block based algorithms that can be tuned through parameters
* Noise reduction algorithm to improve intelligibility of speech in stationary noise

### Computer-Aided Algorithm Design
* Term coined by Holger Hoos in 2010 to describe a solution to manual algorithm design
* Inherent problems with algorithm design:
  * Time-consuming due to large parameter spaces
  * Time consumption leads to personal investment
  * Personal investment leads to more complicated designs

### Audio Algorithm Design
* What does our ideal way of designing audio algorithms look like, i.e. What are the creative tasks of a researcher?
* Set of problem instances describing the type of signals that we want to process (e.g. obtained by walking around with a microphone and recording problematic signals)
* Some performance measure operating on the final state of the algorithm after processing a signal

### Algorithm Performance
* Explain that intelligibility is linked to SNR
* Picture of L for the example algorithm
  * Why is L expensive? What is fed to L is the final output of H after processing x completely. Processing the signal x through H can take a lot of time
* What are the benefits of using this sort of performance measure? (Preference elicitation, multiple signal performance functions)
* The Expected Loss introduces a double loop in the optimization process. Each additional x requires N new evaluations of L
* Computing EL and looking for the optimal theta is the tedious task that we want the computer to do
* SNR Loss

### Traditional Methods
* What does it take to solve EL?
* Exponential growth of optimization time in number of parameters (that has largely been solved though)
* Require large number of signals, to obtain accurate density over that input space
* Which in turn requires a lot of evaluations of L

### Results
* Ran an experiment to improve intelligibility for 3 different SNR losses
* Note that convergence is quick, but that each iteration requires a large amount of calls to L

### Model-Based Methods
* Sample once in L, Update model of EL
* Already tell the speedup gain we get (1 order of magnitude)

### Optimization Strategy

### Robust Efficient Global Optimization
* EL is _never_ calculated explicitly
* Model using Gaussian Processes
  * Use probabilities to model uncertainty about function values
  * Each point in the graph has a mean and variance
* Iteratively update the model of EL using evaluations of L
* Optimal design of experiments

### Convergence Behavior


### Conclusions
* Seemed very promising, but not a solve-all solution
* Numerical Instabilities

### Questions?
