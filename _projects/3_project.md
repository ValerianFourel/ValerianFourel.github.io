---
layout: page
title: MiniFaceGPT
description: A VLM to Label Human Faces?
img: assets/img/miniFaceGPT.webp
importance: 2
category: work
related_publications: false
---

In this project, I performed a fine-tuning of the **MiniGPT-v2** framework, modifying it to incorporate **LoRA** (Low-Rank Adaptation) for efficient training. Specifically, I used **BERT** as the visual tokenizer and **LLaMA 2–7B** as the language backbone.

<p>Find the article at: <a href="https://medium.com/@valerian.fourel/minifacegpt-a-vlm-to-label-human-faces-17a281270eb3">https://medium.com/@valerian.fourel/minifacegpt-a-vlm-to-label-human-faces-17a281270eb3</a></p>
<p>Find the Space at: <a href="https://huggingface.co/spaces/ValerianFourel/miniFaceGPT">https://huggingface.co/spaces/ValerianFourel/miniFaceGPT</a></p>
<p>Find the code at: <a href="https://github.com/ValerianFourel/MiniGPT-4">https://github.com/ValerianFourel/MiniGPT-4</a></p>

- **Improved Spotting:** After fine-tuning, the model learns to spot the correct label much better than before.
- **Limitations:** While accuracy improved, it still struggles with complex emotions like _contempt_ and is not yet reliable enough to replace dedicated classifiers like EmoNet.

A key insight from this work is that performance can improve significantly when Vision-Language Models (VLMs) are trained on a well-defined data manifold. However, unlocking true reliability often requires **agentic capabilities**—where the model can choose the right tool for the task—rather than just scaling laws alone.

You can try the model yourself on the [HuggingFace Space](https://huggingface.co/spaces/ValerianFourel/miniFaceGPT) or access the weights and code below.

- **Weights:** [HuggingFace/FaceVLM](https://huggingface.co/ValerianFourel/FaceVLM)
