---
layout: page
title: StableFace
description: A Stable Diffusion Model for Faces with Guidance on Emotions
img: assets/img/StableFace.webp
importance: 1
category: work
related_publications: false
---

I explored guidance mechanisms for Diffusion Models to achieve better performance in realism and emotion representation. The result is **StableFace**, a fine-tuned version of Stable Diffusion specialized in generating realistic facial expressions with high emotional fidelity.

My objective was to keep the sheer image quality of the base model (`SG161222/Realistic_Vision_V6.0_B1_noVAE`) while adding a dimension it largely lacks: **affective control**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stableface_anger.jpg" title="Generated Anger" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stableface_happy.jpg" title="Generated Happiness" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stableface_surprise.jpg" title="Generated Surprise" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generated images demonstrating emotional consistency. The model was fine-tuned on balanced emotion classes (anger, contempt, disgust, fear, happy, neutral, sad, surprise) to ensure specific expressions could be triggered reliably.
</div>

## Methodology

To guide the generation process, I incorporated a **multi-modal conditioning mechanism**. This involves a lightweight transformer encoder that processes auxiliary signals such as:

- **Depth maps**
- **Facial alignment landmarks**
- **FLAME 3D facial model renderings**

These additional modalities provide structural and geometric constraints to steer the diffusion process more effectively. For supervision, I employed a composite loss function combining **L1 loss**, **LPIPS perceptual loss**, and an **EmoNet-based emotion classification loss**.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stableface_barplot.jpg" title="Global Accuracy Bar Plot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stableface_radar.jpg" title="Emotion Radar Plot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Global accuracy (Top-1 and Top-3) comparing the baseline to the fine-tuned model. Right: Radar plot showing per-emotion improvements. The fine-tuned model (green) closes large gaps in anger, disgust, and surprise.
</div>

## Results

To check whether the fine-tuning step really taught Stable Diffusion to "feel," I generated a balanced test-set of faces and scored them with an off-the-shelf classifier.

- **Accuracy:** Top-1 accuracy improved from 31% to **39%**, and Top-3 accuracy jumped from 62% to **72%**.
- **Realism (FID):** The Fréchet Inception Distance dropped from 106.027 to **84.367** (lower is better), a 21-point improvement in realism.
- **Structure (DISTS):** Structural fidelity improved by roughly 2.6%.

In short, a few hours of targeted fine-tuning turned a "good enough" diffusion model into one that can express the full emotional palette with much higher confidence.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stableface_grid.jpg" title="Comparison Grid" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A grid comparison of labels found by EmoNet on the generated images versus Ground Truth (GT).
</div>
