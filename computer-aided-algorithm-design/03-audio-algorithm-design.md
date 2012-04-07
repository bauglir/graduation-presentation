!SLIDE smbullets incremental

# Audio Algorithm Design

* _Algorithm proposal_
* \\(y\_{k}=H(\theta,x\_{k})\\) with \\(\theta\in\Theta\\)
* Model the world with relevant _problem instances_
* \\(\mathcal{X}=\\{x\_{1},\\ldots,x\_{K}\\}\\) with \\(p(\mathcal{X})\\)
* _Algorithm performance_ function
* \\(\text{EL}(\theta) = \sum\_{k=1}^{K} p(x\_k) L(y\_{k},r\_{k})\\)

.notes H is the noise reduction algorithm. Intelligibility is related to SNR of x. Higher SNR means better intelligibility. To make speech intelligible a certain boost in SNR is required, which depends on SNR hearing loss. Loss function is log-spectral density. The optimal parameters minimize EL. We want to find optimal parameters, so can be seen as an optimization problem.
