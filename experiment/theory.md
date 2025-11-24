# Theory


### Rectifier

In our earlier experiment we have seen that a full-wave rectifier is exactly the same as the half-wave, but allows unidirectional current through the load during the entire sinusoidal cycle (as opposed to only half the cycle in the half-wave). A full-wave rectifier converts the whole of the input waveform to one of constant polarity (positive or negative) at its output.

<div align="center">
<img src="images/capar1.png" style="width:100%; height:auto;">
<p>Figure 1  </p>
</div>

### Filter

<div align="center">
<img src="images/capar2.png" style="width:100%; height:auto;">
<p>Figure 2  </p>
</div>

What is really desired is to convert the pulsating output of the rectifier to a constant DC supply. Thus we would like to ‘filter’ the pulsating input signal.

<div align="center">
<img src="images/capar3.png" style="width:100%; height:auto;">
<p>Figure 3  </p>
</div>

We can do this by splitting the input waveform into AC (high frequency) and the DC components (very low frequency) and by then ‘rejecting’ the high frequency components.



### Filtering

From our filtering experiments we have seen that the simplest kind of filter that can perform the filtering task just described is a capacitor. Thus, if we connect a capacitor directly across the output of a rectifier, the AC components will ‘see’ a low impedance path to ground and will not, therefore appear in the output.


<div align="center">
<img src="images/capar4.png" style="width:100%; height:auto;">
<p>Figure 4  </p>
</div>

### Full Wave Rectification + Filtering

The smoothing capacitor converts the full-wave rippled output of the rectifier into a smooth DC output voltage. The smoothing capacitor acts as a tank.


<div align="center">
<img src="images/capar5.png" style="width:100%; height:auto;">
<p>Figure 5  </p>
</div>

### Ripple Voltage and Ripple Factor

Assuming a finite capacitor is connected, since a new charging pulse occurs every half cycle the capacitor charges and discharges very frequently. We can observe that smaller the Vpp, the more the waveform will resemble a pure DC voltage. The variable portion is known as ‘ripple’ and the value Vpp is known as the ripple voltage. Further the ratio of the ripple voltage to the DC or average voltage is known as the ripple factor.

<div align="center">
<img src="images/capar6.png" style="width:100%; height:auto;">
<p>Figure 6  </p>
</div>

### ‘Filling the Gaps’

So we see that, a capacitor-input filter will charge and discharge such that it fills in the “gaps” between each peak. This reduces variations of voltage. As we have seen, the remaining voltage variation is called ripple voltage.
<div align="center">
<img src="images/capar7.png" style="width:100%; height:auto;">
<p>Figure 7  </p>
</div>

### Choosing the Capacitor

Since a rectifier circuit is designed with a particular load in mind, choosing the capacitor needs careful analysis. Since low ripple factors a desired, choosing a large capacitance value is not practical. This is because larger capacitance will cost more and will create higher peak currents in the transformer secondary and in the supply feeding it. In the subsequent experiments, let us see how time constant plays a role in the rectified output waveform shape and characteristics.


<div align="center">
<img src="images/capar8.png" style="width:100%; height:auto;">
<p>Figure 8  </p>
</div>

### Half Wave vs Full Wave Capacitive Rectification

If the capacitance and voltage sources used are the same, which one among the two – half wave or full wave gives lesser ripple effect ?


The advantage of a full-wave rectifier over a half-wave is quite clear. The capacitor can more effectively reduce the ripple when the time between peaks is shorter.

<div align="center">
<img src="images/capar9.png" style="width:100%; height:auto;">
<p>Figure 9  </p>
</div>

