!SLIDE smbullets incremental

# Audio Algorithm Design

* Algorithm Proposal
* \\([y\_{t}, s\_{t}]=H(\theta,x\_{t},s\_{t-1})\\) with \\(\theta\in\Theta\\)
* Model the world with Problem Instances
* \\(\mathcal{X}=\\{x\_{1},\\ldots,x\_{K}\\}\\) with \\(p(\mathcal{X})\\)
* Algorithm Performance Function
* \\(\text{EL}(\theta) = \sum\_{k=1}^{K} p(x\_k) L(s\_{T,k},r\_{k})\\)

.notes H is the noise reduction algorithm. Intelligibility is related to SNR of x. Higher SNR means better intelligibility. To make speech intelligible a certain boost in SNR is required, which depends on SNR hearing loss. Loss function is log-spectral density. The optimal parameters minimize EL. We want to find optimal parameters, so can be seen as an optimization problem.
