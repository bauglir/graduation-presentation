# Computer-Aided Algorithm Design for Audio Processing

Graduation Presentation by Joris Kraak held on April 10, 2012

## Slide Notes

### Title

### Overview

### Computer-Aided Algorithm Design
* Term coined by Hoos
* What does it mean in a general sense?

### Audio Algorithm Design
* What does our ideal way of designing audio algorithms look like?
* Block based processing of a signal x
* Set of problem instances describing the type of signals that we want to process (e.g. obtained by walking around with a microphone and recording problematic signals)
* Some performance measure operating on the final state of the algorithm after processing a signal

### Expected Loss Function
* Why is L expensive? What is fed to L is the final output of H after processing x completely. Processing the signal x through H can take a lot of time
* What are the benefits of using this sort of performance measure? (Preference elicitation, multiple signal performance functions)
* The Expected Loss introduces a double loop in the optimization process. Each additional x requires N new evaluations of L
